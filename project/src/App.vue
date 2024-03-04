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
    margin-left: 10px;
  }

  a {
    margin-right: 20px;
  }
</style>
