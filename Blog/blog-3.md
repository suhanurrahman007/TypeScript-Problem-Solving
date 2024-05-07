## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

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