<template>
    <div class="stu-detail">
        <stu-breadcrumb :bcItems="brdata"></stu-breadcrumb>
        <div>
            <el-tabs :active-name="activeName">
                <el-tab-pane label="PPT" name="first" class="fist-p">
                    <img src="../../../../assets/images/banner-bg.png" alt="" >
                    <el-button class="btn-p btn-t">预览课件</el-button>
                </el-tab-pane>
                <el-tab-pane label="视频" name="second" class="third">视频</el-tab-pane>
                <el-tab-pane label="文字讲义" name="third" class="third">
                    <el-button class="btn-t">讲义下载</el-button>
                </el-tab-pane>
                <el-tab-pane label="在线资源" name="fourth" class="third">
                    <el-button class="btn-t">资源下载</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    require('./studaydetail.less');
    module.exports=require('./studaydetail');


</script>