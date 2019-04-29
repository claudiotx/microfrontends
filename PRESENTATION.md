# Presentation Slides
Micro-frontends are the future of Frontend architectures.
Ideal Scenario:
a) Serverless API
b) Server API
   API Gateway
c) Android 1
d) Web App
  e) Microfrontend 1 (Admin, Dynamic Header)
  f) Microfrontend 2 (Main View, Dynamic Header, Footer)
  g) Microfrontend 3 (Editor, Help, Dynamic Header, Charts)
  h) Microfrontend 4 (Help, Charts, Admin)

0. Constraints that lead to MicroFrontends
a) Independent teams enough to not be stopped by external dependencies
b) Codebase evolves in a huge snow ball becoming unmanageable with time (requirements and stakeholders input)
c) If one of the features of the app is too complex, check similar projects on GitHub contributed by the open source projects and split it as an external project, it may accelerate the time to market of specific feature

1. Why Micro-Frontends?
If you have a small project, forget it.
If you have a medium project, forget it.
If you have a large project (+50 components), maybe you should see.

1.1 A big project you don't have too many options:
a) Monorepo with subfolders
b) Multiple repos for multiple teams and a glueing script
c) One huge app with routing/session/auth that everyone works on

2. Micro-frontends Rules
a) Do not share logic between apps, it's independent implementation.
b) Split your team in subteams, each team has responsability for one frontend
c) Split the frontends by business domain (eg. SalesApp, CustomerApp, FactoryApp, SalesGridApp, SalesExplorerApp)
d) Understand the impact of this approach in your company and developers
e) Do not create micro-frontends if the apps are not complex enough

3. How?
d) Create a Root App that will load together using the same router, same domain and without refreshing the page. This app should be responsible for session/auth.
d) The apps are lazy loaded on the fly and can be loaded on the same or different pages (via the magic of `single-spa`)
e) Initial load time is actually quite fast
f) Hot reload entire chunks of your application (not files)

3. Webpack (to load our child apps' files)
a) Babel for ESNext Transpiling
b) TS-Loader for TS Transpiling

4. RootApp (javascript metaframework)
a) Simple file for the routing and lazy loading of child apps
b) We're keeping the 4 apps on the same page, but we can have different scenarios
Supports the top 10 frameworks:
React
AngularJS
Angular
react-router
angular-ui-router
Webpack
Babel
Vue
Svelte
Ember
Inferno
Preact
CycleJS

--
DEMO
--

5. Child Apps
All of them are kept in their subfolders with a particular new file: `index.js`
This file is the one that `single-spa` uses to lazy load the apps.
It tells to `single-spa` meta framework how to bootstrap, mount and unmount the apps.
Basically it's just a spy on the framework's lifecycle hooks.
This is the magic.
Most frameworks are straight forward.
Because Angular is a bit more advanced and full-blown framework, we have to change some bits:
a) No need for main.ts, we will be importing only `src/app/app.module.ts`; (for Adding the browser module, registering components and setting bootstrap component)

b) Add an `index.js` for the `single-spa` to load.

b) On the component/service that is reading and write to the event bus, angular won't update the DOM automatically, so on the callback of the bus reader we update a state object and invoke change detector (which has been already injected).
Please add event bus listeners on this lifecycle method: `ngAfterContentInit` which is called when component is rendered for the first time.

c) Limitation: we are using `template: require('my-template.html')` because we're using the babel html rule, external scss loading is not working yet.

6. Lets a new child app!
`cd src`
`ng new angular-footer`
`add the spa ./index.js for attachment purposes`
Ok, now go to `root-app.js` and register the app for one of the routes.
`npm start`
Oops: 'ERROR in ./src/angular-footer/src/app/app.module.ts' Can't resolve.
Head down to the `app.module.ts` and add a `.ts` extension on the file being loaded.
Let's try again.
Oops: E2E Tests are now failing
Ok, let's update the template importing and external scss loading on the component
Oops: Better, but another runtime error from single-spa2.
Will take a bit of time to load, as we are running 1 common bundle (Angular4 + React15, and 2 separated bundles Angular7)
Ok, `app.module.ts` needs to export a default class
Oops: Another error: The selector "app-root" did not match any elements
Lets update our bootstrap component `app.component.ts` to point to the correct DOM element.
And Voila!hotm