const Enum = require("../config/Enum");
const AuditLogsModel = require("../db/models/AuditLogs");
let instance = null
class AuditLogs {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance;
    }

    info(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };

    warn(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };

    error(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };
    debug(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };

    verbose(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };

    http(email, location, proc_type, log) {
        this.#saveToDB({
            level: Enum.LOG_LEVELS,
            email, location, proc_type, log
        })
    };

    #saveToDB({ level, email, location, proc_type, log }) {
        AuditLogsModel.create({
            level,
            email,
            location,
            proc_type,
            log
        });
    };
}

module.exports = new AuditLogs();