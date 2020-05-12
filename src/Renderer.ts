class Renderer{
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    currentObjects:Array<RenderObj>;
    constructor(ctx:CanvasRenderingContext2D,canvas:HTMLCanvasElement, currentObjects:Array<RenderObj>){
        this.ctx = ctx;
        this.canvas = canvas;
        this.currentObjects = currentObjects;
    }
    refresh(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.currentObjects.forEach(object => {
            
        });
    }
    drawObject(object:RenderObj){
        if(object.type === TYPES.rect){

        }
        else if(object.type === TYPES.ellipse){

        }
    }
}