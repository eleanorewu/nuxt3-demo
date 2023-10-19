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
  width: 300px;
  height: 240px;
  background: skyblue;
  color: black;
  border-radius: 0.5rem;
  text-align: center;
  padding-top: 100px;
}
</style>
