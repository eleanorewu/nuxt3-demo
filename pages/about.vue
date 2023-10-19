<template>
  <div>
    <h1>about</h1>
    <AboutBox />
  </div>
</template>
<script setup>
useSeoMeta({
  title: "About - 2024救世貓貓",
  description: "關於貓貓 - 未來就靠貓咪來拯救",
  ogDescription: "關於貓貓 - 未來就靠貓咪來拯救",
  ogTitle: "About - 2024救世貓貓",
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
