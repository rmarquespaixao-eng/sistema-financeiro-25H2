<script setup>
   import {useRoute} from "vue-router";
   import LucideIcon from "@/components/LucideIcon.vue";
   let route = useRoute()
</script>

<template>
    <div class="page-header">
      <h1><lucide-icon :icon="route.meta.icon"></lucide-icon>{{route.meta.title}}</h1>
        <span class="path"><span class="base-path">Home</span>/Dashboard</span>
    </div>
</template>

<style scoped>
    .page-header {
        width: 100%;
        height: 50px;
        background: var(--page-header-bg);
        display: flex;
    }

    .page-header h1 {
       font-size: 1.5em;
       margin: 10px;
       color: #878787;
    }

    .path {
       font-size: 0.9em;
       margin: 15px;
       color: #ccc;
       font-weight: bold;
    }
    .base-path {
       color: var(--primary-color);
       font-weight: bold;
    }
</style>