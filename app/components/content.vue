<template>
        <div class="stu-container stu-container-padding">
            <transition>
                <router-view></router-view>
            </transition>
        </div>
</template>
<script>
    module.exports = {
        name: 'content'
    }
</script>