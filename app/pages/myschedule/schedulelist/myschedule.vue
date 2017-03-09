<template>
    <div class="stu-schedulelist">
        <stu-breadcrumb :bcItems="brdata"></stu-breadcrumb>
        <el-table class="tablist"
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    align="center"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    property="day"
                    align="center"
                    label="星期"
                    width="120">
            </el-table-column>

            <el-table-column
                    showOverflowTooltip
                    show-overflow-tooltip="true"
                    property="courseName"
                    align="center"
                    label="课程"
                    width="320">
            </el-table-column>
            <el-table-column
                    property="classRoom"
                    align="center"
                    label="教师"
                    width="220">
            </el-table-column>
            <el-table-column
                    property="teacher"
                    align="center"
                    label="任课老师"
                    width="180">
            </el-table-column>
            <el-table-column
                    :context="_self"
                    inline-template
                    align="center"
                    label="操作">
                <div>
                    <router-link :to="{ name: 'veryday' }">进入学习</router-link>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    require('./myschedule.less');
    module.exports = require('./myschedule');
</script>