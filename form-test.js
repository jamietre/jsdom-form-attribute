const jsdom = require('jsdom');
const fs = require('fs');

const { JSDOM } = jsdom;
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.sendTo(console, { omitJSDOMErrors: true });

const html = fs.readFileSync(__dirname+'/test.html', 'utf-8');
const dom = new JSDOM(html, { virtualConsole });

const document = dom.window.document;

describe('JSDOM works with "form" attribute', () => {
  it('submit event works with a normal form', (done) => {
    document.getElementById('bar').addEventListener('submit', () => {
      done();
    });
    document.getElementById('bar-button').click();
  });
  it('submit works with "form" attribute', (done) => {
    document.getElementById('foo').addEventListener('submit', () => {
      done();
    });
    document.getElementById('foo-button').click();
  });
});
