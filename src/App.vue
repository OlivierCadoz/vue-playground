<script setup>
import { reactive } from 'vue';
import FormVP from './components/organisms/FormVP.vue';
import TaskList from './components/organisms/TaskList.vue';

const items = reactive([]);

const addTask = (event) => {
  items.push({ task: event });
}
</script>

<template>
  <main>
    <FormVP @submitForm="addTask" />
    <TaskList :tasks="items" />
  </main>
</template>
