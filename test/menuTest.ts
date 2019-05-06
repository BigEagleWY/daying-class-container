import Chapter from "../work/couse/menu/Chapter";
import Menu from "../work/couse/menu/Menu";
const chapterData = [
    {
        id:"1095943135353348096",
        materialId:"1090495264376008704",
        materialType:4,
        name:"1",
        overed:1
    },{
        id:"1095943166806433792",
        materialId:"1090494660564004864",
        materialType:2,
        name:"2",
        overed:0
    },{
        id:"1095943192555266048",
        materialId:"1090494159457923072",
        materialType:1,
        name:"3",
        overed:0
    },{
        id:"1095943221709873152",
        materialId:"1090494033234538496",
        materialType:3,
        name:"4",
        overed:0
    },{
        id:"1095943253393645568",
        materialId:"1089812635238535168",
        materialType:3,
        name:"5",
        overed:0
    },{
        id:"1095943287724023808",
        materialId:"1088725984244379648",
        materialType:1,
        name:"6",
        overed:0
    },
];

function getChapterClassByData(data):Array<Chapter>{
    var result:Array<Chapter> = []
    for(let i = 0;i<data.length;i++){
        let id = data[i].id
        let name = data[i].name
        let isChapter = data[i].materialId?true:false
        let overed = data[i].overed ==1?true:false
        let type = data[i].materialType
        let chapterClassItem = new Chapter(id,name,isChapter,overed,type)
        result.push(chapterClassItem)
    }
    return result;
}

let classGroup = getChapterClassByData(chapterData)
let menuClass = new Menu(classGroup)
menuClass.setAllowJump(false)
console.log(menuClass);

let chapterData2 = chapterData;
chapterData2[1].overed = 1;
classGroup = getChapterClassByData(chapterData2)
menuClass.refreshMenuStatus(classGroup)
console.log(menuClass);

menuClass.setAllowJump(true)
console.log(menuClass)