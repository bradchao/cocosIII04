
var Test3Layer = cc.Layer.extend({
    bg:null,
    isRight: true,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.bg = new cc.Sprite(res.bg1_png);
        this.bg.attr({
            x : this.bg.width / 2,
            y : size.height / 2
        });
        this.bg.scaleY = 2;
        this.addChild(this.bg);

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
                      }
                      layer.goForwardBg();
                      break;
                  case 37:
                      if (layer.isRight){
                          // man change dir
                      }
                      layer.goBackBg();
                      break;
              }
          },
      }, this);
    },

    goForwardBg: function () {
        if (this.bg.x + this.bg.width/2 > cc.winSize.width){
            this.bg.x -= 8
        }
    },

    goBackBg: function () {
        if (this.bg.x - this.bg.width/2 < 0){
            this.bg.x += 8
        }
    }



});

var Test3Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test3Layer();
        this.addChild(layer);
    }
});

