<template>
    <div class="tagsign"><i class="iconfont">&#xe63d;</i>{{signName}}</div>
</template>
<style scoped>
    .tagsign {
        font-size: 15px;
        border-bottom: 1px solid #ecf0f5;
        padding-bottom: 10px;
    }
    .tagsign > .iconfont{
       color: #ff471c;
        margin-left: -5px;
    }
</style>
<script>
    module.exports = {
        props: {
            signName:{
               type: String,
               default: ''
           }
        }
    }
</script>