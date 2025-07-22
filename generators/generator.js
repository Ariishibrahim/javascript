function* printName() {
    yield "My name is Ariish"
    yield "I live in Canada"
    yield "I am 25 years old"
}

const gen = printName()
gen.next()
gen.next()
gen.next()
let result = gen.next()
console.log(result) 
console.log(result.done) 