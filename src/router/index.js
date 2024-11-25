import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/layout.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Layout,
            children:[
                {
                    path: "/",
                    name: "home",
                    component: () => import("../views/Home.vue"),
                },
                {
                    path: "/Service",
                    name: "Service",
                    component: () => import("../views/Service.vue"),
                },
                {
                    path: "/Company",
                    name: "Company",
                    component: () => import("../views/Company.vue"),
                },
                {
                    path: "/Career",
                    name: "Career",
                    component: () => import("../views/Career.vue"),
                },
                {
                    path: "/Blog",
                    name: "Blog",
                    component: () => import("../views/Blog.vue"),
                },
                {
                    path: "/Contact",
                    name: "Contact",
                    component: () => import("../views/Contact.vue"),
                },

            ]
        }
       
    ],
});

export default router
