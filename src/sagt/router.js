import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({ mode: 'history' });

router.addRoutes([{ path: '/', component: () => import('@/sagt/components/dashboard/dashboard.vue') }]);
router.addRoutes([{ path: '/receita', component: () => import('@/sagt/components/receita/receita.vue'), props:true }]);
router.addRoutes([{ path: '/fabricacao', component: () => import('@/sagt/components/fabricacao/fabricacao.vue'), props:true }]);

export default router;