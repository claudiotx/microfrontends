import { start, registerApplication } from 'single-spa'
// Routing, authentication and session management should happen here

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

console.log('hash prefix')

registerApplication('react', () => import('../react/index.js'), hashPrefix('/'))
registerApplication('angular', () => import('../angular/index.js'), hashPrefix('/'))

start()