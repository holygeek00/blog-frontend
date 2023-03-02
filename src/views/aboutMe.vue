<template></template>

<script setup>
import { ref, onMounted } from 'vue'
import articleApi from '@/api/article.js'
let data = ref({})
setTimeout(() => {
  articleApi.getAboutme()
}, 1000)
console.log(import.meta.env.VITE_BASIC_API)
</script>

<style></style>
