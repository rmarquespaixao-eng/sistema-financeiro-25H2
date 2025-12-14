<script setup>
import LucideIcon from "@/components/LucideIcon.vue";
import Modal from "@/components/Modal.vue";
import {reactive, ref} from "vue";
import PageFilter from "@/components/PageFilter.vue";
import DropdownMenu from "@/components/DropdownMenu.vue";
import {getDropdownItems} from "@/helper/DropdownHelper.js";

const filterModal = ref(null);

const data = reactive({
     rowsSelected: []
})

function openfilter() {
  filterModal.value.open()
}

function deleteAction() {

}

function archiveAction() {
    alert("arquivar action")
}

const dropdownItems = getDropdownItems(deleteAction, archiveAction);

</script>

<template>
    <div class="page">

        <div class="page-statistc">
          <div class="card statistc-card">
            <div class="card-header">
              Credito
            </div>
            <div class="card-body">
               R$ 3000,00
            </div>
          </div>

          <div class="card statistc-card">
            <div class="card-header">
              Debito
            </div>
            <div class="card-body">
              R$ 3000,00
            </div>
          </div>

          <div class="card statistc-card">
            <div class="card-header">
              Saldo total
            </div>
            <div class="card-body">
              R$ 5000,00
            </div>
          </div>

        </div>

         <div class="page-action">
             <button class="btn btn-primary action-btn"><LucideIcon icon="CirclePlus"></LucideIcon> Nova conta</button>
             <button type="button" @click="openfilter" class="btn btn-primary action-btn"><LucideIcon icon="Funnel"></LucideIcon> Filtros</button>
             <dropdown-menu
                 btn-title="Ações em massa"
                 :items="dropdownItems"
                 btn-icon="RefreshCcw">
             </dropdown-menu>
         </div>

         <div class="page-body">
             <table class="table table-striped">
                 <thead class="thead-page">
                    <th></th>
                    <th>Descrição</th>
                    <th>Titular</th>
                    <th>Banco</th>
                    <th>Criada em</th>
                    <th>Saldo</th>
                    <th></th>
                 </thead>
                 <tbody>
                    <tr>
                        <td><input type="checkbox" class="form-check" v-model="data.rowsSelected" value="1"> </td>
                        <td>Conta test</td>
                        <td>Rafael Marques</td>
                        <td>Bradesco</td>
                        <td>09/12/2025</td>
                        <td>R$ 500,00</td>
                        <td>
                           <div class="table-actions">
                              <a href="#"><lucide-icon icon="SquarePen" :size="20"></lucide-icon></a>
                              <a href="#"><lucide-icon icon="Trash" :size="20"></lucide-icon></a>
                              <a href="#"><lucide-icon icon="Archive" :size="20"></lucide-icon></a>
                           </div>
                        </td>
                    </tr>

                    <tr>
                      <td><input type="checkbox" class="form-check" v-model="data.rowsSelected" value="2"> </td>
                      <td>Conta test</td>
                      <td>Rafael Marques</td>
                      <td>Bradesco</td>
                      <td>09/12/2025</td>
                      <td>R$ 500,00</td>
                      <td>
                        <div class="table-actions">
                          <a href="#"><lucide-icon icon="SquarePen" :size="20"></lucide-icon></a>
                          <a href="#"><lucide-icon icon="Trash" :size="20"></lucide-icon></a>
                          <a href="#"><lucide-icon icon="Archive" :size="20"></lucide-icon></a>
                        </div>
                      </td>
                    </tr>


                 </tbody>
             </table>
         </div>
    </div>
    <modal ref="filterModal" title="Filtros">
          <page-filter></page-filter>
    </modal>
</template>

<style scoped>

    .page {
       padding: 10px;
       box-sizing: border-box;
    }

    .action-btn {
        background: var(--primary-color);
        border: none;
    }

    .page-body {
      margin-top: 15px;
    }

    .page-statistc {
      display: flex;
      margin-bottom: 15px;
    }

    .page-statistc .card {
        margin-right: 10px;
    }

    .page-statistc .statistc-card {
        width: 100%;
    }

    .thead-page {
        background-color: var(--primary-color);
    }

    .thead-page th {
        padding: 10px;
        color: #fff;
    }

    .page-action {
       display: flex;
    }

    .page-action button {
      margin-right: 10px;
    }

</style>