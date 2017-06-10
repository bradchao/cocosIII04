
var Test2Layer = cc.Layer.extend({
    ball:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.ball.scaleX = 2;
        this.ball.scaleY = 2;
        this.addChild(this.ball);

        return true;
    }
});

var Test2Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test2Layer();
        this.addChild(layer);
    }
});

