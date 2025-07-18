async function getPhonePromuse() {
    var phone = {
        brand: "Samsung",
        color: "Black",
    };
    return phone;
}

// consuming promise using then()
getPhonePromuse().then(phone =>{
    console.log(phone);
});

//consuming promise using async/await
async function consumePhonePromuse() {
    let phone = await getPhonePromuse();
    console.log(phone);
}
consumePhonePromuse();

//creating a promise without new keywords
let phonePromise2 =Promise.resolve(
    {brand: 'Sumsung', color: 'Black'}
);
//consuming promise using then()
phonePromise2.then(phone =>{
    console.log(phone);
})

// creating promise using new keyword and function
let phonePromise3 = new Promise(function(resolve,reject) {
    resolve(
        {brand: 'Sumsung', color: 'Black'}
    );
});
//consuming promise using then()
phonePromise3.then(phone =>{
    console.log(phone);
    });
