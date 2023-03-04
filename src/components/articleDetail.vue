<template>
  <div :v-html="result.value"></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import articleApi from '@/api/article.js'
import MarkdownToHtml from '@/utils/markdown.js'
import { ref, computed } from 'vue'
const route = useRoute()
const id = route.params.id
const content = ref('')
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
  result = computed(async () => {
    try {
      return await MarkdownToHtml(content.value)
    } catch (err) {
      // handle error
    }
  })
}
getData()
markdownToHtml(content)
</script>

<style></style>
