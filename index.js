import { Form } from "./form.js";

window.addEventListener("DOMContentLoaded", init);

const API_URL = "https://test-project-5422b.firebaseio.com/users.json";

class Auth extends Form {
  constructor(fields) {
    super(fields);
  }

  send(model) {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        const users = Object.values(data);

        const r = users.find(user => user.email === model.email);
        if (!r) alert("Invalid email");

        localStorage.setItem("token", "asdasd789as798asd7hjkashkjhda");
        this.reset();
        window.location.reload();
      });
  }

  static checkGuest() {
    const token = localStorage.getItem("token");

    if (!token) {
      const form = ".auth";
      new Auth(form, {});
      document.querySelector(form).hidden = false;
      document.querySelector(".wc").hidden = true;
    }
  }
}

function init() {
  Auth.checkGuest();
}