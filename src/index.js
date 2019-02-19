import "./style.css";
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    isButtonDisabled: true,
    options: [ "Doge", "Doggo", "Woofer", "Pup" ],
    firstName: "Steve",
    lastName: "Richey",
    pageName: "home"
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
});

window.app = app;
