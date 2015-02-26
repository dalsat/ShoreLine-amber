define([
    'amber/deploy',
    // --- packages to be deployed begin here ---
    'amber-contrib-web/Web',
    'shoreline/ShoreLine',

    'tide_lib/deploy',

    'shoreline/ShoreLine-Core',
    'shoreline/ShoreLine-Router',

    'shoreline/ShoreLine-Widgets-Core',
    // 'shoreline/ShoreLine-Layout',
    'shoreline/ShoreLine-Widgets-Pages',

        // 'shoreline/ShoreLine-Model',
        // 'shoreline/ShoreLine-Data',

    'shoreline/ShoreLine-Announcements',

    'shoreline/ShoreLine-Widgets',
    'shoreline/ShoreLine-Pages',
    'shoreline/ShoreLine-Application',
        // 'shoreline/ShoreLine-Visualizations',
        // 'shoreline/ShoreLine-Reporter',

    // --- packages to be deployed end here ---
    "css!style/main",
    "css!bootstrap"

], function (amber) {
    return amber;
});
