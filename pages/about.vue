<template>
  <div>
    <h1>about</h1>
    <AboutBox />
  </div>
</template>
<script setup>
useSeoMeta({
  title: "About - Nuxt3 高效入門全攻略",
  description: "關於我們 - 最棒的Nuxt3的線上課程",
  ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
  ogTitle: "About - Nuxt3 高效入門全攻略",
  //  ogImage: "",
});
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      tagPosition: "bodyClose",
    },
  ],
});
</script>
<style scoped></style>
