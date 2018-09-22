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
