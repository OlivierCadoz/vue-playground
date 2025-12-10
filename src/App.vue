<script setup>
import TaskFormModal from './components/organisms/TaskFormModal.vue';
import ButtonVP from './components/atoms/ButtonVP.vue';
import { useTask } from './composables/useTask';
import TaskView from './components/organisms/TaskView.vue';

const { showTaskForm, addTask, toggleTaskForm } = useTask();

const submitForm = (task) => {
  addTask(task);
  toggleTaskForm();
};
</script>

<template>
  <main>
    <h1>TODO KANBAN</h1>

    <ButtonVP @click="toggleTaskForm">Ajouter +</ButtonVP>

    <TaskView />

    <TaskFormModal v-if="showTaskForm" @submitForm="submitForm" />
  </main>
</template>
