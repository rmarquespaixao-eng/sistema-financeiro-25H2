<script setup>
import {CircleDollarSign, Gauge, Wallet, CreditCard, History, Cog, Files, Goal, ArrowLeftRight, LogOut  } from 'lucide-vue-next'
</script>

<template>
   <div class="sidebar">
        <div class="sidebar-header">
            <h3><CircleDollarSign></CircleDollarSign> Sistema Financeiro V5.0</h3>
        </div>

        <div class="sidebar-body">
            <ul>
                <li><RouterLink active-class="active-item" to="dashboard"><Gauge :size="20" ></Gauge> Dashboard</RouterLink></li>
                <li><RouterLink active-class="active-item" to="contas"><Wallet :size="20"></Wallet>  Contas</RouterLink></li>
                <li><RouterLink active-class="active-item" to="cartoes"><CreditCard :size="20"></CreditCard> Cartões</RouterLink></li>
                <li><RouterLink active-class="active-item" to="transacoes"><ArrowLeftRight :size="20"></ArrowLeftRight> Transações</RouterLink></li>
                <li><RouterLink active-class="active-item" to="metas"><Goal size="20"></Goal> Metas</RouterLink></li>
                <li><RouterLink active-class="active-item" to="historico"><History  :size="20"></History > Histórico</RouterLink></li>
                <li><RouterLink active-class="active-item" to="documentos"><Files  :size="20"></Files > Documentos</RouterLink></li>
                <li><RouterLink active-class="active-item" to="configuracoes"><Cog  :size="20"></Cog > Configurações</RouterLink></li>
                <li><a href="#"><LogOut :size="20"></LogOut> Sair</a> </li>
            </ul>
        </div>
   </div>
</template>

<style scoped>
  .sidebar {
     width: 100%;
     height: 100vh;
     overflow: auto;
     background-color: #6b22aa;
     display: flex;
     flex-direction: column;
  }

  .sidebar-header {
    width: 100%;
    height: 50px;
    background: #551885;
  }

  .sidebar-header h3 {
      width: 100%;
      font-size: 1em;
      color: #fff;
      padding: 12px;
      box-sizing: border-box;
  }

  .sidebar-body {
     width: 100%;
     padding: 15px;
  }

  .sidebar-body ul {
    list-style: none;
    padding: 0;
  }

  .sidebar-body ul li {
     margin-bottom: 5px;
  }

  .sidebar-body ul li a:link, .sidebar-body ul li a:visited {
     text-decoration: none;
     color: #fff;
     font-size: 15px;
     display: block;
     padding: 10px;
  }

  .sidebar-body ul li a:hover {
     background: #551885;
  }

  .active-item {
    background: #551885;
  }

</style>