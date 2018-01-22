new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'ninja',
    website: 'https://vuejs.org',
    websiteTag: '<a href="https://vuejs.org">vuejs.org</a>',
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name + '!'
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    preventLink: function() {
      var a = document.querySelector('#canvas').textContent = 'Prevented!';
    },
    logName: function() {
      console.log('You entered your name');
    },
    logAge: function() {
      console.log('You entered your age');
    }
  }
});