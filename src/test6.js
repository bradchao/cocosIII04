
var Test6Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var ps = new cc.ParticleExplosion();
        ps.texture =cc.textureCache.addImage(res.s1b_png);
        ps.x = size.width /2;
        ps.y = size.height /2;
        this.addChild(ps);


        return true;
    }
});

var Test6Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test6Layer();
        this.addChild(layer);
    }
});

