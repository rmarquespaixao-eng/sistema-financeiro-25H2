<script setup>

import NavBar from "@/components/NavBar.vue";
import PageHeader from "@/components/PageHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>

  <div class="container-fluid">
      <div class="sidebar">
          <sidebar></sidebar>
      </div>
      <div class="main">
          <nav-bar></nav-bar>
          <page-header></page-header>
          <router-view></router-view>
      </div>
  </div>


</template>

<style scoped>
  .container-fluid {
      width: 100%;
      height: 100vh;
      background-color: var(--background-color);
      padding: 0;
      display: flex;
  }

  .sidebar {
     width: 100%;
     max-width: 250px;
  }

  .main {
    width: calc(100% - 250px);
  }

</style>