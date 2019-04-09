# Micro Frontends
Only use for complex apps.
Use it only to make things easier, not complicated
Make standards across micro apps (same eslints, tslints)
## Evolution: Rails > PHP > Jquery > Ember > Backbone > Angular.js > Angular/React/Vue
Migrations are hard.
Micro frontends
https://ivanjov.com/

Micro services approach for the modern web.

Split the frontend app into small apps (no relation between them).

For Node.js apps they will communicate via an `event bus` (publish subscriber communication).

## Micro-frontend Principles
Ligh protocol between the frontend apps
One job per service
Independent
Easier to understand, develop and test
CI/CD on the frontend

Angular -> React -> Vue

We have micro-services everywhere.

## Sample App
App (root app)
  Header (angular app 1)
  Body (angular app 2)
  Footer (angular app 3)

angular1,2,3 need to be injected via root app.

Monolith -> Front vs Back -> Front vs Micro Back -> Front Components vs Micro Back -> Micro Front vs Micro Back

## Micro-frontends solve problems
- Add new frameworks to the old frontend (eg. Backbone)
- No more shared codebases and conflicts (multiple small apps)
- Independent Deployments, Independent Frameworks, Independent Teams
- Fast scalling

### How to split?
a) By functionality (navigation)
b) By page
c) By section

### How to implement?
a) External App bootstrapping (code is deployed on the different servers, code pulled from different repos/locations, window object is the event bus *Eev)
  Main App: `const fetchApp() = ({element})`

  ```js
  import Eev from 'eev';
    const e = new Eev();
    e.emit('event), {sample: 'xpto' }
    e.on('event', (data) => {
      console.log(data)
  })
  ```

b) iFrames
  Main App: window.addEventListener('message', (data) => {});
  Browser event bus (`postMessage(data, origin)`)

c) Single SPA Library
  Start with a base app, add Single SPA
  https://github.com/CanopyTax/single-spa
  https://www.npmjs.com/package/single-spa
  * Supports lazy code loading
  * Code lives in the same server
  * Everything is bundled and deployed at the same time
  * Event bus: window, event bus, redux (single shared state), etc..

```js
  import * as singleSpa from 'single-spa`
  const appName = 'app1';
  const loadingFunction = () => import('./app1/app1.js'); // import code for the child app
  const activityFunction = location => location.hash.startsWith('#app1');
  singleSpa.declareChildApplication(appName, loadingFunction, activityFunction);
  singleSpa.start();
```

d) Frint JS (framework) **recommended**
  https://frint.js.org/
  * Has a CLI
  * Routing
  * State Management
  * SSR
  * Reactive Programming (streams, subscribers, publishers, observables observe the streams and react to changes)
  * Works with Reactive Native

Who is using?
> Google (Gmail)
> Microsoft (Outlook)
> Facebook (like button is an app)




