class CommentList{
    public commentSum:number
    public commentItemList:Array<CommentItem>
    public pageIndex:number
    public pageSize:number
    public hasMore:boolean = true
    constructor(commentNum:number,commentItemList:Array<CommentItem>,pageIndex:number,pageSize:number){

    }
}
class CommentItem{
    public commentorImage:string
    public commentorName:string
    public commentTime:string
    public commentContent:string
    public replyCount:number
    public favoriteCount:number
    public replyList:Array<ReplyItem>
}
class ReplyItem{
    public replierImage:string
    public replierName:string
    public replyTime:string
    public replyContent:string
}