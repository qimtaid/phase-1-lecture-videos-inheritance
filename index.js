class Animals{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
        this.favFood = []
    }
    introduce(){
        return `Hi my name is ${this.name}`
    }
    addFood = (food) => {
        this.favFood.push(food)
    }
    logFood = (food) =>{
        console.log(this)
        console.log(`Hi my name is ${this.name} and I love to eat ${food}`)
    }

}
class Bird extends Animals{
    constructor(...args){
        super(...args)
        this.canfly = true
    }
}

class Dog extends Animals {
    speak(){
        return 'woof!'
    }
}

class Cat extends Animals {
    speak(){
        return 'meow! '
    }
}

let rose  = new Cat('rose', 'domestic longhair', 9)
let luke = new Cat('luke', 'domestic short hair', 3)
let boofer = new Dog('boofer', 'Bulldog', 5)
let wanjiku = new Bird('wanjiku', 'weaver', 3)


rose.addFood('fish')
rose.addFood('chicken')
rose.addFood('house plant')
rose.addFood('brownies')