<script setup>
import { ref, defineEmits } from 'vue'

import InputLabeledVP from '../molecules/InputLabeledVP.vue';
import ButtonVP from '../atoms/ButtonVP.vue';

const emits = defineEmits(['submitForm'])

const modelValue = ref('')

const submitForm = () => {
  emits('submitForm', modelValue.value)
  modelValue.value = ""
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <InputLabeledVP v-model="modelValue">Add task :</InputLabeledVP>
    <ButtonVP type="submit">Add</ButtonVP>
  </form>
</template>
