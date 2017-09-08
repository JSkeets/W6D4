class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html (string) {
    if (string !== undefined){
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }

  empty () {
    this.HTMLElements.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append (input) {
    this.HTMLElements.forEach( (el) => {
      el.innerHTML += input;
    });
  }

  attr (attrName, value) {
    if (value === undefined) {
    const arr = [];
      return this.HTMLElements[0].getAttribute(attrName);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attrName,value);
      });
    }
  }

  addClass(className) {
    const currClass = this.attr("class");
    this.attr("class",`${currClass} ${className}`);
  }

  removeClass(className) {
    const currClass = this.attr("class");
    let sepClasses = currClass.split(" ");
    let ans = sepClasses.filter((el) => el !== className );
    this.attr("class", ans.join(" "));
  }

  children() {
      return new DOMNodeCollection(this.HTMLElements[0].children);
  }

  parent(){
    return new DOMNodeCollection(this.HTMLElements[0].parentNode);
  }

  find(selector) {
    return new DOMNodeCollection(this.HTMLElements[0].querySelectorAll(selector));
  }

  remove() {
    this.parent().HTMLElements.removeChild(this.HTMLElements[0]);
  }

  on(event, callback){
    this.HTMLElements.forEach((el) => {

    });


  }
}


module.exports = DOMNodeCollection;
