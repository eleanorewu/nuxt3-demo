<template>
  <div>
    <button>
      <font-awesome-icon icon="fa-solid fa-circle-half-stroke" />主題模式
      {{ $colorMode.value }}
    </button>
    <div class="msg-box">
      <img
        class="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlE7FjHztLrji72AKd5EvLnj21j8YdicZOFhzJQhadw&s"
        alt=""
      />
      <p class="msg" :key="msgContent">{{ msgContent }}</p>
    </div>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
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
import { ref } from "vue";
const colorMode = useColorMode();
console.log(colorMode.preference);

const msgContent = ref("2024");
setTimeout(() => {
  msgContent.value = "就靠貓咪拯救世界";
}, 1500);
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
.msg-box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: openin 1s ease-in-out;
  gap: 0.5rem;
  margin: 1rem;
  & img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    border-radius: 4rem;
    overflow: hidden;
    border: 1px solid var(--border-color);
  }
  & .msg {
    font-size: 1.75rem;
    padding: 0.75rem 1rem;
    color: var(--color-text);
    background-color: var(--bg);
    border: 1px solid var(--border-color);
    border-radius: 0.125rem 2rem 2rem;
  }
}

@keyframes openin {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
