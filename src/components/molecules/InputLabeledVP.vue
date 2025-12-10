<script setup>
import InputVP from '../atoms/inputVP.vue'
import LabelVP from '../atoms/labelVP.vue'

const { name } = defineProps({
  name: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()
</script>

<template>
  <LabelVP :name="name"><slot /></LabelVP>
  <InputVP v-model="model" :name="name" :required="required" />
</template>