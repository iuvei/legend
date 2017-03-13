var userInfo = require("UserInfo");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        cc.log(userInfo.sessionId);
    },

    // called every frame
    update: function (dt) {

    },
});
