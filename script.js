class Ninja {
    constructor(nombre,salud=100,velocidad = 3,fuerza =3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        console.log('\n'+this.nombre);
    }
    showStats(){
        console.log(`\nnombre: ${this.nombre}`);
        console.log(`fuerza: ${this.fuerza}`);
        console.log(`velocidad: ${this.velocidad}`);
        console.log(`salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud += 10
        console.log(`\nTomando sake...`)
        console.log(`Salud aumentada +10: ${this.salud}`)
    }

}
class Sensei extends Ninja{
    constructor(nombre,salud=200,velocidad=10,fuerza=10,sabiduria=10){
        super(nombre,salud,velocidad,fuerza)
        this.sabiduria=sabiduria;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Los sabios son los que buscan la sabiduría; los necios piensan ya haberla encontrado")
    }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"