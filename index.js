const readlineSync = require('readline-sync');

const { efectividades, Types } = require("./Types");

const Pokemon = require("./Pokemon");
const Move = require("./Move");

const Flamethrower = new Move("Flamethrower", 80,Types.Fire,100);
const HydroPump = new Move("Hydro Pump", 120,Types.Water,80);
const SharpBlade = new Move("Sharp Blade", 80,Types.Grass,100);
const Tackle = new Move("Tackle", 40,Types.Normal,100);

const Charizard = new Pokemon("Charizard", 200, 200, [Flamethrower, Tackle], Types.Fire, 150, 80);
const Venasaur = new Pokemon("Venasaur", 240, 240, [SharpBlade, Tackle], Types.Grass, 90, 120);
const Blastoise = new Pokemon("Blastoise", 190, 190, [HydroPump, Tackle], Types.Water, 120, 100);
let terminado = false;
let cura = true;
let numero;
let numeroIA;
let curaIA = true;
let jugador;
let tupokemon;
let IAPokemon;


console.log("Bienvenido a la batalla pokemon te enfrentaras junto a tu pokemon aleatorio a la maquina con su pokemon aleatorio");

let OpPokemon = [Charizard, Venasaur, Blastoise];
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
} while (!terminado);   