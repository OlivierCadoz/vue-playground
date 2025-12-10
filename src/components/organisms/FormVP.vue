<script setup>
import { ref, computed } from 'vue'

import InputLabeledVP from '../molecules/InputLabeledVP.vue';
import ButtonVP from '../atoms/ButtonVP.vue';

const emit = defineEmits(['submitForm'])

const modelValue = ref('')

const isEmpty = computed(() => !modelValue.value.trim())

const submitForm = () => {
  const value = modelValue.value.trim()
  if (!value) return
  emit('submitForm', value)
  modelValue.value = ''
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <InputLabeledVP v-model="modelValue" required>Add task :</InputLabeledVP>
    <ButtonVP type="submit" :disabled="isEmpty">Add</ButtonVP>
  </form>
</template>
