<script setup>
import MainLayout from '@/components/MainLayout.vue'
import Paragraphs from '@/components/Paragraphs.vue'
import {useContent} from '@/composables/useContent.js'
import {ref, watch} from 'vue'

const content = useContent('about')
const title = ref('About Me')
const paragraphs = ref([])

watch(content, value => {
  title.value = value.title
  paragraphs.value = value.paragraphs
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
  </MainLayout>
</template>