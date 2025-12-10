<script setup>
import TaskFormModal from './components/organisms/TaskFormModal.vue';
import ButtonVP from './components/atoms/ButtonVP.vue';
import { useTask } from './composables/useTask';
import { useTaskForm } from './composables/useTaskForm';
import TaskView from './components/organisms/TaskView.vue';

const { addTask } = useTask();
const { showTaskForm, toggleTaskForm } = useTaskForm();

const submitForm = (task) => {
  addTask(task);
  toggleTaskForm();
};
</script>

<template>
  <main>
    <h1>TO DO KANBAN</h1>

    <ButtonVP @click.stop="toggleTaskForm">Ajouter +</ButtonVP>

    <TaskView />

    <TaskFormModal v-if="showTaskForm" @submitForm="submitForm" />
  </main>
</template>

<style lang="scss">
.vp-button {
  align-self: flex-start;
}
</style>
