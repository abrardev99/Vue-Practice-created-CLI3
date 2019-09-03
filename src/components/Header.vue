<template>
  <div class="app">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link" ative-class="active" exact to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" exact to="/about">About One</router-link>
      </li>
      <li class="nav-item">
        <!-- if we have named route we pass set object here to use it -->
        <!-- passing query parameter -->
        <router-link
          class="nav-link"
          active-class="active"
          exact
          :to="{ name: 'cont', query: { q: 'query' } }"
        >Contact Us</router-link>
      </li>
    </ul>
  </div>
</template>