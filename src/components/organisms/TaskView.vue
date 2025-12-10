<script setup>
import { useTask } from '../../composables/useTask';

import TaskList from './TaskList.vue';

const { todos, doings, dones } = useTask();
</script>

<template>
  <ul class="task-view">
    <li class="task-view-item">
      <h2>To do</h2>
      <TaskList :tasks="todos" />
    </li>
    <li class="task-view-item">
      <h2>In progress</h2>
      <TaskList :tasks="doings" />
    </li>
    <li class="task-view-item">
      <h2>Done</h2>
      <TaskList :tasks="dones" />
    </li>
  </ul>
</template>

<style lang="scss">
.task-view {
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  .task-view-item {
    width: 30%;
    background-color: #817f7f;
    padding: 16px;
    border-radius: 6px;

    h2 {
      text-align: center;
    }
  }
}
</style>
