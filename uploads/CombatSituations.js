const allSituations = [
  {
    Situación: "Flanco",
    Ataque: -10,
    Parada: -30,
    Esquiva: -30,
    Turno: 0,
    "Acción Física": 0,
  },
  {
    Situación: "Espalda",
    Ataque: -30,
    Parada: -80,
    Esquiva: -80,
    Turno: 0,
    "Acción Física": 0,
  },
  {
    Situación: "Sorpresa",
    Ataque: 0,
    Parada: -90,
    Esquiva: -90,
    Turno: 0,
    "Acción Física": -90,
  },
  {
    Situación: "Ceguera parcial",
    Ataque: -30,
    Parada: -30,
    Esquiva: -15,
    Turno: 0,
    "Acción Física": -30,
  },
  {
    Situación: "Ceguera absoluta",
    Ataque: -100,
    Parada: -80,
    Esquiva: -80,
    Turno: 0,
    "Acción Física": -90,
  },
  {
    Situación: "Posición superior",
    Ataque: +20,
    Parada: 0,
    Esquiva: 0,
    Turno: 0,
    "Acción Física": 0,
  },
  {
    Situación: "Derribado",
    Ataque: -30,
    Parada: -30,
    Esquiva: -30,
    Turno: -10,
    "Acción Física": -30,
  },
  {
    Situación: "Parálisis menor",
    Ataque: -20,
    Parada: -20,
    Esquiva: -40,
    Turno: -20,
    "Acción Física": -40,
  },
  {
    Situación: "Parálisis parcial",
    Ataque: -80,
    Parada: -80,
    Esquiva: -80,
    Turno: -30,
    "Acción Física": -60,
  },
  {
    Situación: "Parálisis completa",
    Ataque: -200,
    Parada: -200,
    Esquiva: -200,
    Turno: -100,
    "Acción Física": -200,
  },
  {
    Situación: "Amenazado",
    Ataque: -20,
    Parada: -120,
    Esquiva: -120,
    Turno: -50,
    "Acción Física": -100,
  },
  {
    Situación: "Levitando",
    Ataque: -20,
    Parada: -20,
    Esquiva: -40,
    Turno: 0,
    "Acción Física": -60,
  },
  {
    Situación: "Vuelo tipo 7 a 14",
    Ataque: +10,
    Parada: +10,
    Esquiva: +10,
    Turno: +10,
    "Acción Física": 0,
  },
  {
    Situación: "Vuelo 15 o superior",
    Ataque: +15,
    Parada: +10,
    Esquiva: +20,
    Turno: +10,
    "Acción Física": 0,
  },
  {
    Situación: "Cargando",
    Ataque: +10,
    Parada: -10,
    Esquiva: -20,
    Turno: 0,
    "Acción Física": 0,
  },
  {
    Situación: "Desenfundar",
    Ataque: -25,
    Parada: -25,
    Esquiva: 0,
    Turno: 0,
    "Acción Física": -25,
  },
  {
    Situación: "Espacio reducido",
    Ataque: "-40 Esp.",
    Parada: "-40 Esp.",
    Esquiva: -40,
    Turno: 0,
    "Acción Física": -20,
  },
  {
    Situación: "Adversario pequeño",
    Ataque: -10,
    Parada: 0,
    Esquiva: 0,
    Turno: 0,
    "Acción Física": 0,
  },
  {
    Situación: "Adversario diminuto",
    Ataque: -20,
    Parada: -10,
    Esquiva: 0,
    Turno: 0,
    "Acción Física": 0,
  },
];

const allManeuver = [
  {
      "maniobra": "Ataque adicional",
      "penalizador": -25
  },
  {
      "maniobra": "Ataque en área",
      "penalizador": -50
  },
  {
      "maniobra": "Engatillar",
      "penalizador": -100
  },
  {
      "maniobra": "Presa",
      "penalizador": -40
  },
  {
      "maniobra": "Desarmar",
      "penalizador": -30
  },
  {
      "maniobra": "Ataque con crítico secundario",
      "penalizador": -10
  },
  {
      "maniobra": "Defensa total",
      "penalizador": 20
  },
  {
      "maniobra": "Apartar",
      "penalizador": -30
  }
]


module.exports = {
  allSituations,
  allManeuver
}