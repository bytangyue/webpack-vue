<template>
    <div class="stu-header">
        <div class="stu-container stu-after-clear">
            <img src="../../../assets/images/logo-main.png" alt="" class="img-logo">
            <ul class="sidebar-wrap stu-after-clear">
                <li><router-link :to="{name:'index'}">首页</router-link></li>
                <li>
                    我的学习
                    <ul class="nav-children">
                        <li><router-link :to="{name:'myschedule'}">我的课表</router-link></li>
                        <li><router-link :to="{name : 'login'}">学习目标</router-link></li>
                        <li><router-link :to="{name : 'login'}">每日测评</router-link></li>
                        <li><router-link :to="{name : 'login'}">每日作业</router-link></li>
                        <li><router-link :to="{name : 'login'}">阶段考试</router-link></li>
                    </ul>
                </li>
                <li>
                    我的班级
                    <ul class="nav-children">
                        <li><router-link :to="{name : 'classhomepage'}">班级主页</router-link></li>
                        <li><router-link :to="{name : 'grouphomepage'}">小组主页</router-link></li>
                        <li><router-link :to="{name : 'login'}">教师评分</router-link></li>
                        <li><router-link :to="{name : 'login'}">班级活动</router-link></li>
                    </ul>
                </li>
                <!--to="hpmystudy" to的值和路由对象的path匹配-->
                <li><router-link to="/homepage/hpmystudy/6" exact>个人主页</router-link></li>
            </ul>
            <div class="portrait">
                <img src="../../../assets/images/1.png" alt="" class="photo-img">
                <span class="span-name">双元十五</span>
                <i class="iconfont arrow-bottom">&#xe605;</i>
                <div class="admin-wrap">
                    <i class="iconfont arrow-top">&#xe629;</i>
                    <ul class="admin-ul">
                        <li><router-link :to="{name : 'login'}"><i class="iconfont">&#xe604;</i> 账号设置</router-link></li>
                        <li><router-link :to="{name : 'login'}"><i class="iconfont">&#xe600;</i> 退出</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('./header.less');
    module.exports = {
        name: 'header'
    }
</script>