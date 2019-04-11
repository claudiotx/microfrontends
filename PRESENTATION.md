# Presentation Slides
1. Why Micro-Frontends?
If you have a small project, forget it.
If you have a medium project, forget it.
If you have a large project (+50 components), maybe you should see.

1.1 A big project you don't have too many options:
a) Monorepo with subfolders
b) Multiple repos for multiple teams and a glueing script
c) One huge app with routing/session/auth that everyone works on

2. Micro-frontends (not) revolution
a) Split your team in 4 teams
b) Each team creates an app isolatedly
c) Create a Root App that will load together using the same router, same domain and without refreshing the page. This app should be responsible for session/auth.
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

5. Child Apps
All of them are kept in their subfolders with a particular new file: `index.js`
This file is the one that `single-spa` uses to lazy load the apps.
It tells to `single-spa` meta framework how to bootstrap, mount and unmount the apps.
Basically it's just a spy on the framework's lifecycle hooks.
This is the magic.
Most frameworks are straight forward.
Because Angular is a bit more advanced and full-blown framework, we have to change some files:
a) 
