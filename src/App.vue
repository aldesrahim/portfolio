<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {provide} from "vue";

provide('config', {
  title: 'Aldes'
})

import Navbar from './components/Navbar/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView/>
</template>