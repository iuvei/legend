cc.Class({
    extends: cc.Component,

    properties: {
        spine: {
            default: null,
            type: sp.Skeleton
        },
    },

    // use this for initialization
    onLoad: function () {
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    start: function () {
        this.setMixEx('walk','run',0.2);
        this.setMixEx('run','walk',0.2);
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    walk () {
        this.spine.addAnimation(0, 'walk', true, 0);
    },
    
    run () {
        this.spine.addAnimation(0, 'run', true, 0);
    },
    setMixEx (anim1,anim2,mixTime) {
        this.spine.setMix(anim1, anim2, mixTime);
        this.spine.setMix(anim2, anim1, mixTime);
    }
});
