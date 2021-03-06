
var Test4Layer = cc.Layer.extend({
    sprite:null,
    isFlipX : true,
    isFlipY : true,
    ls : null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.ls = cc.sys.localStorage;
        
        this.sprite = new cc.Sprite(res.s1b_png);
        this.sprite.attr({
            x: size.width/2,
            y: size.height/2
        });
        this.addChild(this.sprite);

        var act1 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.ls.setItem("name", "Brad");   
                
                this.isFlipX = !this.isFlipX;
                this.sprite.runAction(cc.flipX(this.isFlipX));
            }, this);
        act1.x = 100;
        act1.y = 600;

        var act2 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                cc.log("name = " + this.ls.getItem("name"));
                
                this.isFlipY = !this.isFlipY;
                this.sprite.runAction(cc.flipY(this.isFlipY));
            }, this);
        act2.x = 160;
        act2.y = 600;
        var i = 1;
        var act3 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                i++;
                var ajax = cc.loader.getXMLHttpRequest();
                var data = "v1=tony&v2=" + i + "&v3=8000";
                ajax.open("GET", "http://10.2.1.135/brad/brad02.php?"+data);
                ajax.send();

                this.sprite.runAction(
                    cc.moveTo(2, cc.p(800,500)));
            }, this);
        act3.x = 220;
        act3.y = 600;

        var act4 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                var ajax = cc.loader.getXMLHttpRequest();
                ajax.open("GET", "http://10.2.1.135/brad/brad03.php");
                ajax.onreadystatechange = function () {
                    if (ajax.readyState==4 && ajax.status==200){
                        cc.log(ajax.responseText);
                    }
                };
                ajax.send();

                this.sprite.runAction(
                    cc.moveBy(1, cc.p(-40,-40)));
            }, this);
        act4.x = 280;
        act4.y = 600;

        var act5 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                var a1 = cc.moveBy(0.5, cc.p(size.width/2,0));
                var a2 = cc.moveBy(0.5, cc.p(0,size.height/2));
                var a3 = cc.moveBy(0.5, cc.p(-size.width/2,0));
                var a4 = cc.moveBy(0.5, cc.p(0,-size.height/2));
                var c1 = new cc.CallFunc(this.cb1, this);
                var d1 = cc.delayTime(2);
                var as = [];
                as.push(a1); as.push(d1), as.push(c1); as.push(a2);  as.push(c1);
                as.push(a3); as.push(c1);as.push(a4); as.push(c1);
                var seq = new cc.Sequence(as);
                //this.sprite.runAction(seq);

                this.sprite.runAction(cc.sequence(a1,a2,a3,a4));


            }, this);
        act5.x = 340;
        act5.y = 600;

        var act6 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.sprite.runAction(
                    cc.scaleBy(2, 0.5, 0.5)
                );
                this.sprite.runAction(
                    cc.fadeOut(2)
                );

            }, this);
        act6.x = 400;
        act6.y = 600;

        var act7 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.sprite.runAction(
                    cc.scaleBy(2, 2, 2)
                );
                this.sprite.runAction(
                    cc.fadeIn(2)
                );
                this.sprite.runAction(
                    cc.rotateBy(2, 360)
                );
                this.sprite.runAction(
                    cc.blink(2, 10)
                );

            }, this);
        act7.x = 460;
        act7.y = 600;

        var act8 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                this.sprite.runAction(
                    cc.jumpTo(1, cc.p(200,200), 250, 2)
                );
            }, this);
        act8.x = 520;
        act8.y = 600;

        var act9 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                var move = cc.moveBy(2, cc.p(800, 100));
                var easeIn = new cc.EaseIn(move, 40);
                this.sprite.runAction(easeIn);
            }, this);
        act9.x = 580;
        act9.y = 600;

        var act10 = new cc.MenuItemImage(
            res.btn_png, null, null,
            function(){
                var move = cc.moveBy(2, cc.p(800, 100));
                this.sprite.runAction(move);
                //var speed = new cc.Speed(move, 4);
                //this.sprite.runAction(speed);
            }, this);
        act10.x = 640;
        act10.y = 600;

        var menu = new cc.Menu(
            act1, act2, act3, act4, act5, act6, act7, act8, act9, act10);
        menu.x = 0; menu.y = 0;
        this.addChild(menu);

        // NodeGrid
        var nodeGrid = new cc.NodeGrid();
        this.addChild(nodeGrid);

        var sprite2 = new cc.Sprite(res.s1b_png);
        sprite2.attr({
            x: size.width/4,
            y: size.height/4
        });
        nodeGrid.addChild(sprite2);

        var spsize = sprite2.getContentSize();   // return sprite size
        var shak = new cc.Shaky3D(10, spsize, 5, false);
        nodeGrid.runAction(shak);




        return true;
    },

    cb1 : function () {
        cc.log("here");
    }
});

var Test4Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test4Layer();
        this.addChild(layer);
    }
});

