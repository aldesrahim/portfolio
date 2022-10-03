<script setup>
import MainLayout from '@/components/MainLayout.vue'
import {useContent} from '@/composables/useContent.js';
import Paragraphs from '@/components/Paragraphs.vue';
import {ref, watch} from 'vue'

const content = useContent('contacts')
const title = ref('Contacts')
const paragraphs = ref([])
const contacts = ref([])
const cv = ref(null)

watch(content, value => {
  title.value = value.title
  paragraphs.value = value.paragraphs
  contacts.value = value.contacts
  cv.value = value.cv
})
</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        {{ title }}
      </h1>
    </template>

    <Paragraphs :lines="paragraphs"/>

    <ul class="font-serif lead">
      <li v-for="(contact, key) in contacts" :key="key">
        <a :href="contact.href" target="_blank">{{ contact.title }}</a>
      </li>
    </ul>
    <a v-if="cv" :href="cv.href" class="btn btn-outline-light mt-5">
      {{ cv.title }}
    </a>
  </MainLayout>
</template>