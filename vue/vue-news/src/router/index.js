import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            //path: url 주소
            path: '/',
            //redirect
            redirect: '/news',
        },
        {
            //path: url 주소
            path: '/news',
            //component: url 주소로 갔을 때 표시 될 컴포넌트
            component: NewsView,
        },
        {
            //path: url 주소
            path: '/ask',
            //component: url 주소로 갔을 때 표시 될 컴포넌트
            component: AskView,
        },
        {
            //path: url 주소
            path: '/jobs',
            //component: url 주소로 갔을 때 표시 될 컴포넌트
            component: JobsView,
        }
    ]
})