<script setup>
import Navbar from './components/Navbar/Navbar.vue';
import {useContent} from "@/composables/useContent";
import {RouterView} from 'vue-router'
import {provide} from 'vue';
provide('config', useContent('general'))
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView/>
</template>