try{
    let num1 = 10;
    let num2 = 0;
    let result = num1 / num2;
    if (result === Infinity) {
       throw Error (" You are not allowed to divide a number by zero");
    }
    console.log(result);
} catch (e) {
    console.log(e.message)
}finally{
    console.log("these code runs regardless error or not")
}
