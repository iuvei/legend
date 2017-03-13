var JsUtil = require('../../../util/JsUtil').JsUtil;

module.exports = function(app) {
	return new ChatRemote(app);
};

var ChatRemote = function(app) {
	this.app = app;
	this.channelService = app.get('channelService');
};

/**
 * Add user into chat channel.
 *
 * @param {String} uid unique id for user
 * @param {String} sid server id
 * @param {String} name channel name
 * @param {boolean} flag channel parameter
 *
 */
ChatRemote.prototype.add = function(uid, sid, cb) {
	var channel = this.channelService.getChannel(JsUtil.dataChannel, true);
	var param = {
		route: 'onAdd',
		user: uid
	};
	channel.pushMessage(param);

	if( !! channel) {
		channel.add(uid, sid);
	}

	cb(this.get());
};

/**
 * Get user from chat channel.
 *
 * @param {Object} opts parameters for request
 * @param {String} name channel name
 * @param {boolean} flag channel parameter
 * @return {Array} users uids in channel
 *
 */

ChatRemote.prototype.get = function() {
	return this.channelService.getChannel(JsUtil.dataChannel, true).getMembers();
};

/**
 * Kick user out chat channel.
 *
 * @param {String} uid unique id for user
 * @param {String} sid server id
 * @param {String} name channel name
 *
 */
ChatRemote.prototype.kick = function(uid, sid, cb) {
	var channel = this.channelService.getChannel(JsUtil.dataChannel, false);
	// leave channel
	if( !! channel) {
		channel.leave(uid, sid);
	}

	var param = {
		route: 'onLeave',
		user: uid
	};
	channel.pushMessage(param);
	cb();
};
