import jsdom from 'jsdom';

/* Create jsdom versions of the document and window objects that would normally be provided by the web
 browser. Then they need to be put on the global object so that they will be discovered by React
 when it tries to access document or window.
 * */

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

/* All the properties that the jsdom window object contains such as navigator, needs to be hoisted
   onto the Node.js global object. This is done so that properties provided by window can be used
   without the use of window. prefix which is what would happen in a browser environment.
* */

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);