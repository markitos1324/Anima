const express = require('express');
const router = express.Router();

const situations = require("../uploads/CombatSituations.json")
const targets = require("../uploads/Targeted attacks.json")

router
.get('/situations', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: situations })
})

router
.get('/target', (req, res) => {

    //const resp = fightController.setAttack(req)

    //if (resp => 400) console.error("FAIL: RESP")

    res.status(200 ).send({result: targets })
})


module.exports = router
