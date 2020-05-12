class Vector2{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    distTo(point:Vector2):number{
        return Math.sqrt(point.x * point.x + point.y * point.y);
    }
    distToNoSquareRoot(point:Vector2):number{ //fast boi
        return point.x * point.x + point.y * point.y;
    }
}