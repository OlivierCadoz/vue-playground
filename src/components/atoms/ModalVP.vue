<script setup>
</script>

<template>
  <div class="vp-modal">
    <slot></slot>
  </div>
</template>

<style>
.vp-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 1000px;
  margin: 24px;
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 6px;
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%);
}
</style>