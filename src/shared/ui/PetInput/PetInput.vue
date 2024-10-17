<script lang="ts">

export default {
  name: "pet-input",
  props: {
    modelValue: [String, Number]
  },
}
</script>

<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style scoped></style>