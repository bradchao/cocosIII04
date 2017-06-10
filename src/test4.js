
var Test4Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;


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

