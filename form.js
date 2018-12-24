export class Form {
    constructor(form, params) {
      this.form = document.querySelector(form);
      this.elements = this.form.elements;
  
      this.fieldsList = ["SELECT", "INPUT", "TEXTAREA"];
  
      this.init();
    }
  
    submit(ev) {
      ev.preventDefault();
      this.send(this.model);
    }
  
    get model() {
      const fields = [...this.elements];
      return fields
        .filter(field => this.fieldsList.includes(field.tagName))
        .reduce(
          (acc, current) => ({
            ...acc,
            [current.dataset.control]: current.value,
          }),
          {},
        );
    }
  
    reset() {
      this.form.reset();
    }
  
    events() {
      this.form.addEventListener("submit", this.submit.bind(this));
    }
  
    init() {
      this.events();
    }
  }