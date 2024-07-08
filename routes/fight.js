const express = require('express');
const router = express.Router();
const fightControllers = require("../controllers/fightControllers")

router
.post('/attack', async (req, res) => {

   const resp = await fightControllers.attackCalculate(req)

    if (resp.code >= 400) {console.error("FAIL: Attack RESP")}

    res.status(resp.code || 200 ).send({result: resp.data })
 
})

router
.post('/defense', async (req, res) => {

   const resp = await fightControllers.defenseCalculate(req)

   if (resp.code >= 400) {console.error("FAIL: DEFENSE RESP")}

    res.status(resp.code || 200 ).send({result: resp.data })
 
})

module.exports = router
