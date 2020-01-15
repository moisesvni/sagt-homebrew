const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "SAGT API",
        version: "1.0.1"
    });
});


const receitaRouter = require('./receita');
router.use('/receita', receitaRouter);

module.exports = router;