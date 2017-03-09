<template>
    <div id="app" class="main-container">
        <router-view name="sidebar"></router-view>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>
<style scoped>
    .main-container{
        display: flex;
        flex-direction:column;
        min-height: 100vh;
    }
</style>
<script>
    module.exports = {
        name: 'app'
    }
</script>
