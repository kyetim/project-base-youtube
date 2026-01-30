var express = require('express');
var router = express.Router();

const isAuth = true;

router.all("*", (req, res, next) => {
    if (isAuth) {
        next();
    } else {
        res.json({ success: false, error: "Not Auth" })
    }
})

router.get('/', function (req, res, next) {
    res.json('success true');
});

module.exports = router;
