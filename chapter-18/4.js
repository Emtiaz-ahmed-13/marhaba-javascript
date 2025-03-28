//18.421
/*
JavaScript একটি Single-Threaded, Non-Blocking, Asynchronous, এবং Interpreted (JIT Compiled) ভাষা, যা Call Stack, Web APIs, Callback Queue, এবং Event Loop ব্যবহার করে কোড এক্সিকিউট করে।

JavaScript Execution Process (ধাপে ধাপে ব্যাখ্যা)
Parsing & Compilation:

JavaScript কোড প্রথমে Parsing (Syntax Analysis) হয়।

এরপর এটি JIT (Just-In-Time) Compiler-এর মাধ্যমে মেশিন কোডে রূপান্তরিত হয়।

Execution Context Creation:

Global Execution Context (GEC) তৈরি হয়।

Function Execution Context (FEC) প্রতিটি ফাংশন কলের জন্য আলাদা তৈরি হয়।

Call Stack Execution:

Synchronous কোড Call Stack-এ চলে যায় এবং এক্সিকিউট হয়।

Async Code Handling (Web APIs, Callback Queue & Event Loop):

Asynchronous কোড (e.g., setTimeout, fetch()) Web APIs-এ যায়।

Event Loop চেক করে যদি Call Stack ফাঁকা হয়, তাহলে Callback Queue থেকে কাজ নিয়ে আসে।

*/

//18.422
/*
✅ JavaScript is a high-level, interpreted (JIT-compiled), dynamically typed, prototype-based, single-threaded programming language that is mainly used for web development.

🔹 Key Features of JavaScript
Single-threaded & Event-driven

Dynamically Typed (No need to declare variable types explicitly)

Prototype-based Object Orientation

Asynchronous (Non-blocking with Promises, Async/Await)

JIT Compiled (Faster execution)

Cross-platform (Works on Browsers, Node.js, etc.)

🔹 Uses of JavaScript
Frontend Development (React, Vue, Angular)

Backend Development (Node.js, Express.js)

Game Development (Three.js, Phaser.js)

Machine Learning (TensorFlow.js)

Desktop Apps (Electron.js)
*/

//18.423

/*
JIT (Just-In-Time) Compilation is a technique where JavaScript is compiled just before execution instead of interpreting line by line.

Here's a simple flowchart for JIT Compilation:

plaintext
Copy
Edit
+-----------------------+
|  JavaScript Code      |
+-----------------------+
        ⬇
+-----------------------+
|  Parsing (Syntax Check) |
+-----------------------+
        ⬇
+-----------------------+
|  AST (Abstract Syntax Tree) |
+-----------------------+
        ⬇
+-----------------------+
|  Bytecode Generation |
+-----------------------+
        ⬇
+-----------------------+
|  JIT Compilation (Hot Code Optimization) |
+-----------------------+
        ⬇
+-----------------------+
|  Machine Code Execution |
+-----------------------+
JIT Compilation Steps in JavaScript V8 Engine (Used in Chrome & Node.js):
Parsing: JavaScript is converted into an Abstract Syntax Tree (AST).

Bytecode Generation: AST is translated into bytecode (intermediate representation).

JIT Compilation: Frequently used code ("Hot Code") is optimized and compiled into machine code.

Execution: Optimized code is directly executed in the CPU.

✅ JIT Compilation makes JavaScript execution faster compared to traditional interpretation. 🚀
*/

//18.424


/*
JavaScript automatically manages memory allocation and deallocation using Garbage Collection (GC).

🔹 How JavaScript Manages Memory?
Memory Allocation:

JavaScript allocates memory when creating variables, objects, or functions.

Memory Usage (Execution Phase):

JavaScript uses the allocated memory during execution.

Garbage Collection (GC):

When objects are no longer referenced, they are automatically removed from memory.

JavaScript uses the Mark-and-Sweep Algorithm for garbage collection.

Mark-and-Sweep Algorithm (Step-by-Step):
Mark Phase:

The garbage collector finds all reachable objects (i.e., objects still in use).

Sweep Phase:

The unreachable objects are removed from memory to free up space.
*/