const TYPES = {
    rect:1,
    ellipse:2,
    polygon:3
}
let idGen:number = 0;
class RenderObj{
    pos:Vector2;
    size:Vector2;
    type:number;
    color:string;
    text:string;
    filled:boolean;
    id:number;
    constructor(pos:Vector2,size:Vector2,type:number,color:string,filled:boolean,text:string){
        this.pos = pos;
        this.size = size;
        this.type = type;
        this.text = text;
        this.color = color;
        this.filled = filled;
        this.id = idGen++;
    }
    moveRelative(dist:Vector2){
        this.pos.x += dist.x;
        this.pos.y += dist.y;
    }
    moveTo(place:Vector2){
        this.pos.x = place.x;
        this.pos.y = place.y;
    }
    changeSizeRelative(amount:Vector2){
        this.size.x += amount.x;
        this.size.y += amount.y;
    }
    changeSize(newSize:Vector2){
        this.size.x = newSize.x;
        this.size.y = newSize.y;
    }
}