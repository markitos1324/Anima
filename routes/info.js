const express = require('express');
const router = express.Router();

const aiming = require("../uploads/Aiming")
const infoController = require("../controllers/infoControllers")

router
.get('/situations', (req, res) => {

    const resp = infoController.getSituationsByMode()

    if (resp.code >= 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: resp.data })
})
router
.get('/maneuver', (req, res) => {

    const resp = infoController.getMoneuverByMode()

    if (resp.code >= 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: resp.data })
})
router
.get('/aiming', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: aiming.aiming })
})


module.exports = router
