<template>
    <div class="stu-breadcrumb-wrap">
        <span class="sbcw-span">当前位置：</span>
        <el-breadcrumb separator=">" class="sbcw-div">
            <el-breadcrumb-item
                    v-for="bcIte in bcItems"
                    :key="bcIte.id"
                    :to="bcIte.url">{{bcIte.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<style scoped>
    .stu-breadcrumb-wrap,.el-breadcrumb {
        font-size: 12px;
    }
    .stu-breadcrumb-wrap .sbcw-span {
        display: inline-block;
    }
    .stu-breadcrumb-wrap .sbcw-div {
        display: inline-block;
        position: relative;
        top:1px;
    }
</style>
<script>
    module.exports = {
        props: {
            bcItems: {
                default: {
                    url: '',
                    name: ''
                }
            }
        }
    }
</script>