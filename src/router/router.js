import {
    createWebHashHistory,
    createRouter
} from 'vue-router';
import Index from '@/components/Index.vue';
import About from '@/components/About.vue';
import About2 from '@/components/About2.vue';
import Product from '@/components/Product.vue';
import Product2 from '@/components/Product2.vue';
import Product3 from '@/components/Product3.vue';
import Contact from '@/components/Contact.vue';
import Contact2 from '@/components/Contact2.vue';

const history = createWebHashHistory();
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/about2',
        component: About2
    },
    {
        path: '/product/:id',
        component: Product
    },
    {
        path: '/product2/',
         component: Product2
    },
    {
        path: '/product3/',
         component: Product3
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/contact2',
        component: Contact2
    },
];
const router = createRouter({
    history,
    routes,
});
export default router;