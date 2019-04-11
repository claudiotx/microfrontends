import { start, registerApplication } from 'single-spa'
// Routing, authentication and session management should happen here

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

// /#/
registerApplication('angularHeader', () => import('../angular-header/index.js'), hashPrefix('/'))
registerApplication('react', () => import('../react/index.js'), hashPrefix('/'))
registerApplication('angular', () => import('../angular/index.js'), hashPrefix('/'))
registerApplication('angularFooter', () => import('../angular-footer/index.js'), hashPrefix('/'))

// /#demo1/
registerApplication('angularHeaderDemo1', () => import('../angular-header/index.js'), hashPrefix('demo1'))
registerApplication('angularDemo1', () => import('../angular/index.js'), hashPrefix('demo1'))



console.log('Micro frontends root meta app');
start();

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}