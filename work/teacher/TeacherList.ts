class TeacherList {
    public pageIndex: number
    public pageSize: number
    public keyword: string = ""
    public classifyCode: string = "all"
    public list: Array<Teacher>
    constructor(pageIndex: number = 1, pageSize: number) {
        this.pageIndex = pageIndex
        this.pageSize = pageSize
    }
}