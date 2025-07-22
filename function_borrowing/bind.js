let doctor = {
    name: "Dr. Smith",
}

let actor ={
    name: "Tom Hanks"
}

  function drive (car) {
    console.log("I am " + this.name + " and I am driving a " + car + "!")
}

//drive("Toyota")
//console.log(doctor.drive("Toyota"))
//drive.call(doctor, "Toyota")
drive.apply(doctor, ["Toyota"])

let actorDrive = drive.bind(actor, "Lamborghini")
actorDrive() // I am Tom Hanks and I am driving a Lamborghini!
actorDrive()
actorDrive()
actorDrive() // I am Tom Hanks and I am driving a Lamborghini!