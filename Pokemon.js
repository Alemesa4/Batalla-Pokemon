const { efectividades, Types } = require("./Types");

class Pokemon {
  constructor(Name, HPMAX, HP, move, type, Attackstat, Defense) {
    this.Name = Name;
    this.HPMAX = HPMAX;
    this.HP = HP;
    this.move = move;
    this.type = type;
    this.Attackstat = Attackstat;
    this.Defense = Defense;
  }
  Attack(PokemonIA, Jugador) {
    let multiplicador = 0;
    if (Jugador) {
      console.log("Que movimiento quieres usar");
      console.log("1." + this.move[0].name + " Power: " + this.move[0].power + " Type: ("+ this.move[0].typeM + ") Accuracy: "+ this.move[0].accuracy+"%");
      console.log("2." + this.move[1].name + " Power: " + this.move[1].power + " Type: ("+ this.move[1].typeM + ") Accuracy: "+ this.move[1].accuracy+"%");
      let opcion = readlineSync.question("");
      opcion = parseInt(opcion);
      let movimientoelegido = this.move[opcion - 1];
      let fallo=Math.floor(Math.random()*100)+1;
      let falla=false;
      if(fallo>movimientoelegido.accuracy){
        falla=true;
      }
if (!falla){
      if (efectividades[movimientoelegido.typeM].effective.includes(PokemonIA.type)) {
        multiplicador = 2;
      } else if (efectividades[movimientoelegido.typeM].lesseffective.includes(PokemonIA.type)) {
        multiplicador = 0.5;
      } else if (efectividades[movimientoelegido.typeM].inmune.includes(PokemonIA.type)) {
        multiplicador = 0;
      }
      else {
        multiplicador = 1;
      }
      let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
      let Damage = Math.floor((this.Attackstat / PokemonIA.Defense) * this.move[opcion - 1].power * randomFactor * multiplicador);
      console.log("¡" + this.Name + " usó " + this.move[opcion - 1].name + "!");
      console.log("¡Hizo " + Damage + " de daños!");
      if (efectividades[movimientoelegido.typeM].effective.includes(PokemonIA.type)) {
        console.log("Es super eficaz");
      } else if (efectividades[movimientoelegido.typeM].lesseffective.includes(PokemonIA.type)) {
        console.log("Es muy poco eficaz");
      } else if (efectividades[movimientoelegido.typeM].inmune.includes(PokemonIA.type)) {
        console.log("No tiene ningun efecto");
      }
      PokemonIA.HP = PokemonIA.HP - Math.floor(Damage);
      if (isNaN(PokemonIA.HP) || PokemonIA.HP < 0) {
        PokemonIA.HP = 0;
      }}else{
        console.log("Tu movimiento ha fallado")
      }
    } else if (!Jugador) {
      let opcion = Math.floor(Math.random() * 2) + 1;
      let opcionm=  Math.floor(Math.random() * 2) + 1;
      let movimientoelegido = this.move[opcionm - 1];

      if (efectividades[movimientoelegido.typeM].effective.includes(PokemonIA.type)) {
        multiplicador = 2;
      } else if (efectividades[movimientoelegido.typeM].lesseffective.includes(PokemonIA.type)) {
        multiplicador = 0.5;
      } else if (efectividades[movimientoelegido.typeM].inmune.includes(PokemonIA.type)) {
        multiplicador = 0;
      }
      else {
        multiplicador = 1;
      }

      let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
      let Damage = Math.floor((this.Attackstat / PokemonIA.Defense) * this.move[opcion - 1].power * randomFactor * multiplicador);
      console.log("¡" + this.Name + " enemigo usó " + this.move[opcion - 1].name + "!");
      console.log("¡Hizo " + Damage + " de daños!");
      if (efectividades[movimientoelegido.typeM].effective.includes(PokemonIA.type)) {
        console.log("Es super eficaz");
      } else if (efectividades[movimientoelegido.typeM].lesseffective.includes(PokemonIA.type)) {
        console.log("Es muy poco eficaz");
      } else if (efectividades[movimientoelegido.typeM].inmune.includes(PokemonIA.type)) {
        console.log("No tiene ningun efecto");
      }
      PokemonIA.HP = PokemonIA.HP - Math.floor(Damage);
      if (isNaN(PokemonIA.HP) || PokemonIA.HP < 0) {
        PokemonIA.HP = 0;
      }
    }
  }
  Heal() {
    let cura = 0.5 * this.HPMAX;
    this.HP = this.HP + 0.5 * this.HPMAX;
    if (this.HP > this.HPMAX) {
      this.HP = this.HPMAX;
    }
    console.log(
      this.Name + " se ha curado: " + cura + " de vida"
    );
  }
}
const readlineSync = require("readline-sync");

module.exports = Pokemon;
