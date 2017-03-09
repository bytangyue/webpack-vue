<template>
    <div class="bottom-left">
        <el-row style="top: 1px;">
            <el-col :span="12" class="bl-top-left two-columns">
                <div class="left-box">
                    <span class="article-icon-wrap tickling"><i class="iconfont">&#xe68c;</i></span>
                </div>
                <div class="right-box">
                    <p class="small-name-wrap stu-after-clear">
                        <span class="center-span">今日学习目标反馈</span>
                        <router-link :to="{name:''}" class="small-more"><i class="iconfont">&#xe60e;</i></router-link>
                    </p>
                    <ul class="small-bt-wrap">
                        <li>{{tickling.htmlData.col0}}</li>
                        <li>共计<span class="stu-red padding-l-r">{{tickling.htmlData.col1}}</span>题</li>
                        <li>反馈时间：{{tickling.htmlData.col2}} 至 {{tickling.htmlData.col3}}</li>
                        <li class="stu-after-clear">
                            <ul class="change-article-ul f-l stu-after-clear">
                                <li v-for="(tlres,index) in tickling.respData"
                                    @click="changTickData(index)" :class="{stuBackAct:tickling.curTickClass[index]}"></li>
                            </ul>
                            <el-button class="stu-gray-btn f-r">已完成</el-button>
                        </li>
                        <li>遗留的反馈任务：1条</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="12" class="bl-top-right two-columns">
                <div class="left-box">
                    <span class="article-icon-wrap evaluation"><i class="iconfont">&#xe616;</i></span>
                </div>
                <div class="right-box">
                    <p class="small-name-wrap stu-after-clear">
                                <span class="center-span">
                                    <label>今日测评</label><b class="line-b">|</b><label class="gray-txt">今日作业</label>
                                </span>
                        <router-link :to="{name:''}" class="small-more"><i class="iconfont">&#xe60e;</i></router-link>
                    </p>
                    <stu-wisdom :wisdomOption="evaluation.wisData"></stu-wisdom>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="bl-bottom-left two-columns">
                <div class="left-box">
                    <span class="article-icon-wrap exam"><i class="iconfont">&#xe651;</i></span>
                </div>
                <div class="right-box">
                    <p class="small-name-wrap stu-after-clear">
                        <span class="center-span">今日考试</span>
                        <router-link :to="{name:''}" class="small-more"><i class="iconfont">&#xe60e;</i></router-link>
                    </p>
                </div>
            </el-col>
            <el-col :span="12" class="bl-bottom-right two-columns">
                <div class="left-box">
                    <span class="article-icon-wrap grade"><i class="iconfont">&#xe634;</i></span>
                </div>
                <div class="right-box">
                    <p class="small-name-wrap stu-after-clear">
                        <span class="center-span">今日教师评分</span>
                        <router-link :to="{name:''}" class="small-more"><i class="iconfont">&#xe60e;</i></router-link>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    module.exports = require('./bottomleft');
</script>