const jsdom = require('jsdom');
const fs = require('fs');

const { JSDOM } = jsdom;
const virtualConsole = new jsdom.VirtualConsole();

const html = fs.readFileSync(__dirname+'/test.html', 'utf-8');
const dom = new JSDOM(html);

const document = dom.window.document;
const p1 = new Promise(resolve => {
  document.getElementById('bar').addEventListener('submit', (e) => {
    e.preventDefault();
    resolve();
  });
}).then(() => console.log('regular form submit event received'))

const p2 =  new Promise(resolve => {
  document.getElementById('foo').addEventListener('submit', (e) => {
    e.preventDefault();
    resolve();
  });
}).then(() => console.log('form attribute submit event received'))

document.getElementById('bar-button').click();
document.getElementById('foo-button').click();

Promise.all([p1, p2]).then(() => {
  console.log('both promises resolved');
})

setTimeout(() => {
  console.log('done waiting');
}, 1000)
