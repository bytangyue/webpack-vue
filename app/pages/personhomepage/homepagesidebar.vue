<template>
    <div class="stu-container stu-container-padding">
        <div class="stu-hp-sidebar two-columns">
            <div class="left-nav">
                <el-row class="photo-wrap">
                    <el-col :span="10"><img src="../../../assets/images/photo3.png" class="photo-img" alt=""></el-col>
                    <el-col :span="14" class="photo-info-wrap">
                        <h4>双元十五</h4>
                        <p>关注：2</p>
                        <p class="desc">简介：圣达菲尔夫韦德辅导费</p>
                    </el-col>
                </el-row>
                <ul class="nav-ul">
                    <li>
                        <router-link class="link" to="hpmystudy"><i class="iconfont">&#xe611;</i>我的11学习</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="hpmynotes"><i class="iconfont">&#xe691;</i>我的笔记</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="1"><i class="iconfont">&#xe67e;</i>我的提问</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="2"><i class="iconfont">&#xe610;</i>我的消息</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="3"><i class="iconfont">&#xe61d;</i>我的日记</router-link>
                    </li>
                    <li>
                        <router-link class="link" to="4"><i class="iconfont">&#xe6fb;</i>转班信息</router-link>
                    </li>
                </ul>
            </div>
            <div class="right-con">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    require('./homepagesidebar.less');
    module.exports = {
        data: function () {
            return {}
        }
    };
</script>