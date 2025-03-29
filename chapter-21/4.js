//21.498
/*
জাভাস্ক্রিপ্টে ইনহেরিটেন্স কীভাবে কাজ করে?
জাভাস্ক্রিপ্টে ইনহেরিটেন্স মূলত Prototype Chain এবং Class-based পদ্ধতির মাধ্যমে কাজ করে।
*/
const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent);
child.greet();

//21.499

/*
প্রোটোটাইপিক্যাল ইনহেরিটেন্স কী?
Prototype-based Inheritance হলো এমন একটি পদ্ধতি, যেখানে একটি অবজেক্ট অন্য অবজেক্টের prototype থেকে প্রোপার্টি ও মেথড ইনহেরিট করে।

কেন দরকার?
Code Reusability

Memory Optimization

Dynamic Property Sharing

কীভাবে কাজ করে?
প্রত্যেক অবজেক্টের পেছনে একটি proto (ডান্ডার প্রোটো) থাকে, যা তার parent প্রোটোটাইপের সাথে লিংক থাকে।
*/

//21.50
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Person("John");
student.sayHello();
