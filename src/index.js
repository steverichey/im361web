import "./style.css";
import Vue from 'vue/dist/vue.js';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    isButtonDisabled: true,
    options: [
      { name: "Doge", type: "cute" },
      { name: "Doggo", type: "large" },
      { name: "Woofer", type: "huge" },
      { name: "Pup", type: "tiny" }
    ],
    firstName: "Steve",
    lastName: "Richey",
    pageName: "home",
    isError: false
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    optionCount: function () {
      return this.options.length;
    }
  },
  methods: {
    removeOption: function () {
      this.options.pop();
    },
    addOption: function(name) {
      this.options.push(name);
    },
    reverseOptions: function() {
      this.options.reverse();
    }
  }
});

window.app = app;
