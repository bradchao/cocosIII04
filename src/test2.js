
var Test2Layer = cc.Layer.extend({
    ball:null,
    dx : 4,
    dy : 4,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.ball);

        this.scheduleUpdate();

        return true;
    },
    update: function (dt) {
        if (this.ball.x + this.ball.width/2 >= cc.winSize.width ||
            this.ball.x - this.ball.width/2 <= 0){
            this.dx *= -1;
        }
        if (this.ball.y + this.ball.height/2 >= cc.winSize.height ||
            this.ball.y - this.ball.height/2 <= 0){
            this.dy *= -1;
        }
        
        this.ball.x += this.dx;
        this.ball.y += this.dy;
    },
});

var Test2Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test2Layer();
        this.addChild(layer);
    }
});

