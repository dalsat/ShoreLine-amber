define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---

    'tide_lib/devel',
    'shoreline/ShoreLine-Tests',
    // 'shoreline/ShoreLine-Examples'
    'amber/legacy/Benchfib',
    'amber/legacy/Examples',
    'amber/legacy/IDE'

    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
