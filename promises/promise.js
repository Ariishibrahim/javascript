let motherPromise = new Promise((resolve, reject) => {
    let boyBehaves = true;
    
    if (boyBehaves == true) {
        resolve("Mother buys the iphone");
    }else {
        reject("Mother: No iphone! You didnt behave.");
    }
});

   let fatherPromise = motherPromise.then((momMessage) => {
    console.log(momMessage);
//     
        return new Promise((resolve) => {
            resolve("Dad! Since Mom bought you an iphone, I will buy you a Sim Card.");
            });
    });

    let sisterPromise = fatherPromise.then((dadMessage) => {
        console.log(dadMessage);
        return new Promise((resolve) => {
            resolve("Sister: Since Dad bought you a SIM card, I will buy you a phone cover.");
            });
    });

    sisterPromise
    .then((sisterMessage) => {
        console.log(sisterMessage);
        console.log("Boy: Yay! I got an iphone, a SIM card and a phone cover!");
        })
  


// let makeCoffee = new Promise((resolve, reject) => {
//     let haveBeans = true;

//     if(haveBeans) {
//         resolve("Coffee beans are available. Making your coffee...");
//     }else {
//         reject("No coffee beans. Can't make coffee.");
//     }
// });

// makeCoffee
// .then((message) => {
//     console.log(message);
//     console.log("Enjoy your coffee!")
// })
// .catch((error) => {
//     console.log(error);
//     console.log("please go buy some coffee beans!");
// });




