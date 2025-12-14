<script setup>
import { Dropdown } from "bootstrap";
import { onMounted, onBeforeUnmount, ref } from "vue";
import LucideIcon from "@/components/LucideIcon.vue";

defineProps(["btnTitle", "btnIcon", "items"]);

const dropdownBtn = ref(null);
const dropdownRoot = ref(null);
let dropdownInstance = null;

function toggleDropdown() {
  dropdownInstance?.toggle();
}

function handleOutsideClick(e) {
  if (!dropdownRoot.value?.contains(e.target)) {
    dropdownInstance?.hide();
  }
}

function handleEsc(e) {
  if (e.key === "Escape") dropdownInstance?.hide();
}

onMounted(() => {
  dropdownInstance = new Dropdown(dropdownBtn.value);
  document.addEventListener("click", handleOutsideClick, true);
  document.addEventListener("keydown", handleEsc);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick, true);
  document.removeEventListener("keydown", handleEsc);
});
</script>

<template>
  <div class="dropdown" ref="dropdownRoot">
    <button
        ref="dropdownBtn"
        class="btn btn-secondary dropdown-toggle"
        type="button"
        @click.stop="toggleDropdown"
    >
      <LucideIcon :icon="btnIcon" :size="30" />
      {{ btnTitle }}
    </button>

    <ul class="dropdown-menu">
      <li v-for="item in items" :key="item.label">
        <a
            class="dropdown-item"
            href="#"
            @click.prevent="item.action(); dropdownInstance.hide()"
        >
          <LucideIcon
              :icon="item.icon.name"
              :size="item.icon.size"
          />
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-toggle {
  background-color: var(--primary-color);
}

:deep(.dropdown-menu.show) {
  display: block;
}
</style>
