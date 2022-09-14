<script setup>
import {inject} from 'vue';
const config = inject('config')
</script>
<template>
  <RouterLink class="navbar-brand text-uppercase" to="/">{{ config ? config.brand : 'ALDES' }}</RouterLink>
</template>