<script setup>

    import {onMounted, ref} from "vue";

    import { Modal } from 'bootstrap'

    const modalRef = ref(null);

    let modalInstance = null;

    onMounted(() => {
        modalInstance = new Modal(modalRef.value);
    })

    defineProps([
        'title',
    ]);

    function open() {
       modalInstance.show()
    }

    function close() {
       modalInstance.hide()
    }

    defineExpose({
        open,
        close,
    })
</script>

<template>
  <div
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
      ref="modalRef"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
            <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>