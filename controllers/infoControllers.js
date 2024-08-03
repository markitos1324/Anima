
const situations = require("../uploads/CombatSituations")

const getSituationsByMode = () => {
  const allSituations = situations.allSituations
  let result = {
    attackMode: [],
    defenseMode: []
  }

  allSituations.forEach(situation => {
    if (situation.Ataque != 0) {
      result.attackMode.push(situation)
    }

    if (situation.Parada != 0 || situation.Esquiva != 0) {
      result.defenseMode.push(situation)
    }
  })
  return {code: 200, data: result}
};

const getMoneuverByMode = () => {
  const result = {
    attackMode: situations.atackManeuver,
    defenseMode: situations.defenseManeuver
  } 
  return {code: 200, data: result}
};

module.exports = {
  getSituationsByMode,
  getMoneuverByMode,
};
