const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]
let mapVegetables = arr => arr.map(carrot =>({type:"carrot", name: carrot}))
console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const filterForFriendly = arr => arr.filter(person => person.friendly)
console.log(filterForFriendly(people))

let doMathSum = (a, b) => a + b
let produceProduct = (a, b) => a * b
console.log(doMathSum(1, 2))
console.log(produceProduct(2, 3))

const person = 

{
    firstName: "Jane",
    lastName : "Doe",
    age: 100
}


let printString = ({firstName, lastName, age}) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}`
}

console.log(printString(person))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 let filterForDogs = arr => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))

const newClient = 
{
    name: "Janice",
    location: "Hawaii"
}

const welcomeLetter = ({name, location}) => {
    return  `Hi ${name}!
    
Welcome to ${location}.
I hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`
}

console.log(welcomeLetter(newClient))

