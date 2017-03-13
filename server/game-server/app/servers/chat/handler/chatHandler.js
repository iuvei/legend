
var JsUtil = require('../../../util/JsUtil').JsUtil;

module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

/**
 * Send messages to users
 *
 * @param {Object} msg message from client
 * @param {Object} session
 * @param  {Function} next next stemp callback
 *
 */
Handler.prototype.send = function(msg, session, next) {
	var channelService = this.app.get('channelService');
	var param = {
		msg: msg.content,
		from: session.get("uid"),
		target: msg.target
	};
	channel = channelService.getChannel(JsUtil.dataChannel, false);

	//the target is all users
	if(msg.target == '*') {
		channel.pushMessage('onChat', param);
	}
	//the target is specific user
	else {
		var tuid = msg.target;
		var tsid = channel.getMember(tuid)['sid'];
		channelService.pushMessageByUids('onChat', param, [{
			uid: tuid,
			sid: tsid
		}]);
	}
	next(null, {});
};

