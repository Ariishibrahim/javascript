function myFunction() {
    console.log("I live in London")
    console.log("I Love it")
}

let timer=setInterval(
    myFunction
, 1000);

function stop() {
    clearInterval(timer);
}
setTimeout(stop, 10000)