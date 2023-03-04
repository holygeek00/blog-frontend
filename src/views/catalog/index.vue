<template>
  <div v-if="data === null">
    <Loading></Loading>
  </div>

  <div class="w-screen h-screen bg-black" v-else>
    <h1 class="text-8xl font-semibold text-white">Catalog</h1>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="article in articlelist">
        <div class="card w-96">
          <div class="card-body">
            <router-link
              :to="{ name: 'ArticleDetail', params: { id: article.id } }"
            >
              <a class="text-4xl text-white">{{ article.title }}</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import articleApi from '@/api/article.js'
import Loading from '@/components/loading.vue'
const router = useRouter()
let data = ref(null)
let loading = ref(false)
let articlelist = ref([])

function getData() {
  loading.value = true
  articleApi
    .getArticles()
    .then((response) => {
      data.value = response.data

      console.log(data.value)
      getList(data)
    })
    .catch((err) => {})
}
function getList(data) {
  data.value.forEach((element) => {
    articlelist.value.push({ id: element.id, title: element.attributes.Title })
    loading.value = false
  })
}

getData()
setTimeout(() => {
  console.log(articlelist.value)
}, 2000)
</script>

<style></style>
