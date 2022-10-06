<script setup>
import MainLayout from '@/components/MainLayout.vue'
import Modal from '@/components/Modal.vue'
import Carousel from '@/components/Carousel.vue'
import Paragraphs from '@/components/Paragraphs.vue'
import {ref, watch, onMounted, nextTick} from 'vue'
import {onBeforeRouteLeave} from 'vue-router'
import {useContent} from '@/composables/useContent.js'
import {Modal as bsModal, Carousel as bsCarousel} from 'bootstrap'
import Viewer from 'viewerjs'

const content = useContent('projects')
const title = ref('Projects')
const paragraphs = ref([])
const projects = ref([])
const projectDetail = ref({
  title: '',
  paragraphs: [],
  gallery: []
})

let bsModalDOM = null
let bsCarouselDOM = null

let bsModalEl = null
let bsCarouselEl = null
let viewerEl = null

watch(content, value => {
  title.value = value.title
  paragraphs.value = value.paragraphs
  projects.value = value.projects
})

onMounted(() => {
  bsModalDOM = document.getElementById('projectModal')
  bsCarouselDOM = document.getElementById('projectCarousel')

  bsModalEl = new bsModal(bsModalDOM)
  bsCarouselEl = new bsCarousel(bsCarouselDOM)

  bsModalDOM.addEventListener('hide.bs.modal', function (e) {
    if (this.viewer && this.viewer.isShown) {
      e.preventDefault()
    }
  })
})

onBeforeRouteLeave(() => {
  if (bsModalEl) {
    bsModalEl.hide()
  }
})

function show(project) {
  projectDetail.value = project

  nextTick(function () {
    if (viewerEl) {
      viewerEl.destroy()
    }

    viewerEl = new Viewer(bsModalDOM)

    if (bsModalEl) {
      bsModalEl.show()
    }

    if (bsCarouselEl) {
      bsCarouselEl.to(0)
    }
  })
}

</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        {{ title }}
      </h1>
    </template>
    <template #default>
      <Paragraphs :lines="paragraphs"/>
    </template>
    <template #fullwidth>
      <hr class="d-none d-md-block my-lg-5">
      <div class="row projects-list">
        <div v-for="project in projects" class="col-md-6 col-lg-4 mb-4" :key="project.id">
          <div class="col-lg-10 col-xxl-8 font-serif">
            <a href="#" role="button" class="text-decoration-underline h2" @click.prevent="show(project)">
              {{ project.title }}
            </a>
            <div class="mt-3">
              <p class="mb-2" v-html="project.description"></p>
              <small class="font-monospace">{{ project.tags.join(', ') }}</small>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #outer>
      <Modal id="projectModal" size="fs">
        <template #header>
          <h5 class="modal-title font-serif">{{ projectDetail.title }}</h5>
        </template>
        <div class="container">
          <Carousel id="projectCarousel" data-bs-ride="false" :items="projectDetail.gallery"/>
          <div class="mt-4">
            <Paragraphs :lines="projectDetail.paragraphs"/>
          </div>
        </div>
      </Modal>
    </template>
  </MainLayout>
</template>