<script setup>
const { name } = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label :for="name"><slot /></label>
</template>