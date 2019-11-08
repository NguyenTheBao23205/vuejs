<template>
  <div class="dem">
    <p>Số học sinh là: {{ counter }}</p>
    <button v-on:click="counter += 1">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>