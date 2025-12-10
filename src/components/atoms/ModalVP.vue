<script setup>
import { useTaskForm } from '../../composables/useTaskForm';

const { toggleTaskForm } = useTaskForm();
</script>

<template>
  <div class="vp-modal">
    <div class="vp-modal_container" v-click-outside="toggleTaskForm">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.vp-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.vp-modal_container {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 1000px;
  margin: 24px;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
  background-color: #817f7f;
}
</style>
