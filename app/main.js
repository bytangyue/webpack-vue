/**
 * Created by ty on 2016/11/16.
 */
var Vue = require('vue');
var NProgress = require('nprogress');
var router = require('./router/router');
var ElementUI = require('element-ui');
var App = require('./app.vue');
//use plugins
Vue.use(ElementUI);
//require style sheets
require('reset.css');
//require('../assets/style/element-theme/element-ui-index.css');
require('../theme/index.css');
require('../assets/style/main.less');
require('../assets/fonts/iconfont.css');
//require('nprogress/nprogress.css');
/*自定义全局组件 begin*/
var stutagsign = require('./components/tagsign.vue');
var stuwisdom = require('./components/wisdom/wisdom.vue');
var stubreadcrumb = require('./components/stubreadcrumb.vue');
//驼峰命名法（大写）默认会转成-小写,例如下面会装成stu-tag-sign
Vue.component('stuTagSign', stutagsign);
//也可直接用-小写方式命名，以下我们都用-小写命名
Vue.component('stu-wisdom', stuwisdom);
Vue.component('stu-breadcrumb', stubreadcrumb);
/*自定义全局组件 end*/
// start
router.beforeEach(function(to, from, next){
    NProgress.start();
    next();
});
// loading
var vm = new Vue({
    name: 'root',
    router: router,
    render:function(h){
        return h(App);
    }
}).$mount('#app');//手动挂载
// end
router.afterEach(function(route){
    NProgress.done();
});
