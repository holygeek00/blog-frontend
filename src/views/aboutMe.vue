<template>
  <div v-if="data === null">
    <Loading></Loading>
  </div>
  <div class="hero min-h-screen bg-base-200" v-else>
    <div class="hero-content text-center flex-col lg:flex-row-reverse">
      <img
        :src="'https://blog.naassh.com' + imgurl"
        class="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">About Naassh Here!</h1>
        <p class="py-6">{{ data }}</p>
        <button class="btn btn-primary">Explore More!</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import articleApi from '@/api/article.js'
import Loading from '@/components/loading.vue'
let data = ref(null)
let imgurl = ref(null)
let loading = ref(false)
function getData() {
  loading.value = true
  articleApi
    .getAboutme()
    .then((response) => {
      data.value = response.data.attributes.Describe
      imgurl.value = response.data.attributes.profile.data.attributes.url
      loading.value = false
    })
    .catch((err) => {})
  console.log(imgurl)
}
getData()
console.log(import.meta.env.VITE_BASIC_API)
</script>

<style></style>
