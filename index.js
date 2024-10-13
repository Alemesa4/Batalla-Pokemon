const readlineSync = require('readline-sync');

const { efectividades, Types } = require("./Types");

const Pokemon = require("./Pokemon");
const Move = require("./Move");

const Flamethrower = new Move("Flamethrower", 80, Types.Fire, 100);
const HydroPump = new Move("Hydro Pump", 120, Types.Water, 80);
const SharpBlade = new Move("Sharp Blade", 80, Types.Grass, 100);
const Tackle = new Move("Tackle", 40, Types.Normal, 100);
const Thunderbolt = new Move("Thunderbolt", 90, Types.Electric, 100);
const Psychics = new Move("Psychics", 80, Types.Psychic, 100);
const RockSlide = new Move("Rock Slide", 75, Types.Rock, 90);
const IceBeam = new Move("Ice Beam", 90, Types.Ice, 100);
const DrainPunch = new Move("Drain Punch", 75, Types.Fighting, 100);
const DarkPulse = new Move("Dark Pulse", 80, Types.Dark, 100);
const LeafStorm = new Move("Leaf Storm", 130, Types.Grass, 80);
const ShadowBall = new Move("Shadow Ball", 80, Types.Ghost, 100);
const DragonDarts = new Move("Dragon Darts", 100, Types.Dragon, 100);
const AuraSphere = new Move("Aura Sphere", 100, Types.Fighting, 100);
const Fly = new Move("Fly", 100, Types.Flying, 90);

const Charizard = new Pokemon("Charizard", 360, 360, [Flamethrower, Tackle], Types.Fire, 150, 80);
const Venusaur = new Pokemon("Venusaur", 370, 370, [SharpBlade, Tackle], Types.Grass, 100, 120);
const Blastoise = new Pokemon("Blastoise", 370, 370, [HydroPump, Tackle], Types.Water, 120, 100);
const Pikachu = new Pokemon("Pikachu", 320, 320, [Thunderbolt, LeafStorm], Types.Electric, 90, 80);
const Alakazam = new Pokemon("Alakazam", 360, 360, [Psychics, Tackle], Types.Psychic, 110, 90);
const Gengar = new Pokemon("Gengar", 340, 340, [ShadowBall, Tackle], Types.Ghost, 130, 70);
const Dragapult = new Pokemon("Dragapult", 400, 400, [ShadowBall, DragonDarts], Types.Dragon, 130, 120);
const Lapras = new Pokemon("Lapras", 370, 370, [IceBeam, HydroPump], Types.Water, 130, 100);
const Machamp = new Pokemon("Machamp", 350, 350, [DrainPunch, RockSlide], Types.Fighting, 130, 100);
const Umbreon = new Pokemon("Umbreon", 340, 340, [DarkPulse, IceBeam], Types.Dark, 100, 130);
const Lucario = new Pokemon("Lucario", 350, 350, [DrainPunch, AuraSphere], Types.Fighting, 140, 100);
const Ducklett = new Pokemon("Ducklett", 500, 500, [HydroPump, Fly], Types.Water, 200, 200);

let terminado = false;
let cura = true;
let numero = 0;
let numeroIA = 0;
let curaIA = true;
let jugador;
let tupokemon;
let IAPokemon;
let OpPokemon = [Charizard, Venusaur, Blastoise, Pikachu, Alakazam, Machamp, Umbreon, Lapras, Dragapult, Gengar, Lucario, Ducklett];
let ocombate = 0;

while (ocombate >= 3 || ocombate <= 0) {
    console.log("Bienvenido a la batalla pokemon te enfrentaras a la maquina");
    console.log("¿Que tipo de comabte quieres hacer?");
    console.log("1. 1vs1");
    console.log("2. 3vs3");
    let ocombate = readlineSync.question("");
    if (ocombate == 1) {
        Batalla1vs1();
    } else if (ocombate == 2) {
        Batalla3vs3();
    } else {
        console.log("No es una opcion correcta");
    }
}

function Batalla1vs1() {
    do {
        tupokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
        IAPokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
    } while (IAPokemon == tupokemon);
    console.log("Tu pokemon sera: ")
    console.log(tupokemon);
    console.log("El pokemon rival sera: ")
    console.log(IAPokemon);

    while (!terminado) {

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
        } while (numero > 2 || numero < 1 || (numero = 2 && cura == false) && (IAPokemon.HP != 0 && tupokemon.HP != 0));

        if (IAPokemon.HP == IAPokemon.HPMAX) {
            numeroIA = 1;
        } else if (curaIA == true) {
            numeroIA = Math.floor(Math.random() * 2) + 1;
        } else if (curaIA == false) {
            numeroIA = 1;
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
    }
}
function Batalla3vs3() {
    let tuequipo = [];
    let IAequipo = [];
    let terminado = false;
    
    while (tuequipo.length < 3) {
        let randomPokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
        if (!tuequipo.includes(randomPokemon)) {
            tuequipo.push(randomPokemon);
        }
    }
    console.log("Este es tu equipo Pokémon: " + JSON.stringify(tuequipo, null, 2));
    
    while (IAequipo.length < 3) {
        let randomPokemon = OpPokemon[Math.floor(Math.random() * OpPokemon.length)];
        if (!tuequipo.includes(randomPokemon) && !IAequipo.includes(randomPokemon)) {
            IAequipo.push(randomPokemon);
        }
    }
    console.log("Este es el equipo al cual vas a enfrentarte: " + IAequipo.map(p => p.Name).join(", "));
    
    let tupokemon = tuequipo[0];
    let IAPokemon = IAequipo[0];
    let esTurnoJugador = true;
    
    while (!terminado) {
        if (esTurnoJugador) {
            if (tupokemon.HP <= 0) {
                console.log("Tu Pokémon se ha debilitado");
                tupokemon.vivo = false;
                while (!tupokemon.vivo) {
                    console.log("Tienes que cambiar de Pokémon");
                    console.log(tuequipo.map((p, index) => `(${index + 1}) Nombre: ${p.Name}, HP: ${p.HP}/${p.HPMAX}`));
                    let opcionP = parseInt(readlineSync.question("Un número del 1 al 3: "));
                    if (tuequipo[opcionP - 1] && tuequipo[opcionP - 1].HP > 0) {
                        tupokemon = tuequipo[opcionP - 1];
                        console.log("Has cambiado a " + tupokemon.Name);
                    } else {
                        console.log("Ese Pokémon no se puede cambiar");
                    }
                }
            }
    
            console.log("-TU--------------------");
            console.log(tupokemon.Name + " " + "HP: " + tupokemon.HP + "/" + tupokemon.HPMAX);
            console.log("-----------------------");
            console.log("-RED-------------------");
            console.log(IAPokemon.Name + " " + "HP: " + IAPokemon.HP + "/" + IAPokemon.HPMAX);
            console.log("-----------------------");
    
            let cambiado = false;
            let numero = 0;
            while (numero < 1 || numero > 3) {
                console.log("Qué quieres hacer?");
                console.log("1. Atacar");
                console.log("2. Curar");
                console.log("3. Cambiar");
                numero = parseInt(readlineSync.question(''));
    
                switch (numero) {
                    case 1:
                        tupokemon.Attack(IAPokemon, true);
                        break;
                    case 2:
                        if (cura == false) {
                            console.log("No tienes la cura disponible");
                            numero = 0;
                        } else {
                            tupokemon.Heal();
                            cura = false;
                        }
                        break;
                    case 3:
                        while (!cambiado) {
                            console.log("A qué Pokémon quieres cambiar?");
                            console.log(tuequipo.map((p, index) => `(${index + 1}) Nombre: ${p.Name}, HP: ${p.HP}/${p.HPMAX}`));
                            let opcionP = parseInt(readlineSync.question("Un número del 1 al 3: "));
                            if (tuequipo[opcionP - 1] && tupokemon != tuequipo[opcionP - 1] && tuequipo[opcionP - 1].HP > 0) {
                                tupokemon = tuequipo[opcionP - 1];
                                cambiado = true;
                                console.log("Has cambiado a " + tupokemon.Name);
                            } else {
                                console.log("Ese Pokémon ya está en combate o no tiene HP suficiente");
                            }
                        }
                        break;
                    default:
                        console.log("No es una opción válida");
                        numero = 0; 
                        break;
                }
            }
    
            if (IAequipo.every(p => !p.vivo)) {
                console.log("Has ganado");
                terminado = true;
            }
    
            esTurnoJugador = false;
            console.log("Turno del jugador completado, cambiando a la IA");
        } else {
            if (IAPokemon.HP <= 0) {
                console.log("El Pokémon rival se ha debilitado");
                IAPokemon.vivo = false;
                let cambiadoIA = false;
                while (!cambiadoIA) {
                    let opcionPIA = Math.floor(Math.random() * 3);
                    if (IAequipo[opcionPIA].HP > 0) {
                        IAPokemon = IAequipo[opcionPIA];
                        cambiadoIA = true;
                        console.log("Tu rival ha cambiado a " + IAPokemon.Name);
                    }
                }
            }
    
            let numeroIA = Math.random() < 0.5 ? 1 : (curaIA && Math.random() < 0.5 ? 2 : 3);
            switch (numeroIA) {
                case 1:
                    IAPokemon.Attack(tupokemon, false);
                    break;
                case 2:
                    IAPokemon.Heal();
                    curaIA = false;
                    break;
                case 3:
                    let cambiadoIA = false;
                    while (!cambiadoIA) {
                        let opcionPIA = Math.floor(Math.random() * 3);
                        if (IAequipo[opcionPIA].HP > 0 && IAPokemon != IAequipo[opcionPIA]) {
                            IAPokemon = IAequipo[opcionPIA];
                            cambiadoIA = true;
                            console.log("Tu rival ha cambiado a: " + IAPokemon.Name);
                        }
                    }
                    break;
                default:
                    break;
            }
    
            // Verificar si el juego ha terminado
            if (tuequipo.every(p => !p.vivo)) {
                console.log("Has perdido");
                terminado = true;
            }
    
            esTurnoJugador = true;
            console.log("Turno de la IA completado, cambiando al jugador");
        }
    }
    
    
}