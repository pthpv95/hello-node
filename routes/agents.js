var express = require("express");
var router = express.Router();
var DBUtil = require('../common/db-util');

router.get('/', (req, res) => {
    DBUtil.query('select * from agents', (error, dbData) => {
        if (error) console.log(error);
        res.send(dbData.recordsets[0]);
    });
});

router.put('/:id', (req, res) => {
    const body = req.body;
    DBUtil.excecute(`UPDATE AGENTS SET FULLNAME = ${body.fullName} WHERE ID = ${req.params.id}`, (error, res) => {
        if (error) res.send('error');
        res.send(res);
    });
    res.send('done');
})

module.exports = router;
