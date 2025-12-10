<script setup>
import ListVP from '../atoms/ListVP.vue';
import ListItemVP from '../atoms/ListItemVP.vue';

const { tasks } = defineProps({
  tasks: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <ListVP>
    <ListItemVP v-for="task in tasks">
      {{task.todo}}
    </ListItemVP>
  </ListVP>
</template>
