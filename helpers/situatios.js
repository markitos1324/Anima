const Situations = require("../uploads/CombatSituations");
const Aiming = require("../uploads/Aiming");
const Constants = require("../helpers/Constants");

const calculateSituationModifier = (mode, situations) => {
  let modifier = 0;
  situations.forEach((actualSituation) => {
    const found = Situations.allSituations.find(
      (element) => element.Situación == actualSituation
    );

    mode == Constants.MODES[0]
      ? (modifier += found.Ataque)
      : mode == Constants.MODES[1]
      ? (modifier += found.Esquiva)
      : (modifier += found.Parada);
  });
  return modifier;
};

const calculateManeuverModifier = (situations) => {
  let modifier = 0;
  situations.forEach((actualSituation) => {
    const found = Situations.allManeuver.find(
      (element) => element.maniobra == actualSituation
    );

    modifier += found.penalizador;
  });
  return modifier;
};

const calculateAimingModifier = (area) => {
  const found = Aiming.aiming.find((element) => element.area == area);

  return found.penalizador;
};

const calculateAditionalModifier = (count) => {
  let modifier = 0;
  if (count !== 0 && count < 3) {
    modifier += -30;
  } else if (count >= 3) {
    modifier += -30 - (count - 2) * 20;
  }
  return modifier;
};

module.exports = {
  calculateSituationModifier,
  calculateAimingModifier,
  calculateAditionalModifier,
  calculateManeuverModifier,
};
