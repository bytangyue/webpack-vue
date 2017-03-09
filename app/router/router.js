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
                content: function (resolve) {
                    require(['../components/content.vue'], resolve)
                },
                footer: stuFooter
            },
            children: [
                {
                    name: 'index',
                    path: 'index',
                    component: function (resolve) {
                        require(['../pages/index/index.vue'], resolve)
                    }
                },
                {
                    name: 'myschedule',
                    path: 'myschedule',
                    component: function (resolve) {
                        require(['../pages/myschedule/schedulelist/myschedule.vue'], resolve)
                    }
                },
                {
                    name: 'veryday',
                    path: 'veryday',
                    component: function (resolve) {
                        require(['../pages/myschedule/veryday/veryday.vue'], resolve)
                    }
                },
                {
                    name: 'studaydetail',
                    path: 'studaydetail',
                    component: function (resolve) {
                        require(['../pages/myschedule/studaydetail/studaydetail.vue'], resolve)
                    }
                },
                {
                    name: 'classhomepage',
                    path: 'classhomepage',
                    component: function (resolve) {
                        require(['../pages/classhomepage/classhomepage.vue'], resolve)
                    }
                },
                {
                    name: 'grouphomepage',
                    path: 'grouphomepage',
                    component: function (resolve) {
                        require(['../pages/grouphomepage/grouphomepage.vue'], resolve)
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
                    require(['../pages/personhomepage/homepagesidebar.vue'], resolve)
                },
                footer: stuFooter
            },
            children: [
                {
                    path: 'hpmystudy',
                    component: function (resolve) {
                        require(['../pages/personhomepage/hpmystudy/hpmystudy.vue'], resolve)
                    }
                },
                {
                    path: 'hpmynotes',
                    component: function (resolve) {
                        require(['../pages/personhomepage/hpmynotes/hpmynotes.vue'], resolve)
                    }
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            components: {
                content: function (resolve) {
                    require(['../pages/login/login.vue'], resolve)
                }
            }
        }
        //,
        //// 动态路径参数 以冒号开头
        //{ path: '/user/:id', component: User }
    ]
});



