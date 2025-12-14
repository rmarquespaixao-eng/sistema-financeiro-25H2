import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import DashboardView from "@/views/dasboard/DashboardView.vue";
import ContasView from "@/views/contas/ContasView.vue";
import CartoesView from "@/views/cartoes/CartoesView.vue";
import HistoricoView from "@/views/historico/HistoricoView.vue";
import DocumentosView from "@/views/documentos/DocumentosView.vue";
import ConfiguracoesView from "@/views/configuracoes/ConfiguracoesView.vue";
import MetasView from "@/views/metas/MetasView.vue";
import TransacoesView from "@/views/transacoes/TransacoesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/app/home',
      name: 'home',
      component: HomeView,
      redirect: '/app/home/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView,
          meta: {
             title: 'Dashboard',
             icon: "Gauge"
          }
        },
        {
          path: 'contas',
          name: 'contas',
          component: ContasView,
          meta: {
            title: 'Contas',
            icon: "Wallet"
          }
        },
        {
          path: 'cartoes',
          name: 'cartoes',
          component: CartoesView,
          meta: {
            title: 'Cartões',
            icon: "CreditCard"
          }
        },
        {
          path: 'transacoes',
          name: 'transacoes',
          component: TransacoesView,
          meta: {
            title: 'Transações',
            icon: "ArrowRightLeft"
          }
        },
        {
          path: 'historico',
          name: 'historico',
          component: HistoricoView,
          meta: {
            title: 'Historico',
            icon: "History"
          }
        },
        {
          path: 'metas',
          name: 'metas',
          component: MetasView,
          meta: {
            title: 'Metas',
            icon: "Goal"
          }
        },

        {
          path: 'documentos',
          name: 'documentos',
          component: DocumentosView,
          meta: {
            title: 'Documentos',
            icon: "File"
          }
        },
        {
          path: 'configuracoes',
          name: 'configuracoes',
          component: ConfiguracoesView,
          meta: {
            title: 'Configurações',
            icon: "Cog"
          }
        }
      ]
    }
  ],
})

export default router
