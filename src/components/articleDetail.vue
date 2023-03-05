<template>
  <div v-if="result" class="markdown-body">
    <div v-html="result.value"></div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import articleApi from '@/api/article.js'
import MarkdownToHtml from '@/utils/markdown.js'
import { ref, computed } from 'vue'
import 'github-markdown-css'
const route = useRoute()
const id = route.params.id
const content = ref({})
let result = ref('')
function getData() {
  articleApi
    .getArticlesDetail(id)
    .then((response) => {
      content.value = response.data.attributes.content
    })
    .catch((err) => {})
}

function markdownToHtml(content) {
  let result = computed(() => {
    try {
      return MarkdownToHtml(content.value)
    } catch (err) {
      // handle error
    }
  })
  return result
}
getData()
result = markdownToHtml(content)
console.log(result.value)
</script>

<style scoped></style>
