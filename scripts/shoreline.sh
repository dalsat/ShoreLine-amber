#!/bin/bash

# Copyright (c) 2014 Tommaso Dal Sasso
# Part of the ShoreLine suite -- https://github.com/ilredeitopi/shoreline

# synopsys: shoreline build|delete|start|stop

### Configuration

PHARO_BASE_URL="http://get.pharo.org"
PHARO_VERSION=${PHARO_VERSION:-40}

PHARO_URL="${PHARO_BASE_URL}/${PHARO_VERSION}"
PROJECT_DIR="`dirname $0`/.."
BUILD_DIR="${PROJECT_DIR}/build"
LOG_DIR="${PROJECT_DIR}"

CONFIG_DIR="${PROJECT_DIR}/config"
#SNAPSHOT_DIR="$PHARO_HOME/snapshots"

DOWNLOAD_CMD="curl -s"
PHARO_FLAGS= #"-mmap 256m -vm-sound-null -vm-display-null"


COMMAND=$1
#IMG_NAME=$2
N_ARGS=$#
#CONFIG_FILE=${CONFIG_FILE:-${IMG_NAME}.st}

# Utility Functions

function log() {
    # log message,[tag], color_code
    if [ -n $2 ]; then
        local TAG="$2"
    fi

    echo -e "\033[${3}m[${TAG}] $1\033[0m" >&1
}

function info() {
    log "$1" "$2" 37
}

function warn() {
    log "$1" 'WARNING' 33
}

function error() {
    # error message
    log "$1" 'ERROR' 31 >&2
}

function help_message {
    echo "usage: `basename $0` [-cp args] command image_name"
    exit $ERROR_SYNTAX
}


### detect OS

case `uname` in

    'Linux')
        PHARO_VM="/usr/bin/pharo-vm-nox"
    ;;

    'Darwin')
        PHARO_VM="${PROJECT_DIR}/vm/pharo"
    ;;
    *)
        error "unsupported platform $unamestr"
        exit
    ;;
esac

function init() {
    #for dir in
    echo;
}

function check_arguments() {
    if [[ $N_ARGS != $1 ]];
    then
        error "expected $1 arguments, $N_ARGS provided"
        help_message
        exit $ERROR_SYNTAX
    fi
}

function is_running() {
    # $1 is image name
    local result=false

    if [ -e "${1}/${1}.pid" ]; then
        result=true
    fi

    $result
}

function check_running() {
    if ! is_running $1; then
        error "image $1 is not running"
        exit
    fi
}

function check_not_running() {
    if is_running $1; then
        error "image $1 is running, stop it first"
        exit
    fi
}

function is_process_running() {
    check_running $1
    local pid=`cat "${1}.pid"`

    local result=false

    if [ `ps $pid | grep "$1" | wc -l` -gt 0 ]; then
        result=true
    fi

    $result
}

function exist() {
    # $1 is image name
    local result=false

    if [ -e "$1" ]; then
        result=true
    fi

    $result
}

function check_exist() {
    if ! exist $1; then
        error "image $1 does not exist"
        exit
    fi
}

function check_not_exist() {
    if exist $1; then
        error "image $1 exists"
        exit
    fi
}


# Commands

function download() {
    # $1 is image name
    # $2 is version
    check_arguments 1

    check_not_exist $1

    info "downloading pharo $PHARO_VERSION image" 'get'

    (
        mkdir -p "$1"
        cd "$1"

        $DOWNLOAD_CMD ${PHARO_URL} | bash
    )
}

function build() {

    check_not_exist $1
    download $1

    NAME=`basename $1`

    CONFIG_FILES=`find "${CONFIG_DIR}"/*.st -mindepth 1 -maxdepth 1 -type f -print0 | xargs -0 echo` || (error "no config file found"; exit)

    echo -e "\n[BUILD] `date` - $NAME build started" >> "${LOG_DIR}/${1}.log"
    info "building image $NAME" 'build'

    $PHARO_VM $PHARO_FLAGS \
        "$1/Pharo.image" \
        st $CONFIG_FILES --no-preferences --quit \
        2>> "${LOG_DIR}/${1}.log"

    echo -e "\n[BUILD] `date` - $NAME build finished" >> "${LOG_DIR}/${1}.log"
    info "image $NAME built" 'build'
}

function start() {
    check_exist $1
    check_not_running $1

    image_name=`basename $1`
    OPTIONS="--no-quit"

    echo -e "\n[INFO] `date` - $image_name started" >> "${LOG_DIR}/${image_name}.log"

    $PHARO_VM $PHARO_FLAGS \
        "$1/Pharo.image" $OPTIONS --no-preferences \
        2>> "${LOG_DIR}/${1}.log" #&

    #echo $! > "${1}/${image_name}.pid"
    info "image ${image_name} running" 'start'
}

function delete() {

    if [ -z $1 ]; then
        error "no directory to delete specified"
        exit
    fi

    check_exist $1
    check_not_running $1

    read -p "delete image $1? [y/n] " -n1 -r REPLY
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -r "$1"
        info "image $1 deleted" 'delete'
    fi

}

function stop() {
    check_exist $1
    check_running $1

    kill `cat "${1}/${1}.pid"`
    rm "${1}/${1}.pid"

    echo -e "\n[INFO] `date` - $1 stopped" >> "${LOG_DIR}/${1}.log"
    info "image $1 stopped" 'stop'
}

function snapshot() {
    check_exist $1

    local SNAPSHOT_NAME=${1}-`date "+%Y-%m-%d"`
    cp -r $IMG_DIR/$1 $SNAPSHOT_DIR/$SNAPSHOT_NAME
    info "taken snapshot of $SNAPSHOT_NAME" 'snapshot'
}

function status() {
    image=`basename $1`

    if is_running $image; then
        if is_process_running $image; then
            echo -en "\033[32m[running]\033[0m\t"
        else
            echo -en "\033[31m[defunct]\033[0m\t"
        fi
    else
        echo -en "\033[30m[stopped]\033[0m\t"
    fi
    echo $image
}


# Command selection
case $COMMAND in

    build)
        build $BUILD_DIR
    ;;

    delete)
        delete $BUILD_DIR
    ;;

    start)
        start $BUILD_DIR
    ;;

    # stop)
    #     stop $BUILD_DIR
    # ;;
    #
    # status)
    #     status $BUILD_DIR
    # ;;
    #
    # snapshot)
    #     snapshot $IMG_NAME
    # ;;

    *)
        help_message
    ;;
esac
