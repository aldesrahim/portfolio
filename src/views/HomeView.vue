<script setup>
import MainLayout from '@/components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template #header>
      <p class="lead">
        Hi 👋,<br> my name is
      </p>
      <h1 class="display-2">
        Ahmad Al Desrahim
      </h1>
    </template>

    <p class="lead font-serif mb-4">
      I am a Web Developer, my main coding language is PHP,<br>
      Love using Laravel and currently learning Vue.
    </p>

    <RouterLink to="/about" class="btn btn-primary">
      About Me
    </RouterLink>
  </MainLayout>
</template>