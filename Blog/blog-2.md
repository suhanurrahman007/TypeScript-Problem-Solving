## How to handle asynchronous operations using async/await over callback/promise TypeScript.

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