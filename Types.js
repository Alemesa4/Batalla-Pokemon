const Types = {
  Fire: "Fire",
  Water: "Water",
  Grass: "Grass",
};

const efectividades={
  [Types.Fire]:{
    effective:["Grass"],
    lesseffective:["Fire","Water"]
  },
  [Types.Water]:{
    effective:["Fire"],
    lesseffective:["Grass","Water"]
  },
  [Types.Grass]:{
    effective:["Water"],
    lesseffective:["Grass","Fire"]
  }
};
module.exports = {Types, efectividades };
