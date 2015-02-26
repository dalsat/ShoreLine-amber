define("shoreline/ShoreLine-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('ShoreLine-Tests');
$core.packages["ShoreLine-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["ShoreLine-Tests"].transport = {"type":"amd","amdNamespace":"shoreline"};

$core.addClass('ShoreLineTest', $globals.TestCase, [], 'ShoreLine-Tests');

});
