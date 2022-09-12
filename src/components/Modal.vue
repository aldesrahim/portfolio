<script setup>
import {computed} from "vue";

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  id: {
    type: String,
    required: true
  }
})

let modalSizeClass = computed(() => {
  const classes = {
    sm: 'modal-sm',
    lg: 'modal-lg',
    xl: 'modal-xl',
    fs: 'modal-fullscreen',
    'fs-sm-down': 'modal-fullscreen-sm-down',
    'fs-md-down': 'modal-fullscreen-md-down',
    'fs-lg-down': 'modal-fullscreen-lg-down',
    'fs-xl-down': 'modal-fullscreen-xl-down',
    'fs-xxl-down': 'modal-fullscreen-xxl-down',
  }

  return classes[props.size] ?? ''
})
</script>

<template>
  <div class="modal fade" tabindex="-1" :id="id">
    <div class="modal-dialog" :class="modalSizeClass">
      <div class="modal-content bg-black">
        <div class="modal-header container">
          <slot name="header" />
          <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal" aria-label="Close">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>