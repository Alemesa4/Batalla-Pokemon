const readlineSync = require('readline-sync');

const Types=require("./Types");
const Pokemon=require("./Pokemon");
const Move=require("./Move");

const Lanzallamas= new Move("Lanzallamas",60);
const Hidrobomba= new Move("Hidrobomba",60);
const HojaAfilada= new Move("Hoja Afilada",60);
const Placaje= new Move("Placaje",40);

const Charizard= new Pokemon("Charizard",160,160,[Lanzallamas,Placaje],Types.Fire,150,80);
const Venasaur= new Pokemon("Venasaur",180,180,[HojaAfilada,Placaje],Types.Grass,90,120);
const Blastoise= new Pokemon("Blastoise",170,170,[Hidrobomba,Placaje],Types.Water,120,100);
let terminado=false;
let cura=true;
let numero;

console.log("Bienvenido a la batalla pokemon te enfrentaras junto a tu pokemon aleatorio a la maquina con su pokemon aleatorio");

let OpPokemon=[Charizard,Venasaur,Blastoise];
let tupokemon=OpPokemon[Math.floor(Math.random()*OpPokemon.length)];
let IAPokemon=OpPokemon[Math.floor(Math.random()*OpPokemon.length)];
console.log("Tu pokemon sera: ")
console.log(tupokemon);
console.log("El pokemon rival sera: ")
console.log(IAPokemon);

do {

do {
    console.log("-TU--------------------");
    console.log(tupokemon.Name+" "+ "HP: "+tupokemon.HP+"/"+tupokemon.HPMAX)
    console.log("-----------------------");
    
    console.log("-RED-------------------");
    console.log(IAPokemon.Name+" "+ "HP: "+IAPokemon.HP+"/"+IAPokemon.HPMAX);
    console.log("-----------------------");
    

console.log("Que quieres hacer");
console.log("1.Atacar");
console.log("2.Curar");

numero = readlineSync.question('');
if(numero==1){
tupokemon.Attack(IAPokemon);
}else if(numero==2){
    if(cura==false){
        console.log("No tienes la cura disponible");
    }else{
   tupokemon.Heal();
   cura=false;
}
}else{
    console.log("No es una opcion valida")
}
} while (numero>2 ||numero<1 || (numero=2 && cura==false));

if (tupokemon.HP==0){
console.log("Has perdido, vuelve a intentar")
terminado=true;
}
if (IAPokemon.HP==0)
{
console.log("Has ganado, FELICIDADES")
terminado=true;
}
} while (!terminado);