// arguments are the actual values that we pass to the function, and the parameters are the named references where we store those passed-in values
// an argument can be any JavaScript expression -- any piece of JS code that evaluates to a value (of any type)-- value or even a function.


// console.log('Hello, world!')
// console.log('Hello, world!')
// console.log('Hello, world!')
// console.log('Hello, world!')
// console.log('Hello, world!')
// console.log('Hello, world!')

function doNothing() {
    // this function is a 'noop' as it does nothing (no op)
}
doNothing()

// function sayHello() {
//     console.log('Hello, world!')
// }
// sayHello()

// function sayHelloToGuadalupe() {
//     console.log('Hello, Guadalupe!')
// }
// sayHelloToGuadalupe()

// function sayHelloToLiz() {
//     console.log('Hello, Liz!')
// }
// sayHelloToLiz()

// function sayHelloToSamip() {
//     console.log('Hello, Samip!')
// }
// sayHelloToSamip()

function doSomething(thing) {
    console.log(thing)
}
doSomething('anything')

// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`)
// }
// sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
// sayHelloTo("Jane"); // "Hello, Jane!"
// sayHelloTo("R2-D2"); // "Hello, R2-D2!"
// sayHelloTo(1); // "Hello, 1!"
// ^ Note JavaScript coerces the number 1 to the string "1" here

function say(greeting, firstName) {
    // console.log("firstName: ", firstName)
    // console.log("greeting: ", greeting)
        // console.log `${greeting}, ${firstName}!`
        console.log('I was called!')
        return `${greeting}, ${firstName}!`
}
say('Goodbye', 'Julio')
console.log(say("Howdy", "partner"))

function add(x, y) {
    return x + y
}
add(1, 2)

// const sum = add(num1, num2)
// const message = `The sum of your numbers is: ${sum}.`
// is the same as:
// const message = `The sum of your numbers is: ${add(num1, num2)}.`
