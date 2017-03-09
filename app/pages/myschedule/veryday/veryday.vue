<template>
    <div class="stu-study">
        <stu-breadcrumb :bcItems="brdata"></stu-breadcrumb>
        <div class="chapter">
            <ul class="chapter-u">
                <li>
                    <p class="section" @click="handleNodeClick"><i class="iconfont">&#xe60e;</i>javascript</p>
                    <ul class="Knowledge">
                        <li class="Knowledge-l">html <el-button class="stu-green-btn f-r btn-s"> <router-link :to="{ name: 'studaydetail' }">进入学习</router-link></el-button></li>
                        <li class="Knowledge-l">css <el-button class="stu-green-btn f-r btn-s">进入学习</el-button></li>
                        <li class="Knowledge-l">js <el-button class="stu-green-btn f-r btn-s">进入学习</el-button></li>
                    </ul>
                </li>
            </ul>
            <ul class="chapter-u">
                <li>
                    <p class="section"><i class="iconfont">&#xe60e;</i>javascript</p>
                    <ul class="Knowledge">
                        <li class="Knowledge-l">html <el-button class="stu-green-btn f-r btn-s">进入学习</el-button></li>
                        <li class="Knowledge-l">css <el-button class="stu-green-btn f-r btn-s">进入学习</el-button></li>
                        <li class="Knowledge-l">js <el-button class="stu-green-btn f-r btn-s">进入学习</el-button></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</template>
<style>

</style>
<script>
    require('./veryday.less');
    module.exports=require('./veryday');

</script>