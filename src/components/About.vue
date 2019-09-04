<template>
  <div class="app">
    <h3>About Our Website</h3>
    <p>Passed ID: {{ id }}</p>
    <p>User Email: {{ getEmail }}</p>
    <button @click="goHome" class="btn btn-primary">Go Home</button>
    <hr />
    <li class="nav-item">
      <router-link class="nav-link" active-class="active" exact to="about/detail">About Details</router-link>
    </li>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
  
    };
  },
  // vue does not re-create component when we load same component with different id, like user/10, user/11.
  // it will get the 10 while first route and will not watch the id if we pass an other id next time
  // so here is the sulotion
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  // navigation through code
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },

  computed: {
    getEmail() {
      return this.$store.getters.getEmail;
    }
  }
};
</script>