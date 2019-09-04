<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h3>Home Route</h3>
    <p>User Email: {{ getEmail }}</p>
    <br />
    <button @click="fecthEmail">Update Email</button>
    <!-- <button @click="fetchData">Fetch All Data</button>
    <button @click="fetchSpecificData">Fetch Specific</button>
    <button @click="saveData">Save Data</button>-->
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
    },

    // updating email in store
    updateEmail(updatedEmail) {
      // well this will not work, we have to make mutations so called getter
      // this.$store.state.email = "updated@gmail.com";

      this.$store.commit("setEmail", updatedEmail);
    },

    fecthEmail() {
      this.$store.dispatch("setEmailFromServer");
    }
  },

  // should fetch data from store in computed propertie to behaview reactivily
  computed: {
    getEmail() {
      return this.$store.getters.getEmail;
    }
  }
};
</script>
