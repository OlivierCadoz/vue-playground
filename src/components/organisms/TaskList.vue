<script setup>
import ListVP from '../atoms/ListVP.vue';
import ListItemVP from '../atoms/ListItemVP.vue';

const { tasks } = defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ListVP class="task-list">
    <ListItemVP
      v-for="task in tasks"
      :key="task.id"
      class="task-item"
      draggable="true"
    >
      {{ task.todo }}
    </ListItemVP>
  </ListVP>
</template>
