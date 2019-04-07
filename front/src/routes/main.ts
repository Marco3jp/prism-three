import Vue from 'vue';
import Router from 'vue-router';
import TopPage from '@view/TopPage';
import Title from '@view/Title';
import Game from '@view/Game/Game';

import game from "./game";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: TopPage
        },
        {
            path: '/title',
            component: Title
        },
        {
            path: '/game',
            component: Game,
            children: game
        }
    ]
})