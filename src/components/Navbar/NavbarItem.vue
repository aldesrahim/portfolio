<script setup>
import {RouterLink} from 'vue-router';

const props = defineProps({
  to: String
})
</script>

<template>
  <li class="nav-item">
    <RouterLink class="nav-link" :to="to">
      <slot />
    </RouterLink>
  </li>
</template>