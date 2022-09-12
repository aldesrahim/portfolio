<script setup>
import MainLayout from '@/components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        Contacts
      </h1>
    </template>

    <div class="font-serif lead text-light">
      <p>
        Hey, feel free to contact me if you have any further questions. And thank you for visiting my personal
        website.
      </p>
      <ul class="mt-4">
        <li><a href="mailto:aldesrahim@gmail.com" target="_blank">Email</a></li>
        <li><a href="https://wa.me/6283893962489" target="_blank">WhatsApp</a></li>
      </ul>
    </div>
    <a href="#" class="btn btn-outline-light mt-5">
      Curriculum Vitae
    </a>
  </MainLayout>
</template>