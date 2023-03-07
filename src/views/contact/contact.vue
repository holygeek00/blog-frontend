<template>
  <div v-if="loading"><loading></loading></div>
  <div v-else class="flex items-center justify-center h-screen">
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src="/Naassh-icon.jpeg"
        />
      </div>
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold">Contact Me</h2>
        <p class="text-xl text-gray-600" v-html="data"></p>
      </div>
      <div class="flex justify-end mt-4">
        <a href="#" class="text-xl font-medium text-indigo-500">Naassh</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import contactInfo from '@/api/contact.js'
import { ref, onMounted } from 'vue'
import Loading from '@/components/loading.vue'
let data = ref(null)

let loading = ref(false)
function getData() {
  loading.value = true
  contactInfo
    .getContactInfo()
    .then((response) => {
      data = response.data.attributes.contact_me
      loading.value = false
    })
    .catch((err) => {})
}
getData()
console.log(data)
</script>

<style></style>
