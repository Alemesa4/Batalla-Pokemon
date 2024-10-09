const Types = {
  Fire: "Fire",
  Water: "Water",
  Grass: "Grass",
  Normal: "Normal",
  Ghost: "Ghost",
  Steel: "Steel",
  Rock: "Rock",
  Electric: "Electric",
  Psychic: "Psychic",
  Fighting: "Fighting",
  Fairy: "Fairy",
  Ice: "Ice",
  Poison: "Poison",
  Bug: "Bug",
  Flying: "Flying",
  Ground: "Ground",
  Dragon: "Dragon",
};

const efectividades = {
  [Types.Fire]: {
    effective: ["Grass", "Ice", "Bug", "Steel"],
    lesseffective: ["Fire", "Water", "Rock", "Dragon"],
    inmune: [],
  },
  [Types.Water]: {
    effective: ["Fire", "Ground", "Rock"],
    lesseffective: ["Water", "Grass", "Electric"],
    inmune: [],
  },
  [Types.Grass]: {
    effective: ["Water", "Ground", "Rock"],
    lesseffective: ["Grass", "Fire", "Bug", "Flying", "Poison"],
    inmune: [],
  },
  [Types.Normal]: {
    effective: [],
    lesseffective: ["Rock", "Steel"],
    inmune: ["Ghost"],
  },
  [Types.Ghost]: {
    effective: ["Psychic", "Ghost"],
    lesseffective: ["Dark"],
    inmune: ["Normal", "Fighting"],
  },
  [Types.Steel]: {
    effective: ["Ice", "Rock", "Fairy"],
    lesseffective: ["Steel", "Fire", "Water", "Electric"],
    inmune: [],
  },
  [Types.Rock]: {
    effective: ["Fire", "Ice", "Flying", "Bug"],
    lesseffective: ["Fighting", "Ground", "Steel", "Water", "Grass"],
    inmune: [],
  },
  [Types.Electric]: {
    effective: ["Water", "Flying"],
    lesseffective: ["Electric", "Ground"],
    inmune: ["Ground"],
  },
  [Types.Psychic]: {
    effective: ["Fighting", "Poison"],
    lesseffective: ["Psychic", "Steel"],
    inmune: ["Dark"],
  },
  [Types.Fighting]: {
    effective: ["Normal", "Rock", "Steel", "Ice", "Dark"],
    lesseffective: ["Flying", "Poison", "Bug", "Psychic", "Fairy"],
    inmune: ["Ghost"],
  },
  [Types.Fairy]: {
    effective: ["Fighting", "Dragon", "Dark"],
    lesseffective: ["Poison", "Steel"],
    inmune: [],
  },
  [Types.Ice]: {
    effective: ["Grass", "Ground", "Flying", "Dragon"],
    lesseffective: ["Steel", "Fire", "Fighting"],
    inmune: [],
  },
  [Types.Poison]: {
    effective: ["Grass", "Fairy"],
    lesseffective: ["Poison", "Ground", "Rock", "Ghost"],
    inmune: ["Steel"],
  },
  [Types.Bug]: {
    effective: ["Grass", "Psychic", "Dark"],
    lesseffective: ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
    inmune: [],
  },
  [Types.Flying]: {
    effective: ["Grass", "Fighting", "Bug"],
    lesseffective: ["Electric", "Rock", "Steel"],
    inmune: [],
  },
  [Types.Ground]: {
    effective: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    lesseffective: ["Grass", "Water", "Ice"],
    inmune: [],
  },
  [Types.Dragon]: {
    effective: ["Dragon"],
    lesseffective: ["Steel"],
    inmune: ["Fairy"],
  },
};

module.exports = { Types, efectividades };
