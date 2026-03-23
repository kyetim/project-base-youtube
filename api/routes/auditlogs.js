const express = require("express");
const moment = require("moment");
const Response = require('../lib/Response');
const AuditLogs = require('../db/models/AuditLogs');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let body = req.body;
        let query = {}; // query değişkeni tanımlandı
        let skip = body.skip;
        let limit = body.limit;

        if (typeof body.skip !== "number") {
            skip = 0;
        };

        if (typeof body.limit !== "number" || body.limit > 500) {
            limit = 500;
        }

        if (body.begin_date && body.end_date) {
            query.createdAt = {
                $gte: moment(body.begin_date),
                $lte: moment(body.end_date)
            };
        } else {
            query.createdAt = {
                $gte: moment().subtract(1, "day").startOf("day"), // "day" string olarak düzeltildi
                $lte: moment()
            };
        }

        let auditLogs = await AuditLogs.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit);
        res.json(Response.successResponse(auditLogs));
    } catch (err) {
        let errorResponse = Response.errorResponse(err);
        res.status(errorResponse.code).json(errorResponse);
    }
});

module.exports = router;