# React App with module federation

This example demos a basic host application loading remote component. It's a forked version of the module federation example in https://github.com/module-federation/module-federation-examples/tree/master/cra-react-app-rewired, but added integration with the .NET core API application to get cards data in Card component.

- `host` is the host application (cra-based).
- `remote` standalone application (cra-based) which exposes `Card` component.
- In each of the applications the `config-overides.js` file is where the webpack file is extended to include module federation

# Running Demo
Run `yarn install`.
Run `yarn start`. This will build and serve both `host` and `remote` on ports 3000 and 3001 respectively.

- [localhost:3004](http://localhost:3004/) (HOST)
- [localhost:3005](http://localhost:3005) (STANDALONE REMOTE)
