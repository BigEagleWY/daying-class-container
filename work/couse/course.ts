class Course {
    public courseId: number
    public name: string
    public isFavorite: boolean = false
    public author: string
    public rate: number = 5
    public description: string
    public currentChapterId: number
    public currentChapterName: string
    constructor(courseId: number, name: string) {
        this.courseId = courseId;
        this.name = name
    }
    setCurrnetChapterInfo(menuList:Array<JSON>){
        
    }
}

//menu类待定义
//评论类待定义
