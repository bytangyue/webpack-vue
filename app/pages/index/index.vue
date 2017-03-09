<template>
    <div class="stu-index two-columns">
        <div class="left-box">
            <el-row class="top-left two-columns">
                <el-col :span="8" class="left-box"><img src="../../../assets/images/default.png" alt=""></el-col>
                <el-col :span="16" class="right-box tl-right">
                    <h1 class="h1-name">2016037788704黄tttt转学000科JAVA双元班</h1>
                    <p class="tl-r-p m-t-20">
                        <i class="iconfont building">&#xe670;</i><span class="build-span">20160304黄转测试校区</span>
                        <i class="iconfont usersicon">&#xe67d;</i><span>15人</span>
                    </p>
                    <div class="tl-r-fieldset m-t-20">
                        <span class="legend">100<span class="total-day"><b>/</b> 100天</span> </span>
                        <p>班主任：欣欣</p>
                        <p class="sdate-p">开班时间：2016-03-04</p>
                    </div>
                </el-col>
            </el-row>

            <bottom-left/>
        </div>
        <div class="right-box">
            <div class="top-right">
                <div class="tr-top">
                    <stu-tag-sign signName="班级通知"></stu-tag-sign>
                    <router-link :to="{name:''}" class="moreicon"><i class="iconfont">&#xe60e;</i></router-link>
                </div>
                <ul class="inform-ul">
                    <li>
                        <router-link :to="{name:''}">公告 : 20160401校区公告一</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:''}">公告 : 20160401校区公告一</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:''}">公告 : 20160401校区公告一</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:''}">公告 : 20160401校区公告一</router-link>
                    </li>
                    <li>
                        <router-link :to="{name:''}">公告 : 20160401校区公告一</router-link>
                    </li>
                </ul>
            </div>
            <div class="bottom-right">
                <div class="br-top">
                    <stu-tag-sign signName="我的课表"></stu-tag-sign>
                    <router-link :to="{name:''}"><i class="iconfont moreicon">&#xe60e;</i></router-link>
                    <div class="today-replace-wrap">
                        <i class="iconfont" @click="changeScheduleDate('left')">&#xe61f;</i>
                        <span class="today-span">{{scheduleSign}}</span>
                        <i class="iconfont" @click="changeScheduleDate('right')">&#xe613;</i>
                    </div>
                </div>
                <div class="br-bottom">
                    <!--<stu-wisdom :wisdomOption="mySchedule"></stu-wisdom>-->
                    <div class="br-bt-con m-t-10">
                        <p class="lessons-name"><i class="iconfont">&#xe63e;</i>授课单元名称</p>
                        <ul class="lessons-ul">
                            <li><router-link :to="{name:''}">计算机概述</router-link></li>
                            <li><router-link :to="{name:''}">计算机硬件和软件概述</router-link></li>
                        </ul>
                        <p class="lessons-name"><i class="iconfont">&#xe63e;</i>授课单元名称</p>
                        <ul class="lessons-ul">
                            <li><router-link :to="{name:''}">计算机概述</router-link></li>
                            <li><router-link :to="{name:''}">计算机硬件和软件概述</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('./index.less');
    module.exports = require('./index');
</script>