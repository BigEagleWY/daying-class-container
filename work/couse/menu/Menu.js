"use strict";
exports.__esModule = true;
var Menu = /** @class */ (function () {
    function Menu(chapterArray) {
        if (chapterArray === void 0) { chapterArray = []; }
        this.chapters = chapterArray;
    }
    Menu.prototype.setAllowJump = function (allowJump) {
        this.allowJump = allowJump;
        if (!this.allowJump) {
            for (var i = 0; i < this.chapters.length; i++) {
                if (this.chapters[i].overed || (i > 0 && !this.chapters[i].overed && this.chapters[i - 1].overed) || (i == 0 && !this.chapters[i].overed)) {
                    this.chapters[i].setCanClick(true);
                }
                else {
                    this.chapters[i].setCanClick(false);
                }
            }
        }
        else {
            for (var i = 0; i < this.chapters.length; i++) {
                this.chapters[i].setCanClick(true);
            }
        }
    };
    Menu.prototype.refreshMenuStatus = function (ChapterArray) {
        for (var i = 0; i < ChapterArray.length; i++) {
            this.chapters[i].overed = ChapterArray[i].overed;
        }
        if (!this.allowJump) {
            this.setAllowJump(this.allowJump);
        }
    };
    return Menu;
}());
exports["default"] = Menu;
