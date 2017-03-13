var UserInfo = require("UserInfo");
var BSocket = require("BSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        m_labelSessionId: {
            default: null,
            type: cc.Label
        },
        m_editBoxName: {
            default: null,
            type: cc.EditBox
        },
        m_buttonStart: {
            default: null,
            type: cc.Button
        }
    },

    // use this for initialization
    onLoad: function () {
		this.m_labelSessionId.string=BSocket._sessionId;
        BSocket.setRecv(function(data) {
            cc.log(JSON.stringify(data));
        });
    },
    
    buttonSend: function () {
        BSocket.send("enterGame","www");
    },
    
    buttonStart: function () {
        UserInfo._name = this.m_editBoxName.string;
        cc.director.loadScene("GameLayer");
    },
    buttonShu: function(){
        UserInfo._camp = "shu";
    },
    buttonCao: function(){
        UserInfo._camp = "cao";
    },
    buttonFighter: function(){
        UserInfo._hero = "fighter";
    },
    buttonArchmage: function(){
        UserInfo._hero = "archmage";
    },
    buttonBoy: function(){
        UserInfo._sex = "boy";
    },
    buttonGirl: function(){
        UserInfo._sex = "girl";
    },
    textChanged: function(text) {
        this.m_buttonStart.interactable = (text.length>=4);
    },
});
