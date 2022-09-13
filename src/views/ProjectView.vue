<script setup>
import MainLayout from '@/components/MainLayout.vue'
import Modal from "@/components/Modal.vue";
import Carousel from "@/components/Carousel.vue";
import Paragraphs from "@/components/Paragraphs.vue";

let carouselItems = [
  {
    src: 'https://raw.githubusercontent.com/aldesrahim/portfolio-data/main/assets/images/projects/activity-scheduler/1.png',
    alt: 'placeholder',
    caption: {
      title: 'First slide label',
      description: 'Some representative placeholder content for the first slide.'
    }
  },
  {
    src: 'https://raw.githubusercontent.com/aldesrahim/portfolio-data/main/assets/images/projects/activity-scheduler/2.png',
    alt: 'placeholder',
    caption: {
      title: 'Second slide label',
      description: 'Some representative placeholder content for the second slide.'
    }
  }
]

</script>

<template>
  <MainLayout>
    <template #header>
      <h1 class="display-2">
        Projects
      </h1>
    </template>
    <template #default>
      <p class="lead font-serif mb-4 text-light">
        These are list of what I've been working on, these are from my work or personal projects.
      </p>
    </template>
    <template #fullwidth>
      <hr class="d-none d-md-block">
      <div class="row projects-list">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="col-lg-10 col-xxl-8 font-serif">
            <a href="#" role="button" class="text-decoration-underline h2" data-bs-toggle="modal"
               data-bs-target="#projectModal">
              Asset Management
            </a>
            <div class="mt-3">
              <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                facilis.</p>
              <small class="font-monospace">PHP, Laravel</small>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #outer>
      <Modal id="projectModal" size="fs">
        <template #header>
          <h5 class="modal-title font-serif">Asset Management</h5>
        </template>
        <div class="container">

          <Carousel id="projectCarousel" data-bs-ride="false" :items="carouselItems"/>

          <Paragraphs :lines="[
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fugiat quas rerum sunt velit! Aliquid cum dolore eius et expedita explicabo harum inventore libero magni minima natus non numquam pariatur porro possimus, quam quas soluta tempore! Aperiam corporis perferendis ratione recusandae vel voluptas. Accusamus distinctio odio omnis, quod tempore unde!',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores assumenda consequatur culpa, delectus eligendi illo illum laboriosam nemo nostrum nulla unde, voluptas. Dicta illo non obcaecati optio placeat quibusdam quis recusandae sint sit suscipit? A accusantium alias animi architecto consectetur delectus distinctio dolorem esse et id magnam maiores minima molestias nostrum, nulla obcaecati quas quidem ratione rem reprehenderit temporibus velit voluptatem. Ab aspernatur, cum debitis eum hic impedit iste laboriosam minus mollitia nobis odit officiis optio praesentium quia quisquam quos repellat, totam velit! A, adipisci laboriosam minima minus molestiae molestias nihil nisi numquam obcaecati qui quod, quos, reiciendis veniam?',
          ]"/>
        </div>
      </Modal>
    </template>
  </MainLayout>
</template>