const situations = require("../helpers/situatios");

const attackCalculate = (req) => {
  const modifier = situations.calculateSituationModifier(
    req.body.mode,
    req.body.situations
  );
  const maneuver = situations.calculateManeuverModifier(req.body.maneuver);
  const aiming = situations.calculateAimingModifier(req.body.aiming);
  const aditional = situations.calculateAditionalModifier(req.body.count);

  const result = {
    calculate: modifier + aiming + aditional + maneuver + req.body.attackValue
  }

  return {code: 200, data: result}
};

const defenseCalculate = (req) => {
  const modifier = situations.calculateSituationModifier(
    req.body.mode,
    req.body.situations
  );
  const maneuver = situations.calculateManeuverModifier(req.body.maneuver);
  const aditional = situations.calculateAditionalModifier(req.body.count);
  const result = {
    calculate: modifier + aditional + maneuver + req.body.defenseValue
  }
  return {code: 200, data: result}
};

module.exports = {
  attackCalculate,
  defenseCalculate,
};
