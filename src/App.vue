<script setup>
import FormVP from './components/organisms/FormVP.vue';
import TaskList from './components/organisms/TaskList.vue';
import ButtonVP from './components/atoms/ButtonVP.vue';
import { useTask } from './composables/useTask';

const { tasks, showTaskForm, addTask, toggleTaskForm } = useTask();

</script>

<template>
  <main>
    <ButtonVP @click="toggleTaskForm">Ajouter +</ButtonVP>
    <FormVP v-if="showTaskForm" @submitForm="addTask" />
    <TaskList :tasks="tasks" />
  </main>
</template>
