<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/rank">Rank</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
  div {
    padding: 1rem;
  }

  a {
    font-size: 1.2rem;
    margin-right: 30px;
    text-decoration: none;
    color: rgb(198, 77, 77)
  }

  .router-link-exact-active {
    text-decoration: underline;
  }
</style>
