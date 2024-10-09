const readlineSync = require('readline-sync');

const { efectividades, Types } = require("./Types");

const Pokemon = require("./Pokemon");
const Move = require("./Move");

const Flamethrower = new Move("Flamethrower", 80,Types.Fire,100);
const HydroPump = new Move("Hydro Pump", 120,Types.Water,80);
const SharpBlade = new Move("Sharp Blade", 80,Types.Grass,100);
const Tackle = new Move("Tackle", 40,Types.Normal,100);
const Thunderbolt = new Move("Thunderbolt", 90, Types.Electric, 100);
const Psychic = new Move("Psychic", 80,Types.Psychic, 90);
const RockSlide = new Move("Rock Slide",Types.Rock, 75, 90);
const IceBeam = new Move("Ice Beam", 90,Types.Ice, 100);
const DrainPunch = new Move("Drain Punch", 75,Types.Fighting, 100);
const DazzlingGleam = new Move("Dazzling Gleam",Types.DazzlingGleam, 80, 100);
const LeafStorm = new Move("Leaf Storm", 130,Types.Grass, 80);
const ShadowBall = new Move("Shadow Ball", 80,Types.Ghost, 100);
const DragonDarts = new Move("Dragon Darts", 100, Types.Dragon, 100);
const AuraSphere= new Move("Aura Sphere",100, Types.Fighting, 100)

const Charizard = new Pokemon("Charizard", 360, 360, [Flamethrower, Tackle], Types.Fire, 150, 80);
const Venusaur = new Pokemon("Venusaur", 370, 370, [SharpBlade, Tackle], Types.Grass, 100, 120);
const Blastoise = new Pokemon("Blastoise", 370, 370, [HydroPump, Tackle], Types.Water, 120, 100);
const Pikachu = new Pokemon("Pikachu", 320, 320, [Thunderbolt, Tackle], Types.Electric, 90, 80);
const Alakazam = new Pokemon("Alakazam", 360, 360, [Psychic, Tackle], Types.Psychic, 110, 90);
const Gengar = new Pokemon("Gengar", 340, 340, [ShadowBall, Tackle], Types.Ghost, 130, 70);
const Dragapult = new Pokemon("Dragapult", 400, 400, [ShadowBall, DragonDarts], Types.Dragon, 130, 120);
const Lapras = new Pokemon("Lapras", 370, 370, [IceBeam, HydroPump], Types.Water, 130, 100);
const Machamp = new Pokemon("Machamp", 350, 350, [DrainPunch, RockSlide], Types.Fighting, 130, 100);
const Sylveon = new Pokemon("Sylveon", 340, 340, [DazzlingGleam, LeafStorm], Types.Fairy, 100, 130);
const Lucario = new Pokemon("Lucario", 350, 350, [DrainPunch, AuraSphere], Types.Fighting, 140, 100);

let terminado = false;
let cura = true;
let numero;
let numeroIA;
let curaIA = true;
let jugador;
let tupokemon;
let IAPokemon;


console.log("Bienvenido a la batalla pokemon te enfrentaras a la maquina");
console.log("¿Que tipo de comabte quieres hacer?");
console.log("1. 1vs1");
console.log("2. 3vs3");
let ocombate=readlineSync.question("");
if(ocombate==1){
    Batalla1vs1();
}else if (ocombate==2){
    Batalla3vs3();
}

let OpPokemon = [Charizard, Venusaur, Blastoise,Pikachu,Alakazam,Machamp,Sylveon,Lapras,Dragapult,Gengar,Lucario];

function Batalla1vs1(){
do {
tupokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
IAPokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
} while (IAPokemon==tupokemon);
console.log("Tu pokemon sera: ")
console.log(tupokemon);
console.log("El pokemon rival sera: ")
console.log(IAPokemon);

do {

    do {
        console.log("-TU--------------------");
        console.log(tupokemon.Name + " " + "HP: " + tupokemon.HP + "/" + tupokemon.HPMAX)
        console.log("-----------------------");

        console.log("-RED-------------------");
        console.log(IAPokemon.Name + " " + "HP: " + IAPokemon.HP + "/" + IAPokemon.HPMAX);
        console.log("-----------------------");


        console.log("Que quieres hacer");
        console.log("1.Atacar");
        console.log("2.Curar");

        numero = readlineSync.question('');
        if (numero == 1) {
            jugador = true;
            tupokemon.Attack(IAPokemon, jugador);
        } else if (numero == 2) {
            if (cura == false) {
                console.log("No tienes la cura disponible");
            } else {
                tupokemon.Heal();
                cura = false;
            }
        } else {
            console.log("No es una opcion valida")
        }
    } while (numero > 2 || numero < 1 || (numero = 2 && cura == false) && (IAPokemon.HP!=0 && tupokemon.HP!=0));

        if (IAPokemon.HP == IAPokemon.HPMAX) {
            numeroIA = 1;
        } else if(curaIA==true) {
            numeroIA = Math.floor(Math.random() * 2) + 1;
        }else if (curaIA==false){
            numeroIA=1;
        }
        if (numeroIA == 1) {
            jugador = false;
            IAPokemon.Attack(tupokemon, jugador);
        } else if (numeroIA == 2) {
            if (curaIA == true) {
                IAPokemon.Heal();
                curaIA = false;
            }

        }
       
    if (tupokemon.HP <= 0) {
        console.log("Has perdido, vuelve a intentar")
        terminado = true;
    }
    if (IAPokemon.HP <= 0) {
        console.log("Has ganado, FELICIDADES")
        terminado = true;
    }
} while (!terminado);// Cambiarlo a un solo while   
}
function Batalla3vs3(){
    
}