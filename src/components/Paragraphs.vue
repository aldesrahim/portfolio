<script setup>
const props = defineProps({
  lines: Array
})
</script>

<template>
  <p class="lead font-serif mb-4" v-for="line in lines" v-html="line.replace(/\n/g, '<br>')"></p>
</template>