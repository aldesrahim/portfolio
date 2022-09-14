<script setup>
import MainLayout from '@/components/MainLayout.vue';
import {RouterLink} from 'vue-router'

</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        Looking for something ?
      </h1>
    </template>

    <RouterLink to="/contacts" class="btn btn-primary">
      Let me know
    </RouterLink>
  </MainLayout>
</template>