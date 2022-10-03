<script setup>
import MainLayout from '@/components/MainLayout.vue'
import Paragraphs from '@/components/Paragraphs.vue'
import {useContent} from '@/composables/useContent.js';
import {ref, watch} from 'vue';

const content = useContent('home')
const name = ref('Ahmad Al Desrahim')
const paragraphs = ref([])

watch(content, value => {
  name.value = value.name
  paragraphs.value = value.paragraphs
})
</script>

<template>
  <MainLayout>
    <template #header>
      <p class="lead">
        Hi 👋,<br> my name is
      </p>
      <h1 class="display-2">
        {{ name }}
      </h1>
    </template>

    <Paragraphs :lines="paragraphs"/>

    <RouterLink to="/projects" class="btn btn-primary">
      My Projects
    </RouterLink>
  </MainLayout>
</template>