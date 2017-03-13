var BSocket = require("BSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        _bGo: false,
    },

    // use this for initialization
    onLoad: function () {
        BSocket.setup();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(BSocket._sessionId != null && this._bGo==false){
            this._bGo = true;
            cc.director.loadScene('FirstLayer');
        }
    },
});
