<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
    <ul>
      <li><NuxtLink to="/about" title="關於我們">關於我們</NuxtLink></li>
      <li>
        <NuxtLink
          to="https://store.line.me/stickershop/product/24123123/zh-Hant"
          title="另開新視窗 前往line貼圖"
          target="_blank"
          external
          >line貼圖</NuxtLink
        >
      </li>
    </ul>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<style scoped>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
h1 {
  color: var(--color-primary);
}
</style>
