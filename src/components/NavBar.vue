<script setup>
    import {Menu} from 'lucide-vue-next'
</script>

<template>
    <div class="nav-bar">
        <button type="button" class="menu-button"><Menu></Menu></button>
    </div>
</template>

<style scoped>
    .nav-bar {
       background-color: var(--primary-color);
       height: 50px;
       width: 100%;
       display: flex;
    }

    .menu-button {
       background: none;
       border: none;
       color: white;
       margin: 5px;
    }

</style>