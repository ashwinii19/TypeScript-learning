// // ----------------------- Classes ------------------------
class Airpod{
    price = 25000;
    image = "images/airpod";
    color = "white";

    playMusic(){
        console.log("music playing...")
    }

    switchMode(mode: string){
        console.log(mode);
    }
}
const airpod = new Airpod();
airpod.playMusic();

// // ------------------------------------------------------------------------
class AirConditioner{
    color = 'white';
    category = "ac";
    company = "voltas";

    temperature = 22;

    turOn(name: string){
        console.log(`turning on ${name}...`);
        console.log(`turn on ${name}.`);
    }

     turOff(name: string){
        console.log(`turning off ${name}...`);
        console.log(`turn off ${name}.`);
    }

    raiseTemperature(){
        this.temperature++;
        console.log("temperature raised by 1: " + this.temperature);
    }

    decreaseTemperature(){
        this.temperature--;
        console.log("temperature decrease by 1: " + this.temperature);
    }
}

const ac = new AirConditioner();
ac.turOn("ac");
ac.turOff("ac");
ac.raiseTemperature();
ac.decreaseTemperature();

// // ------------------------------------------------------------------------
type Data = string | null;
class Pendrive{
    company = "hp";
    price = 1200;
    data: Data = null;

    putData(data: Data){
        console.log(`putting some data ${data}`);
        this.data = data;
    }

    getData(){
        console.log(`getting some data ${this.data}`);
    }
}

const pendrive = new Pendrive();
pendrive.putData("12");
pendrive.getData();



// // -------------------------- Constructor --------------------------
class Person{
    // private name: string;
    private readonly name: string;                      // can only read 

    public constructor(name: string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

const person = new Person("Ashwini");
console.log(person.getName());


// // ---------------------------- Inheritance (implements) ----------------------------------
// // Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
interface Shape{
    getArea: () => number;
}

class Rectangle implements Shape{
    readonly width: number;
    readonly height: number;

    public constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height;
    }

}
const myRect = new Rectangle(10,20);
console.log(myRect.getArea());


// // ---------------------------- Inheritance (extends) ----------------------------------
// // Classes can extend each other through the extends keyword.
interface Shape{
    getArea: () => number;
}

class Rectanglee implements Shape{
    readonly width: number;
    readonly height: number;

    public constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height;
    }

}
class Square extends Rectanglee{
    
    public constructor(width: number){
        super(width, width);
    }
}
const mySqq = new Square(20);
console.log(mySqq.getArea());




// // ---------------------------- Inheritance (extends-overide) ----------------------------------
// // When a class extends another class, it can replace the members of the parent class with the same name.
interface Shape{
    getArea: () => number;
}

class Rectanglle implements Shape{
    readonly width: number;
    readonly height: number;

    public constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public getArea(): number{
        return this.width * this.height;
    }

    public toString(): string{
        return `Reactangle[width=${this.width}, height=${this.height}]`;
    }

}
class Squaree extends Rectanglle{
    
    public constructor(width: number){
        super(width, width);
    }

    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}
const mySq = new Squaree(20);
console.log(mySq.toString());




// // ---------------------------- Abstract classes ----------------------------------
// // Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.

abstract class Polygon{
    public abstract getArea(): number;

    public toString(): string{
        return `Polygon[area=${this.getArea}]`;
    }
}
class Reactangles extends Polygon{

    public constructor(protected readonly width: number, protected readonly height: number){
        super();
    }

    public getArea(): number{
        return this.width * this.height;
    }
}
const myRecta = new Reactangles(10,20);
console.log(myRecta.getArea());