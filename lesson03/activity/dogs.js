// Create the Dog class constructor
class Dog {
    constructor(name, age, breed, color, barkLevel, energyLevel) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.barkLevel = barkLevel;
        this.energyLevel = energyLevel;
    }

    pat() {
        this.barkLevel++;
        this.energyLevel++;
        console.log(`Hi my name is ${this.name}. My current bark level is ${this.barkLevel} and energy level is ${this.energyLevel}.`);    
    }
}
// Create Marty
const myDog = new Dog('Marty', 10, 'Puppy', 'White', 3, 5);

// Pat him 5 times
for(let i=0; i < 5; i++) {
    myDog.pat();
}

console.log(Object.entries(myDog)[0]);