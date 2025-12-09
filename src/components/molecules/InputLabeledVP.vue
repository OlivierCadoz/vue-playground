<script setup>
import InputVP from '../atoms/inputVP.vue'
import LabelVP from '../atoms/labelVP.vue'

const { name } = defineProps({
  name: {
    type: String,
    default: ''
  }
})

const model = defineModel()
</script>

<template>
  <LabelVP for="name"><slot /></LabelVP>
  <InputVP :name="name" v-model="model" />
</template>