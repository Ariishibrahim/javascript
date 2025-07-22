let killableMixin ={
    kill: function () {
        console.log(`${this.firstName} has been killed`);
    },

    injure: function() {
        console.log(`${this.firstName} has been injured`);
    },
};

class person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class User extends person{
    constructor(firstName, lastName, userName, password) {
        super(firstName, lastName);
        this.userName = userName;
        this.password = password;
    }
}
Object.assign(User.prototype, killableMixin);

let user1 = new User('John', 'Doe', 'johndoe', 'password123');
user1.injure();
user1.kill()