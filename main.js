new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'ninja',
    website: 'https://vuejs.org',
    websiteTag: '<a href="https://vuejs.org">vuejs.org</a>',
    age: 25,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: true,
    nearby: false,
    error: false,
    success: false,
    name: 'Shaun',
    cities: ['London', 'Paris', 'Berlin'],
    ninjas: [
      {name: 'Ryu', age: 25},
      {name: 'Yoshi', age: 26},
      {name: 'Crystal', age: 27}
    ]
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
  },
  computed: {
    addToA: function() {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('addToB');
      return this.b + this.age;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});

Vue.component('greeting', {
  template: '<p>I am a {{ name }}. <button v-on:click="changeName()">Change name</button></p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Shaun'
    }
  }
});

var one = new Vue({
  el: '#app-one',
  data: {
    title: 'Vue App One'
  },
  methods: {},
  computed: {
    greet: function() {
      return 'Hello from App One';
    }
  }
});

var two = new Vue({
  el: '#app-two',
  data: {
    title: 'Vue App Two',
    output: 'Your fav city'
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed";
    },
    readRefs: function() {
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
    greet: function() {
      return 'Hello from App Two';
    }
  }
});

two.title = 'Changed from outside';