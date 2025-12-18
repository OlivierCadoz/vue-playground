<script setup>
import { useDragAndDrop } from '../../composables/useDragAndDrop';

import { useTask } from '../../composables/useTask';

import TaskList from './TaskList.vue';

const { tasks, todos, doings, dones, updateTask } = useTask();
useDragAndDrop(tasks, updateTask);

</script>

<template>
  <ul class="task-view">
    <li data-id="todo" class="task-column">
      <h2>To do</h2>
      <TaskList :tasks="todos" />
    </li>
    <li data-id="doing" class="task-column">
      <h2>In progress</h2>
      <TaskList :tasks="doings" />
    </li>
    <li data-id="done" class="task-column">
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

  .task-column {
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
