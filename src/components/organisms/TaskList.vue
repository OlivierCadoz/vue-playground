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
    <ListItemVP v-for="item in tasks">
      {{item.task}}
    </ListItemVP>
  </ListVP>
</template>
