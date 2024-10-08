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
    if (Jugador) {
      console.log("Que movimiento quieres usar");
      console.log("1." + this.move[0].name + " Power: " + this.move[0].power);
      console.log("2." + this.move[1].name + " Power: " + this.move[1].power);
      let opcion = readlineSync.question("");
      let movimientoelegido=this.move[opcion-1];

      console.log(movimientoelegido);
      if (efectividades[movimientoelegido.type].effective.includes(PokemonIA.type)) {
        console.log("Es super eficaz");
      }
      let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
      let Damage =Math.floor((this.Attackstat / PokemonIA.Defense) * this.move[opcion - 1].power * randomFactor);
      console.log("¡" + this.Name + " usó " + this.move[opcion - 1].name + "!");
      console.log("¡Hizo " + Damage + " de daños!");

      PokemonIA.HP = PokemonIA.HP - Math.floor(Damage);
      if (isNaN(PokemonIA.HP) || PokemonIA.HP < 0) {
        PokemonIA.HP = 0;
      }
    } else if (!Jugador) {
      let opcion = Math.floor(Math.random() * 2) + 1;
      let randomFactor = 0.85 + Math.random() * (1.0 - 0.85);
      let Damage =Math.floor( (this.Attackstat / PokemonIA.Defense) * this.move[opcion - 1].power * randomFactor);
      console.log("¡" + this.Name + " enemigo usó " + this.move[opcion - 1].name + "!");
      console.log("¡Hizo " + Damage + " de daños!");
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
