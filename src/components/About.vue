<template>
  <div class="app">
    <h3>About Our Website</h3>
    <button @click="goHome" class="btn btn-primary">Go Home</button>
  </div>
</template>
<script>
export default {
  // navigation through code
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>