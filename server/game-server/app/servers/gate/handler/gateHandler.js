var JsUtil = require('../../../util/JsUtil').JsUtil;

module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
	this._baseUid = 1;
};

/**
 * Gate handler that dispatch user to connectors.
 *
 * @param {Object} msg message from client
 * @param {Object} session
 * @param {Function} next next stemp callback
 *
 */
Handler.prototype.queryEntry = function(msg, session, next) {
	// get all connectors
	var connectors = this.app.getServersByType('connector');
	if(!connectors || connectors.length === 0) {
		next(null, {
			code: 500
		});
		return;
	}
	
	// select connector
	var res = JsUtil.dispatch(session.get("uid"), connectors);
	next(null, {
		code: 200,
		host: res.host,
		port: res.clientPort,
		uid: 'u'+this._baseUid
	});
	this._baseUid++;
};
