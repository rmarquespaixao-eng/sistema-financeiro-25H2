<script setup>

import LucideIcon from "@/components/LucideIcon.vue";
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
      <button class="btn btn-primary action-btn"><LucideIcon icon="CirclePlus"></LucideIcon> Novo Cartão</button>
      <button class="btn btn-primary action-btn"><LucideIcon icon="Funnel"></LucideIcon> Filtros</button>
      <div class="dropdown">
        <button
            class="btn btn-primary action-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
          <LucideIcon icon="RefreshCcw"></LucideIcon>
          Operações em massa
        </button>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"><lucide-icon icon="Trash" size="20"></lucide-icon> Excluir</a></li>
          <li><a class="dropdown-item" href="#"><lucide-icon icon="Archive" size="20"></lucide-icon> Arquivar</a></li>
        </ul>
      </div>
    </div>

    <div class="page-body">
      <table class="table table-striped">
        <thead class="thead-page">
        <th></th>
        <th>Descrição</th>
        <th>Titular</th>
        <th>Banco</th>
        <th>Criada em</th>
        <th></th>
        </thead>
        <tbody>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" class="form-check"> </td>
          <td>Conta test</td>
          <td>Rafael Marques</td>
          <td>Bradesco</td>
          <td>09/12/2025</td>
          <td>
            <a href="#"><lucide-icon icon="SquarePen" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Trash" size="20"></lucide-icon></a>
            <a href="#"><lucide-icon icon="Archive" size="20"></lucide-icon></a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
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