class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi, I'm ${this.name}`
    }
}
// const me = new Person('Ghazz', 37)
// console.log(me)

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let description = super.getGreeting()

        if (!!this.homeLocation) {
            description += ` I'm from ${this.homeLocation}`
        }

        return description
    }
}
const me = new Traveler('Ghazz', 31, 'Dehiwala')
console.log(me.getGreeting())