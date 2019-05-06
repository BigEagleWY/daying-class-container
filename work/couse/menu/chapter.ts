class Chapter {
    public id: number
    public name: string
    public isChapter: boolean
    public overed: boolean
    public type: string
    protected canClick: boolean = true
    constructor(id: number, name: string, isChapter: boolean, overed: boolean, type: string) {
        this.id = id
        this.name = name
        this.isChapter = isChapter
        this.overed = overed
        this.type = type
    }
    setCanClick(canClick: boolean) {
        this.canClick = canClick
    }
}
export default Chapter;