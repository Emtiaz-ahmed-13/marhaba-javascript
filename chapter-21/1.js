//21.478
/*
ক্লাস আর অবজেক্টের মধ্যে পার্থক্য (Class vs Object)
Feature	    Class	            Object
কী?	    একটি টেমপ্লেট বা ব্লুপ্রিন্ট	    ক্লাস থেকে তৈরি হওয়া নির্দিষ্ট কিছু ডাটা
কী থাকে?	প্রোপার্টি ও মেথড সংজ্ঞা	নির্দিষ্ট মানসহ প্রোপার্টি ও মেথড
তৈরি হয় কীভাবে?	class কিওয়ার্ড দিয়ে	ক্লাস থেকে new কিওয়ার্ড দিয়ে
উদাহরণ	class Car {}	const bmw = new Car();
*/

//21.479
//কোনো ক্লাস থেকে তৈরি হওয়া একটি নির্দিষ্ট অবজেক্টকে ক্লাসের ইনস্ট্যান্স বলে।

//21.480
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const bmwX5 = new Vehicle("BMW", "X5", 60000);
const teslaModel3 = new Vehicle("Tesla", "Model 3", 40000);
console.log(bmwX5, teslaModel3);

//21.481
class Worker {
constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
}
}
const worker1 = new Worker(101, "Tom Cruise", 40);
console.log(worker1);

//21.482
class Library {
constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
}
}
const centralLibrary = new Library("Central Library", 10000, "Dhaka");
console.log(centralLibrary);

//21.483
class Classroom {
constructor(section, teacher) {
    this.section = section;
    this.teacher = teacher;
    this.students = [];
}
}
const classA = new Classroom("A", "Mr. Plumber");
console.log(classA);

//21.484
class Product {
constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
}
}
const mobile = new Product("Mobile", "Electronics", 50);
console.log(mobile);

//21.485
class Product {
constructor(name, category, stock = 0) {
    this.name = name;
    this.category = category;
    this.stock = stock;
}
}

const mobile2 = new Product("Mobile", "Electronics");
console.log(mobile2);
