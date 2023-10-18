<template>
  <div>
    <h1>首頁: {{ count }}</h1>
    <button @click="addCount">add</button>
    <Card />
  </div>
</template>

<script setup>
const { count, addCount } = useAddCount();
</script>

<style scoped></style>
