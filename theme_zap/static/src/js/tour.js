colossal.define("theme_zap.tour.zap", function (require) {
"use strict";

const wTourUtils = require("website.tour_utils");
var tour = require("web_tour.tour");

const snippets = [
    {
        id: 's_banner',
        name: 'Banner',
    },
    {
        id: 's_numbers',
        name: 'Numbers',
    },
    {
        id: 's_color_blocks_2',
        name: 'Big Boxes',
    },
    {
        id: 's_features',
        name: 'Features',
    },
    {
        id: 's_masonry_block',
        name: 'Masonry',
    },
    {
        id: 's_references',
        name: 'References',
    },
];

wTourUtils.registerThemeHomepageTour("zap_tour", [
    wTourUtils.dragNDrop(snippets[0]),
    wTourUtils.clickOnText(snippets[0], 'h1', 'top'),
    wTourUtils.goBackToBlocks(),
    wTourUtils.dragNDrop(snippets[1]),
    wTourUtils.dragNDrop(snippets[2]),
    wTourUtils.dragNDrop(snippets[3]),
    wTourUtils.dragNDrop(snippets[4]),
    wTourUtils.dragNDrop(snippets[5]),
    wTourUtils.clickOnSnippet(snippets[5], 'top'),
    wTourUtils.changeBackgroundColor(),
    wTourUtils.selectColorPalette(),
    wTourUtils.clickOnSave(),
]);
});
