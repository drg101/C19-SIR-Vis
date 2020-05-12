var client = {
    height: window.innerHeight,
    width: window.innerWidth
};
var TYPES = {
    rect: 1,
    ellipse: 2
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var RenderObj = /** @class */ (function () {
    function RenderObj(pos, size, type) {
        this.pos = pos;
        this.size = size;
        this.type = type;
    }
    RenderObj.prototype.moveRelative = function (dist) {
    };
    return RenderObj;
}());
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    return Vector2;
}());
