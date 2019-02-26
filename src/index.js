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
    isError: false,
    colorList: ["red", "blue", "green"],
    emojiList: ["cowboy", "horse", "dolphin"],
    currentColor: "red",
    currentEmoji: "cowboy",
    kittenUrl: 'http://placekitten.com/300/300'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    },
    optionCount: function () {
      return this.options.length;
    },
    fileName: function () {
      return './images/' + this.currentColor + '_' + this.currentEmoji + '.png';
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
