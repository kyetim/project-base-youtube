const logger = require("./logger");
let instance = null;
class LoggerClass {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    _createLogObject(email, location, proc_type, log) {
        return {
            email, location, proc_type, log
        }
    }

    info(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.info(logs);
    }
    warn(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.warninfo(logs);
    }
    error(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.errorinfo(logs);
    }
    verbose(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.verboseinfo(logs);
    }
    silly(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.sillyinfo(logs);
    }
    http(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.httpinfo(logs);
    }
    debug(email, location, proc_type, log) {
        let logs = this._createLogObject(email, location, proc_type, log);
        logger.debuginfo(logs);
    }

};

module.exports = new LoggerClass();