import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/layout/HomePageLayout.vue"),
            children: [
                {
                    path: "/question",
                    component: () => import("@/components/question/QuestionMainComp.vue")
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/layout/LoginLayout.vue')
        },
        {
            path: '/fullPage',
            name: 'fullPage',
            component: () => import('@/layout/FullPageLayout.vue'),
            children: [
                {
                    path: "/uploadProblem",
                    component: () => import("@/components/manage/UploadProblemComp.vue")
                }
            ]
        }
    ]
})

export default router
