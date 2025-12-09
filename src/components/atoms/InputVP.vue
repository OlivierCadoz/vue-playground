<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: ''
  }
})

const model = defineModel()
</script>

<template>
  
  <input v-model="model" :type="type" :name="name" />
</template>