import Home from 'src/pages/home';
import Following from 'src/pages/following';
import Login from 'src/pages/login';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Login', component: Login },
];

const privateRouters = [];

export { publicRouters, privateRouters };
