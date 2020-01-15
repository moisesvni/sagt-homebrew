import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({ mode: 'history'});

router.addRoutes([{ path: '/', component: () => import('@/components/dashboard/dashboard.vue')}]);
router.addRoutes([{ path: '/receita', component: () => import('@/components/receita/receita.vue'), props:true }]);

export default router;