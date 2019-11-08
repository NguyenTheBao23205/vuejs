<template>
  <div class="hello">
    <p>{{ msg1 }}</p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg1: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
