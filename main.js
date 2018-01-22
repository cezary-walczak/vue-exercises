new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'ninja'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name + '!'
    }
  }
});