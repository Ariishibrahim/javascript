class shape {
    area() {
        console.log("Calculating area...");
    }
}

class Circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        console.log(`Circle area: ${Math.PI * this.radius ** 2}`);
    }
}

class Rectangle extends shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(`Rectangle area: ${this.width * this.height}`);
    }
}

let circle1 = new Circle(5);
circle1.area();

let rectangle1 = new Rectangle(4, 6);
rectangle1.area();