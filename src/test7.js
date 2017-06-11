
var Test7Layer = cc.Layer.extend({
    sprite:null,
    space:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;


        this.initPhy();
        return true;
    },

    // 初始化物理引擎相關環境
    initPhy : function () {
        var size = cc.winSize;

        // 空間
        this.space = new cc.Space();
        this.space.gravity = cp.v(0, -100);
        var body = this.space.staticBody;

        // 牆壁
        var walls = [
            new cp.SegmentShape(body, cp.v(0,0), cp.v(size.width,0),0),
            new cp.SegmentShape(body, cp.v(0,size.height), cp.v(size.width,size.height),0),
            new cp.SegmentShape(body, cp.v(0,0), cp.v(0,size.height),0),
            new cp.SegmentShape(body, cp.v(size.width,0), cp.v(size.width,size.height),0)
        ];

        for (var i=0; i<walls.length; i++){
            var shape = walls[i];
            shape.setElasticity(1);
            shape.setFriction(1);
            this.space.addStaticShape(shape);
        }

    },

    addBox: function (p) {
        var boxBody = new cp.Body(1, cp.momentForBox(1, 64, 64));
        boxBody.setPos(p);
        this.space.addBody(boxBody);

        var shape = new cc.BoxShape(boxBody, 64, 64);
        shape.setElasticity(0.5);
        shape.setFriction(0.5);
        this.space.addStaticShape(shape);

        var sprite = new cc.PhysicsSprite(res.box_png);
        sprite.setBody(boxBody);
        sprite.setPosition(cc.p(p.x, p.y));
        this.addChild(sprite);

    }


});

var Test7Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test7Layer();
        this.addChild(layer);
    }
});

