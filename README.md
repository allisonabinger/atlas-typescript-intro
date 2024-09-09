<h1 align="center">
<img src="https://typescript-eslint.io/assets/files/logo-62ab572de114d03f1ec685d989f92cd6.svg" align="left" width="100">
Introduction to TypeScript
<img src="https://typescript-eslint.io/assets/files/logo-62ab572de114d03f1ec685d989f92cd6.svg" align="right" width="100"></h1>

&nbsp;
&nbsp;

## Intro
TypeScript is a statically typed superset of Javascript that is compiled into plain JS. According to this [survey](https://stateofjs.com/en-US) by The State of JS, less than 10% of developers are writing 100% javascript, and most are using some amount of typescript. This project explores the basic concepts of TypeScript by building off of the [Music Player](https://github.com/allisonabinger/atlas-music-player) project that covered Tailwind CSS styling with React.

## Learning Objectives

1. **Understanding the benefits of a type safe language**

2. **Understanding the benefits of null safety in a language**

3. **Using TypeScript with React**


## Resources and Descriptions

[Why you need to use TypeScript - Jeremiah Swank](https://atlas-jswank.github.io/blog/typescript/)
Covers key concepts and benefits of using TypeScript

[How to use TypeScript - Jeremiah Swank](https://atlas-jswank.github.io/blog/how-to-use-typescript/)
Contains tutorials and examples of using TypeScript.

[TypeScript 5.0 Cheat Sheet - SitePen Engineering*](https://www.sitepen.com/blog/typescript-cheat-sheet)
An quick reference guide for TypeScript.

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
An quick reference guide for using TypeScript with React.

## Usage

- Run `npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `http://localhost:5173` in a browser


## TypeScript Concepts and Uses
A few examples and concepts to get started with TypesScript.

---

### Data Types Review
View more examples in Jeremiah Swank's article on [How to use TypeScript](https://atlas-jswank.github.io/blog/how-to-use-typescript/)

A **number** represents both integers and floating-point numbers.
```
    let age: number = 24;
    let price: number = 15.99;
```

A **string** represents a sequence of characts for text data.
```
    let name: string = "Allison";
    let greeting: string = `Howdy, ${name}!`;
```

A **boolean** represents a logical value of either true or false.
```
    let isRunning: boolean = true;
    let isCloudy: boolean = false;
```

A **null** represents the intentional absence of any object value. In this example, `selectedUser` is declared as a string that can also be null, meaning no user is selected.
```
    let selectedUser: string | null = null
```

A **undefined** represents an uninitialized variable or missing property. The 'userNickname' is defined as a string that could also be undefined, meaning it hasn't been assigned a value yet.
```
    let userNickname: string | undefined = undefined;
```

### Function Types
Typing functions enforces the types of input parameters and the return type. This way prevents common programming errors and enhances code readability and maintainability.

```
    function add(a: number, b: number): number {
        return a + b;
    }
```

You can also use it to define a function that does not have a return value:

```
    function logMessage(message: string): void {
        console.log(message);
    }
```

And you can defined mandatory and optional parameters:
```
    function greetUser(name: string, date?: Date): string {
        if (date) {
            return `Howdy, ${name}! Today is ${date.toDateString()}.`;
        } else {
            return `Howdy, ${name}!`;
        }
    }
```

Functions can also be defined and assigned as variables:
```
    let compute: (x: number, y: number) => number;
    computer = function(x, y) { return x + y };
```

### Object Types
Type aliases allow you to create a new name for a type, and are useful for simplifying context-type definitions or reusing the same type without repeating. Once defined, the alias can be used anywhere a type can be used.

```
    type User = {
        id: number,
        username: string;
        isActive: boolean;
    };

    let user: User = {
        id: 34556,
        username: "doe.john"
        isActive: true
    };
```

Optional properties in a type alias are defined similarly to optional parameters in functions:
```
    type Product = {
        id: number;
        name: string;
        price: number;
        description?: string
    }

    let product: Product = {
        id: 132,
        name: "Toaster Oven",
        price: 12.99
    }
```

Type Aliases can also have methods or nested objects, here is an example from Jeremiah:
```
    type Contact = {
        name: string;
        email: string;
        address: {
            street: string;
            city: string;
            zipCode: string;
        };
        sendMessage: (message: string) => void;
    };

    let contact: Contact = {
        name: "Alice Johnson",
        email: "alice@example.com",
        address: {
            street: "123 Maple St",
            city: "Springfield",
            zipCode: "12345"
        },
        sendMessage: function(message) {
            console.log(`Sending message to ${this.email}: ${message}`);
        }
    };

    contact.sendMessage("Hello, Alice!");
```

Type aliases can be used for functions as well:
```
    type Coordinates = {
        longitude: number;
        latitude: number;
    };

    function printCoordinates(location: Coordinates) {
        console.log(`The location is at ${location.x}, ${location.y}`);
    }

    function generateRandomLocation(): Coordinates {
    return {
        longitude: Math.random() * 100,
        longitude: Math.random() * 100,
    };
    }
```

### Unions and Intersections
Unions and intersections allow you to combine types in a more flexible way. It allows you to handle variables and functions that will operate with more than one type of data.


Basic union type:
```
    type StringOrNumber = string | number;
    let identifier: StringOrNumber;

    identifier = '123';
    identifier = 123;
```

Unions can occur within types as well. This example shows a union type, `Shape` that can be a `Circle` or `Square`.
```
    type Circle = {
        kind: "circle";
        radius: number;
    };
    type Square = {
        kind: "square";
        sideLength: number;
    };

    type Shape = Circle | Square;

    function getArea(shape: Shape): number {
        if (shape.kind === "circle") {
            return Math.PI * shape.radius ** 2;
        } else {
            return shape.sideLength ** 2;
        }
    }
```

An intersection allows you to include properties of more than type and combine them into one. `EmployeeUser` is an intersection type that includes the properties of `User` and `Employee`.
```
    type User = {
        name: string;
        age: number;
    };

    type Employee = {
        companyId: string;
    };

    type EmployeeUser = User & Employee;

    let eu: EmployeeUser = {
        name: "Alice",
        age: 28,
        companyId: "12345"
    };
```

### Null Safety
Null safety is a concept that ensures variable and object references don't unintentionall hold or return null values. This avoids runtime errors by making sure a variable cannot be null without explicit handling. All types are non-nullable by default, meaning you cannot assign null or undefined to a variable without an explicit assertion.

If you want a variable to be able to hold a null value, it must be explicity declared as part of its type using a union type:

```
let age: number | null = null;
age = 25;
```

Null vs. Undefined: `null` is an explicit value that you can assign to a variable to represent 'no value', whereas undefined is the default state of a variable that has not be assigned a value since it was declared. JavaScript initializes variables as undefined by default, whereas null needs to be explicity assigned.

```
let firstName: string = "John";
firstName = null; // firstName is not nullable

let lastName: string | null = "Smith";
lastName = null; // valid
```

```
function calculate(): number | undefined {
  if (Math.random() > 0.5) {
    return 42;
  }
  //  undefined is returned if random is less than 0.5
}
```

### Async and Promises
Async functions will implicity return a promise. Here is an example that will fetch data, and return a promise of the type `User`:

```
    type User = {
        id: number;
        name: string;
        email: string;
    };

    async function fetchData(): Promise<User> {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }
```

### TypeScript and React
TypeScript can be used to easily type check component props to avoid runtime errors:

```
    type ButtonProps = {
        onClick: () => void;
        label: string;
    };

    function Button({ onClick, label }: ButtonProps) => (
        <button onClick={onClick}>{label}</button>
    );
```

---

## Notes

### Dev Container

There is a dev container preconfigured with Node 20 on linux. If you would like to use the dev container:

- Install the [Dev Containers Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
- Open the command pallet (Cntrl / Command + Shift + P) in VS Code
- Select "Dev Container: Reopen in Container"

For more information on using dev containers see this [tutorial](https://atlas-jswank.github.io/blog/dev-containers/) or the [official documentation](https://containers.dev/)

### Important Files/Folders

- `index.html`: This is the html file that appears when the dev server starts up.
- `src`: All javascript/jsx code goes in this directory
- `src/assets`: Any static assets such as images that are loaded through the javascript files goes here.
- `src/app.jsx`: The is the main app component for the entire app.

### Important Commands

- `npm run dev`: Starts dev server with Hot Module Reloading on port 5173. Anytime a file changes, the changes will automatocally be reflected in the browser
- `npm run lint`: Run the lint checker with eslint to check for known linting issues
- `npm run format`: Run prettier to automatically reformat files

## Authors/Contributors to this project
This project was forked from the [Music Player](https://github.com/allisonabinger/atlas-music-player) project, which was a Atlas School Project. It was built from a very basic template of a Vite React App with empty and non-existent components.

This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
