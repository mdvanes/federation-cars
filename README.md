Example for module federation.

Looks like a simple dashboard to show a list of EV cars and clicking on them will show different details.

- As long as [Nx](https://nx.dev) does not support Webpack 5, this uses Lerna
- App "fc-shell": React as the "host" or "app shell"
- App "fc-list": React app for the list of cars, using [CRA](https://create-react-app.dev/)
- App "fc-details": Angular app for the EV details (like on [ev-database](https://ev-database.nl))
- Web Components (lit/Stencil) as UI library for both Angular and React (UI Library, Card)
- Docker container with reverse proxy for testing/deploying all apps together

# Developing

```sh
nvm use
yarn install
yarn start
```

Open [http://localhost:3011](http://localhost:3011).

# Building

Run with

```sh
yarn build
yarn serve
```

Open [http://localhost:3011](http://localhost:3011).

But this requires you to open ports 3011 up to 3014. It might also lead to CORS errors.

... TODO ...


## Remove this

The demo is annotated so navigate through the demos and apps available.

Included apps:

- App #1 (ReactJS - acts as the app shell plus is an aggregation with other remotes): [http://localhost:3001](http://localhost:3001)
- App #2 (ReactJS - plus is an aggregation with other remotes): [http://localhost:3002](http://localhost:3002)
- App #3 (ReactJS): [http://localhost:3003](http://localhost:3003)
- App #4 (SvelteJS): [http://localhost:3004](http://localhost:3004)
- App #5 (LitElement): [http://localhost:3005](http://localhost:3005)
  <img src="https://ssl.google-analytics.com/collect?v=1&t=event&ec=email&ea=open&t=event&tid=UA-120967034-1&z=1589682154&cid=ae045149-9d17-0367-bbb0-11c41d92b411&dt=ModuleFederationExamples&dp=/email/ComprehensiveDemo">

Heavily borrows from https://github.com/module-federation/module-federation-examples/blob/master/comprehensive-demo

# TODO

- CORS?
- Test CRA: Very difficult. Ejecting works, but after that Webpack 5 is needed and a lot of plugings conflict with the ejected webpack.config.
- Test NGINX reverse proxy
- Test deploy as a single docker container
- Test Angular
- Test Lit/Stencil
- App for chart with monthly cost over time
- Build script
