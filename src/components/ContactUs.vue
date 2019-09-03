<template>
  <div class="app">
    <h3>Contact Us here</h3>
    <p>Query Parameter: {{ $route.query.q }}</p>
  </div>
</template>
<script>
export default {
  // guard the component from un authorized access
  beforeRouteEnter(to, from, next) {
    // make sure we can not access data fields here because component has not created yet.
    let authenticated = true;
    if (authenticated) {
      next();
    } else {
      next(false);
    }
  },
  // same that we can use beforRouteLeave to perform some action before user leave. Like confirm beform leave
  beforeRouteLeave(to, from, next) {
    if (false) {
      next();
    } else {
      if (confirm("Are you sure to leave?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>