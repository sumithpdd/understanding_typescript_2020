# Starting files

To compile run
``` tsc app.ts ```

Run npm init so that we can add some required node packages
``` npm install --save-dev lite-server ```

and then add "start": "lite-server" to package.json
to start and open the browser run =>
` npm start -o `

## Important: Type Casing

In TypeScript, you work with types like string or number all the times.

> Important: It is string and number (etc.), NOT String, Number etc.
> The core primitive types in TypeScript are all lowercase!

## Type Aliases & Object Types

Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

```type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

```function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

Official TypeScript Docs: <https://www.typescriptlang.org/docs/handbook/basic-types.html>

## Watch more

``` tsc app.ts -w ```

## To compile whole project

``` tsc --init ```

## These links might also be interesting

tsconfig Docs: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

Compiler Config Docs: <https://www.typescriptlang.org/docs/handbook/compiler-options.html>

VS Code TS Debugging: <https://code.visualstudio.com/docs/typescript/typescript-debugging>
