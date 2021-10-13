class Terminator {
    constructor(model, hp){
        this.model = model
        this.hp = hp
    }
    kill(){
        console.log(`killed by ${this.model}`)
    }
    selfdestruct(){
        console.log(`${this.model} self destructed`)
    }
    heal(){
        this.hp += 50
        console.log(`hp of ${this.model} increased by 50`)
    }
} 


const model = new Terminator('T1000', 1000)

console.log(model)
model.kill()
model.selfdestruct()
model.heal()
    

