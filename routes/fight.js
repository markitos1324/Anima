const express = require('express');
const router = express.Router();


router
.get('/combat', (req, res) => {

   // const resp = fightController.setAttack(req)

    if (resp => 400) console.error("FAIL: RESP")

    res.status(resp.code || 200 ).send({result: resp.data })


})



module.exports = router
