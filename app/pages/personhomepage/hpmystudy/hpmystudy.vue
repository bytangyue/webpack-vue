<template>
    <div class="stu-mystudy">
        <el-tabs :active-name="activeName">
            <el-tab-pane label="我的学习" name="first">
                <ul class="stu-list-item">
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                    <li class="two-columns">
                        <p>在2016-03-27 14:09:54 开始了
                            <router-link :to="''" class="no-pointer stuCorAct"> 20160304黄转知识体系第一章第1节知识点2</router-link>
                        </p>
                        <p><i class="iconfont pointer">&#xe620;</i> 0</p>
                    </li>
                </ul>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="100"
                            layout="prev, pager, next, jumper"
                            :total="1000">
                    </el-pagination>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<style scoped>
    .stu-list-item {
        margin-top: -15px;
    }
    .stu-mystudy{
        margin-top: -15px;
    }
</style>
<script>
    module.exports = require('./hpmystudy.js');
</script>