<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="fetchData">Fetch All Data</button>
    <button @click="fetchSpecificData">Fetch Specific</button>
    <button @click="saveData">Save Data</button>
  </div>
</template>

<script>
// axios installed globally
import axs from "axios";
export default {
  name: "app",
  data() {
    return {
      msg: ""
    };
  },

  methods: {
    fetchSpecificData() {
      axs.get(process.env.VUE_APP_USER_BASE_URL + "/2").then(res => {
        console.log(res.data.data.email);
      });
    },

    fetchData() {
      axs.get(process.env.VUE_APP_USER_BASE_URL).then(res => {
        var res = res.data.data;
        res.forEach(element => {
          console.log(element.email + " " + element.first_name);
        });
      });
    },

    saveData() {
      axs
        .post(process.env.VUE_APP_USER_BASE_URL, {
          email: "abrar@gmail.com",
          first_name: "Abrar",
          last_name: "Ahmad"
        })
        .then(res => {
          console.log(res.data);
        });
    }
  },

  mounted() {
    console.log(process.env.VUE_APP_USER_BASE_URL);
  }
};
</script>
