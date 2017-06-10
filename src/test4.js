
var Test4Layer = cc.Layer.extend({
    sprite:null,
    isFlipX : true,
    isFlipY : true,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.s1b_png);
        this.sprite.attr({
            x: size.width/2,
            y: size.height/2
        });
        this.addChild(this.sprite);

        var act1 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.isFlipX = !this.isFlipX;
                this.sprite.runAction(cc.flipX(this.isFlipX));
            }, this);
        act1.x = 100;
        act1.y = 600;

        var act2 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.isFlipY = !this.isFlipY;
                this.sprite.runAction(cc.flipY(this.isFlipY));
            }, this);
        act2.x = 160;
        act2.y = 600;


        var menu = new cc.Menu(act1, act2);
        menu.x = 0; menu.y = 0;
        this.addChild(menu);

        return true;
    }
});

var Test4Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test4Layer();
        this.addChild(layer);
    }
});

