// Task 1: Code a Person class
class Person{
    constructor(name, age, energy) {
        this.name = name
        this.age = age
        this.energy = energy
    }

    sleep() {
        this.energy+=10
    }
    doSomethingFun() {
        this.energy-=10
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy,xp,hourlyWage) {
        super(name,age,energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
        
    }
    goToWork() {
        this.xp+=10
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var Intern = new Worker("Bob", 21, 110, 0, 10)
    Intern.goToWork()
    return Intern
}

console.log(intern())

// Task 4: Code a manager object, methods
function manager() {
    var Manager = new Worker("Alice", 30, 120, 100, 30)
    Manager.doSomethingFun()
    return Manager
}
console.log(manager())