<script setup>

import {computed} from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  withIndicators: {
    type: Boolean,
    default: true
  }
})

let idTarget = computed(() => `#${props.id}`)

</script>

<template>
  <div :id="id" class="carousel slide">
    <div v-if="withIndicators" class="carousel-indicators">
      <button
          v-for="(item, key) in items"
          type="button"
          :data-bs-target="idTarget"
          :data-bs-slide-to="key"
          :class="{ active: key === 0 }"></button>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="idTarget" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <div class="carousel-inner">
      <div v-for="(item, key) in items" class="carousel-item" :class="{ active: key === 0 }">
        <img class="d-block w-100" :src="item.src" :alt="item.alt ?? ''">
        <div
            v-if="typeof item.caption !== 'undefined'"
            class="carousel-caption d-none d-md-block bg-dark bg-opacity-75"
        >
          <h5>{{ item.caption.title }}</h5>
          <p>{{ item.caption.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-next" type="button" :data-bs-target="idTarget" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>