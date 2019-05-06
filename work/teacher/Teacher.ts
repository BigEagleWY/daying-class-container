class Teacher {
    public teacherId: string
    public name: string
    public tag: string
    public classify: string
    public grade: string
    public signature: string
    public description: string
    public teacheCouseList: Array<JSON>
    constructor(teacherId: string) {
        this.teacherId = teacherId
    }
}