
var Test3Layer = cc.Layer.extend({
    bg:null,
    isRight: true,
    man : null,
    manFrams: null,
    manAction : 0,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.bg = new cc.Sprite(res.bg1_png);
        this.bg.attr({
            x : this.bg.width / 2,
            y : size.height / 2
        });
        this.bg.scaleY = 2
        this.addChild(this.bg);

        var cache = cc.spriteFrameCache;
        cache.addSpriteFrames(res.man_plist, res.man_png);
        var img37 = cache.getSpriteFrame("image37.png");
        var img38 = cache.getSpriteFrame("image38.png");
        var img39 = cache.getSpriteFrame("image39.png");
        var img40 = cache.getSpriteFrame("image40.png");
        this.manFrams = [img37, img38, img39, img38, img40, img38];

        this.man = new cc.Sprite(this.manFrams[this.manAction]);
        cc.log("man = " + this.man.height);
        this.man.attr({
            x: size.width /2,
            y: size.height / 2 + this.man.height / 2
        });
        this.addChild(this.man);
        this.man.runAction(cc.flipX(this.isRight));

        this.myKeyListener(this);

        return true;
    },

    myKeyListener : function (layer) {
      cc.eventManager.addListener({
          event: cc.EventListener.KEYBOARD,
          onKeyPressed: function (keyCode, event) {
              switch (keyCode){
                  case 39:
                      // 往右
                      if (!layer.isRight){
                          // man change dir
                          layer.changeDirect();
                      }
                      layer.goForwardBg();
                      break;
                  case 37:
                      if (layer.isRight){
                          // man change dir
                          layer.changeDirect();
                      }
                      layer.goBackBg();
                      break;
              }
          },
      }, this);
    },

    changeDirect: function () {
        this.isRight = !this.isRight;
        this.man.runAction(cc.flipX(this.isRight));
    },

    goForwardBg: function () {
        if (this.bg.x + this.bg.width/2 > cc.winSize.width){
            this.bg.x -= 8
        }
        this.manAction = this.manAction == 5?0:this.manAction+1;
        this.man.setSpriteFrame(this.manFrams[this.manAction]);
    },

    goBackBg: function () {
        if (this.bg.x - this.bg.width/2 < 0){
            this.bg.x += 8
        }
        this.manAction = this.manAction == 5?0:this.manAction+1;
        this.man.setSpriteFrame(this.manFrams[this.manAction]);
    }



});

var Test3Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test3Layer();
        this.addChild(layer);
        this.focused = true;
    }
});

