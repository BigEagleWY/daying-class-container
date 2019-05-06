import Chapter from "./Chapter";
class Menu {
    public chapters: Array<Chapter>
    protected allowJump: boolean
    constructor(chapterArray: Array<Chapter> = []) {
        this.chapters = chapterArray
    }
    setAllowJump(allowJump: boolean): void {
        this.allowJump = allowJump
        if (!this.allowJump) {
            for (let i = 0; i < this.chapters.length; i++) {
                if (this.chapters[i].overed || (i > 0 && !this.chapters[i].overed && this.chapters[i - 1].overed) || (i == 0 && !this.chapters[i].overed)) {
                    this.chapters[i].setCanClick(true)
                } else {
                    this.chapters[i].setCanClick(false)
                }
            }
        } else {
            for (let i = 0; i < this.chapters.length; i++) {
                this.chapters[i].setCanClick(true)
            }
        }
    }
    refreshMenuStatus(ChapterArray: Array<Chapter>): void {
        for (let i = 0; i < ChapterArray.length; i++) {
            this.chapters[i].overed = ChapterArray[i].overed
        }
        if(!this.allowJump){
            this.setAllowJump(this.allowJump)
        }
    }
}
export default Menu;