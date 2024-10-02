class Pokemon{
    constructor(Name, HPMAX, HP, move, type, Attackstat, Defense){
        this.Name = Name;
        this.HPMAX = HPMAX;
        this.HP = HP;
        this.move = move;
        this.type = type;
        this.Attackstat = Attackstat;
        this.Defense = Defense;
}
    Attack(PokemonIA){
        console.log("Que movimiento quieres usar")
        console.log("1."+this.move[0].name);
        console.log("2."+this.move[1].name);
        let opcion=readlineSync.question("")
        let randomFactor =  0.85 + Math.random() * (1.0 - 0.85);
        let Damage=(this.Attackstat/PokemonIA.Defense)*this.move[opcion-1].power*randomFactor;
        console.log("El pokemon ha hecho: "+ Math.floor(Damage));
        PokemonIA.HP=PokemonIA.HP-Math.floor(Damage);
        if(isNaN(PokemonIA.HP) || PokemonIA.HP<0){
            PokemonIA.HP=0;
        }
    }
    Heal(){
        this.HP=this.HP+(0.5*this.HPMAX);
        if(this.HP>this.HPMAX){
            this.HP=this.HPMAX;
        }
        
    }
}
const readlineSync = require('readline-sync');

module.exports= Pokemon;