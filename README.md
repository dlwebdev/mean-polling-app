# mean-angular2-polling-app
MEAN polling app with Angular2 

The entire app in written in ES6 (ES2015 or Harmony or ESNext). It uses the Babel transpiler, and packages the frontend components using Webpack. This allows us to use 'requires' in frontend code.

## File Structure explained
mean
* src // ES6 backend code
    * controllers // Controllers directory - handle the routes for our REST API
    * models // Mongoose models directory - Mongoose will use this model to create a collection in MongoDB
* views // Jade views
    * templates // Angular templates
* webpack // frontend code
    * js // frontend JS

## TO RUN
npm install     // Installs project dependencies with npm into node_modules folder
npm run babel   // Transpiles all of our ES6 code to ES5 and outputs to the 'lib' directory.
node lib/app    // Starts little HTTP server

Can also run 'npm run babel:w' to run the same babel build script and have it continually watch for changes to your code. It triggers a transpilation when it detects a change.

## View
http://localhost:3000 
