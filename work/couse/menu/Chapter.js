"use strict";
exports.__esModule = true;
var Chapter = /** @class */ (function () {
    function Chapter(id, name, isChapter, overed, type) {
        this.canClick = true;
        this.id = id;
        this.name = name;
        this.isChapter = isChapter;
        this.overed = overed;
        this.type = type;
    }
    Chapter.prototype.setCanClick = function (canClick) {
        this.canClick = canClick;
    };
    return Chapter;
}());
exports["default"] = Chapter;
