const Types = {
  Fire: "Fire",
  Water: "Water",
  Grass: "Grass",
  Normal: "Normal",
  Ghost: "Ghost",
  Steel: "Steel",
  Rock: "Rock"
};

const efectividades={
  [Types.Fire]:{
    effective:["Grass"],
    lesseffective:["Fire","Water"],
    inmune:[""]
  },
  [Types.Water]:{
    effective:["Fire"],
    lesseffective:["Grass","Water"],
    inmune:[""]

  },
  [Types.Grass]:{
    effective:["Water"],
    lesseffective:["Grass","Fire"],
    inmune:[""]

  },
  [Types.Normal]:{
    effective:[],
    lesseffective:["Steel","Rock"],
    inmune:["Ghost"]
  }

};
module.exports = {Types, efectividades };
