<template></template>

<script setup>
import { ref, onMounted } from 'vue'
import getAboutMe from '@/api/article.js'
let data = ref({})
setTimeout(() => {
  getAboutMe()
}, 1000)
</script>

<style></style>
