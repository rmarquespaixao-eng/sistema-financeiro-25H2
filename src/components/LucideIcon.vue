<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  icon: String,
  size: { type: Number, default: 30 },
  color: { type: String, default: 'currentColor' }
})

const Icon = computed(() => icons[props.icon])
</script>

<template>
  <component
      :is="Icon"
      :size="size"
      :color="color"
  />
</template>
