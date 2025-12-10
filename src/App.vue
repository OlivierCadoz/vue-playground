<script setup>
import TaskList from './components/organisms/TaskList.vue';
import TaskFormModal from './components/organisms/TaskFormModal.vue';
import ButtonVP from './components/atoms/ButtonVP.vue';
import { useTask } from './composables/useTask';

const { tasks, showTaskForm, addTask, toggleTaskForm } = useTask();

const submitForm = (task) => {
  addTask(task);
  toggleTaskForm();
};
</script>

<template>
  <main>
    <ButtonVP @click="toggleTaskForm">Ajouter +</ButtonVP>
    <TaskList :tasks="tasks" />

    <TaskFormModal v-if="showTaskForm" @submitForm="submitForm" />
  </main>
</template>
