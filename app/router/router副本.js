/**
 * Created by ty on 2016/11/29.
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
// Use plugins
Vue.use(VueRouter);
var stuHeader = function (resolve) {
    require(['../components/header/header.vue'], resolve)
}
var stuFooter = function (resolve) {
    require(['../components/footer/footer.vue'], resolve)
}
module.exports = new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        {
            name: 'default',
            path: '/',
            components: {
                sidebar: stuHeader,
                content: function (resolve) {//异步加载组件
                    return require(['../components/content.vue'], resolve)
                },
                footer: stuFooter
            },
            children: [
                {
                    name: 'index',
                    path: 'index',
                    component: function (resolve) {
                        return require(['../pages/index/index.vue'], resolve)
                    }
                },
                {
                    name: 'myschedule',
                    path: 'myschedule',
                    component: function (resolve) {
                        return require(['../pages/myschedule/schedulelist/myschedule.vue'], resolve)
                    }
                },
                {
                    name: 'veryday',
                    path: 'veryday',
                    component: function (resolve) {
                        return require(['../pages/myschedule/veryday/veryday.vue'], resolve)
                    }
                },
                {
                    name: 'studaydetail',
                    path: 'studaydetail',
                    component: function (resolve) {
                        return require(['../pages/myschedule/studaydetail/studaydetail.vue'], resolve)
                    }
                },
                {
                    name: 'classhomepage',
                    path: 'classhomepage',
                    component: function (resolve) {
                        return require(['../pages/classhomepage/classhomepage.vue'], resolve)
                    }
                },
                {
                    name: 'grouphomepage',
                    path: 'grouphomepage',
                    component: function (resolve) {
                        return require(['../pages/grouphomepage/grouphomepage.vue'], resolve)
                    }
                }
            ]
        },
        {
            name: 'homepage',
            path: '/',
            components: {
                sidebar: stuHeader,
                content: function (resolve) {
                    return require(['../pages/personhomepage/homepagesidebar.vue'], resolve)
                },
                footer: stuFooter
            },
            children: [
                {
                    path: 'hpmystudy',
                    component: function (resolve) {
                        return require(['../pages/personhomepage/hpmystudy/hpmystudy.vue'], resolve)
                    }
                },
                {
                    path: 'hpmynotes',
                    component: function (resolve) {
                        return require(['../pages/personhomepage/hpmynotes/hpmynotes.vue'], resolve)
                    }
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            components: {
                content: function (resolve) {
                    return require(['../pages/login/login.vue'], resolve)
                }
            }
        }
        //,
        //// 动态路径参数 以冒号开头
        //{ path: '/user/:id', component: User }
    ]
});



