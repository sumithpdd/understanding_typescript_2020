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
