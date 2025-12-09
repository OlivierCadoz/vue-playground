<script setup>
const { for } = defineProps({
  for: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label :for="for"><slot /></label>
</template>