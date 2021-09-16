# vue-users-app

A project built in Vue.js 2.0, created with @vue/cli v.4.5.13. The project fetches a list of users and mimics full CRUD functionality with the users.  The "BE" is just a fake API for testing--https://jsonplaceholder.typicode.com/. So, the GET(/READ) works as expected but the other functionality (CREATE, UPDATE, DELETE) doesn't truly work, but the code to do so is wired up.

The project does use Vuex for state-management and vue-router for, well, routing.

### To run the project in development-mode:

1. clone the repo
2. Run the following commands
```
npm install
npm run serve
```

I've added a couple of test files for two of the components--utilizing vue-test-utils w/ Jest. One of the test suites is failing at the time.

### To run the unit tests:
```
npm run test:unit
```


