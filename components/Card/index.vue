<template>
  <div class="card">
    <span>Component card</span><br />
    <Button />
  </div>
</template>

<script setup>
import Button from "@/components/Card/Button.vue";
</script>

<style scoped>
.card {
  width: 100%;
  height: 240px;
  background: rgba(211, 211, 211, 0.4);
  color: var(--color-text);
  border-radius: 0.5rem;
  margin: 1rem;
  text-align: center;
  padding-top: 100px;
  margin: 1rem;
}
</style>
