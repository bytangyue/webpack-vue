<template>
    <div class="stu-wisdom" :style="{ height : wisdomOption.smallHeight + 'px'}">
        <div class="bq-wrapper" :class="[wisdomOption.imgType,wisdomOption.wisSize]">
            <div class="big-con" :style="{ width : wisdomOption.bigWidth + 'px'}">
                <i class="iconfont">&#xe63c;</i>
                <div class="blockquote">
                    <span class="con-span">{{wisdomOption.wisCon}}</span>
                    <div class="cite">——&nbsp;{{wisdomOption.wisAuthor}}</div>
                    <span class="small" v-if="wisdomOption.isShowSmallTip">{{wisdomOption.smallTip}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    require('./wisdom.less');
    module.exports = {
        props: {
            wisdomOption: {
                type: Object,
                required: true,
                default: {
                    bigWidth: '',
                    smallHeight: '',
                    imgType: 'shan-img',
                    wisSize: 'blank-small',
                    wisCon: '这里放名言警句的内容',
                    wisAuthor: '这里写作者',
                    isShowSmallTip: false,
                    smallTip: '这是具体小标题描述'
                }
            }
        }
    }
</script>