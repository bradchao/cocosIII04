
var Test1Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //var bullet = new cc.Sprite(res.bullet_png);
        var bullet = new Bullet(this);
        bullet.setTexture(res.b2_png);
        bullet.attr({
            x: size.width,
            y: size.height/2
        });
        this.addChild(bullet);

        return true;
    }
});

var Bullet = cc.Sprite.extend({
    layer:null,
    counter: 0,
    ctor: function (layer) {
        this._super();
        this.layer = layer;
        this.scheduleUpdate();
    },
    update: function(dt) {
        this.counter++;

        if (this.counter % 100 == 0) {
            cc.log("ok");
        }



        if (this.x <= 100){
            //this.layer.removeChild(this);
            //this.unscheduleUpdate();
        }
        this.x -= 40
    },
});

var Test1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
            var layer = new Test1Layer();
        this.addChild(layer);
    }
});

