<script setup>
import NavbarItem from './NavbarItem.vue'
import NavbarBrand from './NavbarBrand.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <NavbarBrand />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-uppercase" id="navbar">
        <ul class="navbar-nav ms-auto">
          <NavbarItem to="/about">About Me</NavbarItem>
          <NavbarItem to="/projects">Projects</NavbarItem>
          <NavbarItem to="/contacts">Contacts</NavbarItem>
        </ul>
      </div>
    </div>
  </nav>
</template>