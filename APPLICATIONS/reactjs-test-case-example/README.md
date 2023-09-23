- jestjs
  https://jestjs.io/docs/mock-functions

- npx create-react-app reactjs-test-case-example
  -cd reactjs-test-case-example

- npm start
  Starts the development server.

- npm run build
  Bundles the app into static files for production.

- npm test
  Starts the test runner.

- added in package.json

```
"jest": {
    "coverageThreshold": {
        "global": {
            "lines": 100 // what percentage we canted to cover threshhold
        }
    },
    "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.js",  // to exclude the file for coverage
    "!src/reportWebVitals.js" // to exclude the file for coverage
  ]
},
```
