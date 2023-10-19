<template>
  <div>
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

<script setup></script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
