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
  background: rgb(211, 211, 211);
  color: black;
  border-radius: 0.5rem;
  margin: 1rem;
  text-align: center;
  padding-top: 100px;
  margin: 1rem;
}
</style>
