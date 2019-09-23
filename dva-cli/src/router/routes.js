import Home from '@/containers/home';
import Login from '@/containers/home/login'
import TableList from '@/containers/home/tableList'
import Loginolder from '@/containers/home/loginolder'
// import Users from '@/containers/users'
// import Index from '@/containers/users/index/index'
// import Login from '@/containers/users/login/login'

export default [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
        path: '/home/login',
        component: Login,
    }]
},{
    path: '/tableList',
    name: 'tableList',
    component:TableList
},{
    path: '/loginolder',
    component: Loginolder,
}]