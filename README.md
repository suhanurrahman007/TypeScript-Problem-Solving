# batch3-assignment-1

## Private Repository Link
[https://github.com/Porgramming-Hero-web-course/batch-3-assignment-1-suhanurrahman007](https://github.com/Porgramming-Hero-web-course/batch-3-assignment-1-suhanurrahman007)

## Assignment: Basic Problem Solving with TypeScript

This assignment comprises various problems that demonstrate fundamental TypeScript concepts, including data typing, interfaces for objects, class usage with inheritance, type checking, and manipulation of data structures. The solutions aim to showcase efficient and clear problem-solving techniques using TypeScript, adhering to best coding practices.

The assignment tasks cover a range of topics:

1. *String Manipulation:* Implementing functions to repeat strings and reverse arrays.
2. *Array Operations:* Finding the largest number in an array and filtering even numbers.
3. *Object Handling:* Defining interfaces for student and book objects and performing operations like calculating average grades and checking recent book publications.
4. *Type Guard and Error Handling:* Creating a function to log strings and handle different data types using type guards.
5. *Class Implementation:* Designing a class to represent car information and displaying relevant details.

Each problem is accompanied by sample input and output, showcasing how TypeScript can be used to solve practical programming challenges effectively.If you have any questions or need further clarification on any problem, please let us know in our facebook group.

## Problem 1:

Design a TypeScript function `repeatString` that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

## Solution: 
```tsx
{
    const repeatString = (str: string, numOfTimes: number): string =>{

        let value = "";

        for (let i = 0; i < numOfTimes; i++) {
            value = value + str;
        }
        
        return value;
    }

    const result = repeatString("Hello!", 3)
    console.log(result);
}
```
This code defines an arrow function `repeatString` that takes a string `str` and a number `numOfTimes`. It uses string interpolation and the `repeat` method to return the input string repeated `numOfTimes` times. The function is then immediately invoked with the string` "Hello!"` repeated `3` times, and the result is logged to the console using `console.log`.

```tsx
// Sample Input: 
repeatString("Hello!", 3)

// Sample Output:
"Hello!Hello!Hello!"
```


## Problem 2:

Design a TypeScript function `findLargestNumber` that takes an array of numbers and returns the largest number in the array.It declares a function `findLargestNumber` that takes an array of numbers `value` as its parameter.It initializes a variable `largestNumber` with the first element of the input array.
It iterates through the array using a for loop, starting from the second element. During each iteration, it checks if the current element is larger than the current `largestNumber`. If so, it updates `largestNumber` to be the current element.
After looping through all elements, it returns the `largestNumber`.The function is then invoked with an array `[10, 5, 8, 20, 3]`, and the result is logged to the console using `console.log`.

The commented-out line provides an alternative solution using the `Math.max` function with the spread operator `...` to find the maximum value in the array. However, it's not utilized in the code execution.

## Solution: 
```tsx
{
    const findLargestNumber = (value: number[]): number =>{

        let largestNumber = value[0];

        for (let i = 0; i < value.length; i++) {
            if (largestNumber < value[i]) {
                 largestNumber = value[i];
            }
        }

        return largestNumber;

        //Or
        // return Math.max(...value);

    }

    const result = findLargestNumber([10, 5, 8, 20, 3])
    console.log(result);
}
```

This code defines a function called `findLargestNumber`, which takes an array of numbers as input and returns the largest number in that array.

```tsx
// Sample Input:
findLargestNumber([10, 5, 8, 20, 3])

// Sample Output:
20
```

## Problem 3:

Create a TypeScript function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers from the original array.

## Solution: 
```tsx
{
    const filterEvenNumbers = (value: number[]): number[] =>{

        let evenNumber: number[] = [];

        for (let i = 0; i < value.length; i++) {
           if (value[i] % 2 === 0) {
            evenNumber.push(value[i])
           }
        }

        return evenNumber;

        //Or
        // return value.filter(num => num % 2 === 0 )

    }

    const result = filterEvenNumbers([1, 2, 3, 4, 5, 6])
    console.log(result);
}
```
This code defines a function called `filterEvenNumbers`, which takes an array of numbers as input and returns a new array containing only the even numbers from the input array.
It declares a function `filterEvenNumbers` that takes an array of numbers value as its parameter.
It initializes an empty array evenNumber to store the even numbers.
It iterates through the input array using a for loop, checking each element to see if it's even `(value[i] % 2 === 0)`. If an element is even, it is pushed into the evenNumber array.
After looping through all elements, it returns the evenNumber array.
The function is then invoked with an array `[1, 2, 3, 4, 5, 6]`, and the result (an array containing `[2, 4, 6]`) is logged to the console using `console.log`.

The commented-out line provides an alternative solution using the `filter` method to create a new array containing only the elements that pass the condition specified in the arrow function `(num % 2 === 0)`. However, it's not utilized in the code execution.

```tsx
// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
[2, 4, 6]
```

## Problem 4:

Design a TypeScript function `reverseArray` that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

## Solution: 
This code defines a generic function called `reverseArray`, which reverses the order of elements in an array while preserving the element types.

```tsx
{
    const reverseArray = <T>(array: T[]): T[] =>{

        const reverseArray: T[] = [];

        for (let i = array.length -1; i >= 0; i--) {
           reverseArray.push(array[i]);
        }

        return reverseArray;

        //or
        // return array.reverse()
    }

    const result1 = reverseArray(["apple", "banana", "cherry"])
    const result2 = reverseArray([10, 20, 30]);

    console.log(result1);
    console.log(result2);


}
```
It declares a generic function `reverseArray` that takes an array `array` of type T as its parameter and returns an array of the same type `T`.
It initializes an empty array `reverseArray` of type `T` to store the reversed elements.
It iterates through the input array using a for loop in reverse order `(for (let i = array.length - 1; i >= 0; i--))`. During each iteration, it pushes the elements of the input array in reverse order into the `reverseArray` array.
After looping through all elements, it returns the `reverseArray` array.
The function is then invoked twice with different arrays: `["apple", "banana", "cherry"]` and ` [10, 20, 30]`. The results are stored in `result1` and `result2` respectively.
Finally, it logs both results to the console using `console.log`.


The commented-out line provides an alternative solution using the reverse method to `reverse` the elements of the array in place. However, it's not utilized in the code execution.

```tsx
// Sample Input 1:
reverseArray(["apple", "banana", "cherry"])

// Sample Output 1:
["cherry", "banana", "apple"]

// Sample Input 2:
reverseArray([10, 20, 30])

// Sample Output 2: 
[30, 20, 10]
```

## Solution: 
```tsx
{
    const repeatString = (str: string, numOfTimes: number): string =>{

        let value = "";

        for (let i = 0; i < numOfTimes; i++) {
            value = value + str;
        }
        
        return value;
    }

    const result = repeatString("Hello!", 3)
    console.log(result);
}
```

## Problem 5:

You are given an object called “student”  representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called `calculateAverageGrade` that takes this student object as input and calculates the average grade.

> Hints: Use a `reduce()` method to sum the grades. average = total grades/ total length
> 

## Solution: 
This code defines an interface `Student` representing the structure of a `student` object with properties `name`, `age`, and `grades`. Then it creates an object `student1` of type `Student` with specific `values` for these properties.

```tsx
{
    interface Student {
      name: string;
      age: number;
      grades: number[];
    }

    const student1: Student = {
      name: "Bob",
      age: 17,
      grades: [75, 80, 82, 88, 90],
    };

    const calculateAverageGrade = (student: Student): number => {
      const totalGrade = student.grades.reduce((acc, grade) => acc + grade, 0);
      const averageGrade = totalGrade / student.grades.length;

      return averageGrade;
    };

    const averageGradeForBob = calculateAverageGrade(student1);

    console.log(averageGradeForBob);

}
```
It declares an interface `Student` defining the structure of a student object with `name` (string), `age` (number), and `grades` (number array) properties.
It initializes an object `student1` with properties `name`, `age`, and `grades` according to the `Student` interface.
It defines a function calculateAverageGrade that takes a `Student` object as input and returns the average grade (a number).
Inside `calculateAverageGrade`:
It uses the reduce method on the grades array to calculate the total sum of grades.
It divides the total grade by the number of grades to calculate the average.
It calls `calculateAverageGrade` with the `student1` object, storing the result in `averageGradeForBob`.
Finally, it logs the average grade for Bob (`averageGradeForBob`) to the console.

Overall, this code calculates and prints the `average` grade for the student Bob based on the grades provided in the `student1` object.

```tsx
// Sample Input:
const student1: Student = {     
			    name: "Bob",     
			    age: 17,     
			    grades: [75, 80, 82, 88, 90]
                       };


const averageGradeForBob = calculateAverageGrade(student1);

// Sample Output:
83
```

## Problem 6:

You are given an object representing a book with properties title (string), author (string), and `publishedYear` (number). Use type alias for declaring the object.
Write a TypeScript function called `isRecentBook` that takes this book object as input and determines if the book was published in the last 5 years.

> Hints: Use `getFullYear()` method to extract the year to check the given year with current year.
> 

## Solution: 

This code defines a type Book representing the structure of a book object with properties `title`, `author`, and `publishedYear`. Then it creates an object `book1` of type `Book` with specific values for these properties.

The function `isRecentBook` takes a `Book` object as input and determines whether the book was published within the last 5 years. It does so by comparing the current year with the `publishedYear` of the book and checking if the difference is less than or equal to 5.

```tsx
{
    type Book = {
      title: string;
      author: string;
      publishedYear: number;
    };

    const book1: Book = {
      title: "Sample Book",
      author: "John Doe",
      publishedYear: 2022,
    };

    const isRecentBook = (book: Book): boolean =>{

        const currentYear = new Date().getFullYear();

        return currentYear - book.publishedYear <= 5;
    }

    const result = isRecentBook(book1);
    console.log(result);
    
}

```
It defines a type `Book` specifying the structure of a book object with `title` (string), `author` (string), and `publishedYear` (number) properties.
It initializes an object book1 with properties `title`, `author`, and `publishedYear` according to the `Book` type.
It defines a function `isRecentBook` that takes a `Book` object as input and returns a boolean indicating whether the book is recent (published within the last 5 years).
Inside `isRecentBook`:
It retrieves the current year using `new Date().getFullYear()`.
It calculates the difference between the current year and the `publishedYear` of the book.
It returns true if the difference is less than or equal to 5, indicating that the book is recent, and false otherwise.
It calls `isRecentBook` with the book1 object, storing the result in result.
Finally, it logs the result `(true or false)` to the console.


Overall, this code determines whether the book represented by `book1` is recent based on its publication year and the current year.

```tsx
// Sample Input :
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
isRecentBook(book1);

// Sample Output: 
true
```

## Problem 7:

Create a TypeScript function `logString` that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

## Solution: 
This code defines a function `logString` that takes a parameter `params` of type `unknown` and logs the input if it's a string. If the input is not a string, it logs a message indicating that the input is not a string.
```tsx
{
    const logString = (params: unknown): void =>{
        
        if (typeof params === "string") {
            console.log(params);
        } else {
            console.log("Input is not a string.");
        }
    }

    logString("Hello, TypeScript!");
    logString(42);


}
```
It defines a function `logString` that takes a parameter `params` of type `unknown` and returns void.
Inside the function:
It checks if the type of `params` is "string" using the typeof operator.
If `params` is a string, it logs the value of `params` to the console using console.log.
If `params` is not a string, it logs the message "Input is not a string." to the console.
It calls `logString` twice:
First with the string `"Hello, TypeScript!"`.
Then with the number `42`.
The function is invoked twice with different types of parameters to demonstrate its behavior.

Overall, this code demonstrates how to handle different types of input parameters in TypeScript functions and provides feedback based on the type of input.

```tsx
// Sample Input 1: 
logString("Hello, TypeScript!");

// Sample Output 1:  
"Hello, TypeScript!"

// Sample Input 2: 
logString(42)

// Output: Error: 
Input is not a string.
```

## Problem 8:

Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

## Solution: 
This code defines a TypeScript class `Car` that represents a `car` object with properties `make`, `model`, and `year`. It also includes a constructor to initialize these properties when a `Car` object is created, and a method `displayInfo` to display information about the `car`.
```tsx
{
    class Car {
      make: string;
      model: string;
      year: number;

      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }

      displayInfo(): void {
        console.log(
          `Your car model is:  ${this.year} ${this.make} ${this.model}`
        );
      }
    }
    const myCar = new Car("Toyota", "Corolla", 2020);
    myCar.displayInfo();
}
```
It defines a class `Car` with properties `make` (string), `model` (string), and `year` (number).
It defines a constructor for the `Car` class that takes parameters `make`, `model`, and `year`, and assigns these values to the corresponding properties of the `Car` object using this.
It defines a method `displayInfo` within the class `Car` that logs a message to the console with information about the `car`, including its `year`, `make`, and `model`.
It creates an instance of the `Car` class named `myCar` with the `make` `"Toyota"`, `model` `"Corolla"`, and `year` `2020`.
It calls the `displayInfo` method on the my`Car` instance, which logs the information about the `car` to the console.
Overall, this code demonstrates the use of classes and methods in TypeScript to represent and manipulate `car` objects.

```tsx
// Sample Input:
new Car("Toyota", "Corolla", 2020);

// Sample Output: 
"Your car model is:  2020 Toyota Corolla"
```

</br>
</br>
</br>

## Blog Writing (anyone):

### Write an impactful blog posts covering the following topics:

<details><summary><b>1. The significance of union and intersection types in Typescript.</b></summary>

<summary>

### The significance of union and intersection types in Typescript.

### Overview:
<p>In TypeScript, union and crossing point sorts are effective highlights that upgrade the expressiveness and adaptability of the sort framework. Let's break down their centrality: </p>

<summary><b>1. Union Types: </b><p>Union sorts permit you to pronounce that a variable can hold values of diverse sorts. This can be especially valuable when a work or variable can acknowledge more than one sort of input. For Example: </p></summary>


```bash
function displayData(data: string | number) {
    console.log(data);
}

displayData("Hello"); 
displayData(123);     
displayData(true);
```
<p>Union sorts are profitable for dealing with scenarios where a esteem can change in sort, such as when managing with client input or APIs that return distinctive sorts of information beneath distinctive circumstances.</p>

<summary><b>2. Intersection Types: </b> <p>Intersection Types permit you to combine multiple types into a single sort. This can be valuable after you need an object to have the characteristics of numerous sorts at the same time. For Example: </p></summary>


```bash
interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

function createLogger(): Printable & Loggable {
    return {
        print() {
            console.log("Printing...");
        },
        log() {
            console.log("Logging...");
        }
    };
}

const logger = createLogger();
logger.print(); 
logger.log();   
```
<p>Crossing point sorts empower you to form more adaptable and reusable code by combining existing sorts in other ways. They are particularly valuable when working with mixins, where you need to combine behaviors from different sources into a single object.</p>

### summary:
<p>In outline, union and crossing point sorts are critical in TypeScript since they give designers with devices to show complex information structures and behaviors in a type-safe way, coming about in more vigorous and viable code.</p>
</summary>

</details>



<details><summary><b>2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.</b></summary>

<summary>

### How to handle asynchronous operations using async/await over callback/promise TypeScript.

### Overview:
<p>Taking care of offbeat operations in TypeScript can be done utilizing either callbacks, guarantees, or async/await sentence structure. async/await could be a more cutting edge and helpful way to bargain with nonconcurrent code, especially when working with Guarantees.</p>

<summary><b>1. Using async/await with Promises: </b><p> Here's how you can use async/await over callbacks and promises:</p></summary>


```bash
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
```
<p>In this example, fetchData is an asynchronous function that uses the await keyword to wait for the fetch call to resolve, and then waits for the json() method to resolve. If any errors occur during this process, they are caught using a try-catch block.</p>

<summary><b>2. Using async/await with Callbacks (promisifying): </b> <p>If you have a function that uses callbacks instead of Promises, you can promisify it to use async/await:</p></summary>


```bash
import { readFile } from 'fs/promises'; // Assuming Node.js environment

async function readFileAsync(filePath: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function readAndProcessFile(filePath: string) {
    try {
        const data = await readFileAsync(filePath);
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readAndProcessFile('example.txt');   
```
<p>In this example, readFileAsync is a promisified version of the Node.js readFile function, allowing you to use async/await with it.</p>

### summary:
<p>Using async/await provides cleaner and more readable code compared to nested callbacks or chaining promises. It allows you to write asynchronous code in a synchronous-looking manner, which can greatly improve code maintainability and readability.</p>
</summary>

</details>


<details><summary><b>3. Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.</b></summary>

<summary>

### Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Overview:
<p>Type watches are essential in TypeScript to supply more exact type data inside certain code squares. They offer assistance the TypeScript compiler get it the types of factors more precisely, permitting for more secure and more expressive code. </p>

### There are different types of type watches in TypeScript, each serving distinctive purposes:

<details><summary><b>1. Typeof Type Guards:</b></summary>

<summary><b>Use Case: </b><span>Checking the type of a primitive value, such as string, number, boolean, symbol, or undefined.</span></summary>


```bash
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}
```
</details>


<details><summary><b>2. instanceof Type Guards: </b></summary>

<summary><b>Use Case: </b><span>Checking whether an object is an instance of a particular class or constructor function.</span></summary>


```bash
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    load() {
        console.log("Loading...");
    }
}

function isCar(vehicle: any): vehicle is Car {
    return vehicle instanceof Car;
}

```
</details>

<details><summary><b>3. in Type Guards:</b></summary>

<summary><b>Use Case: </b><span>Checking if a property exists on an object.</span></summary>


```bash
interface Square {
    sideLength: number;
}

function isSquare(shape: any): shape is Square {
    return 'sideLength' in shape;
}

```
</details>

<details><summary><b>4. Custom Type Guards:</b></summary>
<summary><b>Use Case: </b><span>Creating custom functions that assert the type of a value based on some condition.</span></summary>


```bash
interface Cat {
    meow(): void;
}
interface Dog {
    bark(): void;
}

function isCatOrDog(animal: any): animal is Cat | Dog {
    return 'meow' in animal || 'bark' in animal;
}

```
</details>

<details><summary><b>5. Type Predicates:</b></summary>

<summary><b>Use Case: </b><span>A special syntax in TypeScript for defining and using custom type guards.</span></summary>


```bash
function isString(value: any): value is string {
    return typeof value === 'string';
}
```
</details>

### summary:
<p>Type guards are essential for writing safer and more reliable TypeScript code, especially when dealing with dynamic or unknown types. They help prevent runtime errors by narrowing down the possible types of values within certain code blocks, allowing for better type inference and type checking by the TypeScript compiler.</p>
</summary>

</details>

</br>
</br>
</br>

## Private Repogitory
[https://classroom.github.com/a/xLyOULhz](https://classroom.github.com/a/xLyOULhz)

### Instructions:
* Solve the problems in a separate file. Name the file starting with "problem-" followed by the problem number.
   (For example: problem-1.ts)
* Write the blogs in separate .md files. Name them starting with "blog-" followed by the blog number.
  (For example: blog-1.md / blog-2.md)
* The blog should be written in simple English, providing some code examples.
* Make sure the solution you provide is your own work and doesn't use any AI or machine-generated help. Stick to the rules given.
* Follow standard coding practices to make your code easy to read and understand.
* Don't copy code from other students. If you do, you'll get a score of 0.
* Share the link to your GitHub repository where you've uploaded your submission.

### Assignment Deadlines:

- 60 marks: May 8, 2024, 11:59 PM
- 50 marks: May 9, 2024, 11:59 PM
- 30 marks: After May 9, 11.59 PM
