new Vue({
  el: '#app',
  data: {
    name: 'Shaun',
    job: 'ninja',
    website: 'https://vuejs.org',
    websiteTag: '<a href="https://vuejs.org">vuejs.org</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name + '!'
    }
  }
});