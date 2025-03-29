//21.490
/*
ইনহেরিটেন্স কী? কেন দরকার?
ইনহেরিটেন্স (Inheritance) হলো এমন একটি প্রক্রিয়া, যেখানে একটি চাইল্ড ক্লাস (Subclass) একটি প্যারেন্ট ক্লাসের (Superclass) প্রোপার্টি এবং মেথডগুলোর অ্যাক্সেস পায়। অর্থাৎ, চাইল্ড ক্লাস তার প্যারেন্ট ক্লাসের বৈশিষ্ট্যগুলো উত্তরাধিকারসূত্রে পায়।

কেন দরকার?
Code Reusability: একই কোড বারবার না লিখে পুনঃব্যবহার করা যায়।

Better Organization: কোডকে স্ট্রাকচারড ও ম্যানেজেবল রাখা যায়।

Polymorphism: একই ফাংশন ভিন্ন ভিন্ন ক্লাসে ভিন্নভাবে ব্যবহার করা যায়।
*/

//21.491

/*
প্যারেন্ট আর চাইল্ড ক্লাসের মধ্যে সম্পর্ক কীভাবে তৈরি হয়?
extends কীওয়ার্ড ব্যবহার করে চাইল্ড ক্লাস প্যারেন্ট ক্লাসকে ইনহেরিট করতে পারে।

super() ব্যবহার করে প্যারেন্ট ক্লাসের constructor-কে কল করা হয়।

*/

//21.492
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const child1 = new Child("Rahim", 25);
console.log(child1.name);
console.log(child1.age);

//21.493
// Parent Class
class Vehicle {
    constructor(brand, wheels, fuelType) {
      this.brand = brand;
      this.wheels = wheels;
      this.fuelType = fuelType;
    }
  }
  
  // Child Classes
  class Bus extends Vehicle {
    constructor(brand, fuelType, capacity) {
      super(brand, 4, fuelType);
      this.capacity = capacity;
    }
  }
  
  class Truck extends Vehicle {
    constructor(brand, fuelType, loadCapacity) {
      super(brand, 6, fuelType);
      this.loadCapacity = loadCapacity;
    }
  }
  
  class Bike extends Vehicle {
    constructor(brand, fuelType, hasCarrier) {
      super(brand, 2, fuelType);
      this.hasCarrier = hasCarrier;
    }
  }
  

  const bus = new Bus("Volvo", "Diesel", 50);
  const truck = new Truck("Tata", "Diesel", 2000);
  const bike = new Bike("Yamaha", "Petrol", true);
  
  console.log(bus, truck, bike);

//21.494
class Animal {
    constructor(name, habitat) {
      this.name = name;
      this.habitat = habitat;
    }
  }
  
  class Bird extends Animal {
    constructor(name, habitat, canFly) {
      super(name, habitat);
      this.canFly = canFly;
    }
  }
  
  class Fish extends Animal {
    constructor(name, habitat, hasGills) {
      super(name, habitat);
      this.hasGills = hasGills;
    }
  }
  
  const sparrow = new Bird("Sparrow", "Trees", true);
  const shark = new Fish("Shark", "Ocean", true);
  
  console.log(sparrow, shark);
  

//21.495
class Furniture {
    constructor(material, color) {
      this.material = material;
      this.color = color;
    }
  }
  
  class Chair extends Furniture {
    constructor(material, color, hasArmrest) {
      super(material, color);
      this.hasArmrest = hasArmrest;
    }
  }
  
  class Table extends Furniture {
    constructor(material, color, hasDrawers) {
      super(material, color);
      this.hasDrawers = hasDrawers;
    }
  }
  
  const woodenChair = new Chair("Wood", "Brown", true);
  const officeTable = new Table("Metal", "Black", true);
  
  console.log(woodenChair, officeTable);

  
//21.496
class Pet {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  }
  
  class Dog extends Pet {
    constructor(name, sound, breed) {
      super(name, sound);
      this.breed = breed;
    }
  }
  
  class Cat extends Pet {
    constructor(name, sound, hasWhiskers) {
      super(name, sound);
      this.hasWhiskers = hasWhiskers;
    }
  }
  
  class Parrot extends Pet {
    constructor(name, sound, canTalk) {
      super(name, sound);
      this.canTalk = canTalk;
    }
  }
  
  const myDog = new Dog("Rex", "Bark", "Labrador");
  const myCat = new Cat("Mittens", "Meow", true);
  const myParrot = new Parrot("Polly", "Squawk", true);
  
  console.log(myDog, myCat, myParrot);
  
//21.497
/*
DRY প্রিন্সিপাল (Don't Repeat Yourself)
DRY (Don't Repeat Yourself) হলো একটি সফটওয়্যার ডিজাইন প্রিন্সিপাল, যা বলে একই কোড বারবার না লিখে পুনঃব্যবহারযোগ্য করা উচিত।

*/
class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }
  
  class Bike {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }
  class Vehicle {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  }
  
  class Car extends Vehicle {}
  class Bike extends Vehicle {}
  
  const myCar = new Car("Toyota", "Corolla", 2020);
  const myBike = new Bike("Yamaha", "R15", 2019);
  
  console.log(myCar, myBike);
  
//এখানে কমন কোড Vehicle ক্লাসে রাখা হয়েছে, ফলে বারবার লিখতে হয়নি। এটাই DRY প্রিন্সিপাল! ✅