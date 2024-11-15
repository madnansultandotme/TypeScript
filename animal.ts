class Animal{
    private name:string ;

    constructor (name:string){
        this.name=name; 
    }
    move (distance:number):void{
        console.log(`${this.name} moved ${distance} meters`);
    }
}

class Dog extends Animal{
    bark():void{
        console.log("Woof! Woof!");
    }
}

class Person {
    private name:string;
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
}

const person=new Person("Jane")

console.log(person.getName());