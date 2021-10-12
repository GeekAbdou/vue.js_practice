const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourname:'abdo',
    };
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    setName(){
        this.yourname = Event.target.value;
    },
},

});

app.mount("#app");
