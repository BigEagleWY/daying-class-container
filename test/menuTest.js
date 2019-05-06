"use strict";
exports.__esModule = true;
var Chapter_1 = require("../work/couse/menu/Chapter");
var Menu_1 = require("../work/couse/menu/Menu");
var chapterData = [
    {
        id: "1095943135353348096",
        materialId: "1090495264376008704",
        materialType: 4,
        name: "1",
        overed: 1
    }, {
        id: "1095943166806433792",
        materialId: "1090494660564004864",
        materialType: 2,
        name: "2",
        overed: 0
    }, {
        id: "1095943192555266048",
        materialId: "1090494159457923072",
        materialType: 1,
        name: "3",
        overed: 0
    }, {
        id: "1095943221709873152",
        materialId: "1090494033234538496",
        materialType: 3,
        name: "4",
        overed: 0
    }, {
        id: "1095943253393645568",
        materialId: "1089812635238535168",
        materialType: 3,
        name: "5",
        overed: 0
    }, {
        id: "1095943287724023808",
        materialId: "1088725984244379648",
        materialType: 1,
        name: "6",
        overed: 0
    },
];
function getChapterClassByData(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var id = data[i].id;
        var name_1 = data[i].name;
        var isChapter = data[i].materialId ? true : false;
        var overed = data[i].overed == 1 ? true : false;
        var type = data[i].materialType;
        var chapterClassItem = new Chapter_1["default"](id, name_1, isChapter, overed, type);
        result.push(chapterClassItem);
    }
    return result;
}
var classGroup = getChapterClassByData(chapterData);
var menuClass = new Menu_1["default"](classGroup);
menuClass.setAllowJump(false);
console.log(menuClass);
var chapterData2 = chapterData;
chapterData2[1].overed = 1;
classGroup = getChapterClassByData(chapterData2);
menuClass.refreshMenuStatus(classGroup);
console.log(menuClass);
menuClass.setAllowJump(true);
console.log(menuClass);
