<template>
  <div id="app">
    <Rating :grade="2"/>
  </div>
</template>

<script>
import Rating from '@/components/Rating'

export default {
  name: 'app',
  components: {
    Rating
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
</style>
