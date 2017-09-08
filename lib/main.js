const DOMNodeCollection = require('./dom_node_collection');

window.$l = function (input) {
  if (typeof input === "string") {
    return new DOMNodeCollection(
      Array.from(document.querySelectorAll(input))
    );
  } else if(input instanceof HTMLElement) {
    let elements = [];
    elements.push(input);
    return new DOMNodeCollection(elements);
  }
};
