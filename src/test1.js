
var Test1Layer = cc.Layer.extend({
    sprite:null,
    //bullet: null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var bullet = new cc.Sprite(res.bullet_png);
        bullet.attr({
            x: size.width,
            y: size.height/2
        });
        this.addChild(bullet, 0, "bullet");

        var brick = new cc.Sprite(res.brick_png);
        brick.attr({
            x : size.width /2,
            y : size.height /2
        });
        this.addChild(brick, 0, "brick");


        // var bullet = new Bullet(this);
        // bullet.setTexture(res.b2_png);
        // bullet.attr({
        //     x: size.width,
        //     y: size.height/2
        // });
        // this.addChild(bullet);

        this.scheduleUpdate()

        return true;
    },
    update: function (dt) {
        var bullet = this.getChildByName("bullet");
        var brick = this.getChildByName("brick");

        if (bullet != null && brick != null){
            var brickRect = new cc.Rect(
                brick.x, brick.y,
                brick.width, brick.height
            );
            var bulletPoint = new cc.Point(
                bullet.x, bullet.y
            );
            if (cc.rectContainsPoint(brickRect, bulletPoint)){
                this.removeChild(brick, true);
                this.removeChild(bullet, true);
            }
            bullet.x -= 20;
        }
    },
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

