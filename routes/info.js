const express = require('express');
const router = express.Router();

const situations = require("../uploads/CombatSituations")
const aiming = require("../uploads/Aiming")

router
.get('/situations', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: situations.allSituations })
})
router
.get('/maneuver', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: situations.allManeuver })
})
router
.get('/aiming', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: aiming.aiming })
})


module.exports = router
