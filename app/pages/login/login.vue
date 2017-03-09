<template>
    <div class="stu-login">
        <div class="logo">
            <div class="warning bowerSupport">
                <i class="iconfont icon login-warning"></i> 提示：目前本系统适配火狐浏览器、Google Chrome、Safari(苹果浏览器)，其它浏览器可能无法完美运行!(不建议使用)
            </div>
            <img src="../../../assets/images/logo.png">
        </div>
        <div class="banner">
            <form class="login-box">
                <h3 class="title">博学谷学员系统</h3>
                <p class="errorInfo" v-if="false">请输入用户名或密码</p>
                <div class="input-group">
                    <span class="input-group-label input-user"><i class="iconfont">&#xe60a;</i></span>
                    <input type="text" class="form-field" v-model="login.userName">
                    <span class="input-group-label input-clear" @click="clearTex"><i class="iconfont">&#xe602;</i></span>
                </div>
                <div class="input-group">
                    <span class="input-group-label input-user"><i class="iconfont">&#xe608;</i></span>
                    <input type="text" class="form-field" v-model="login.pwd">
                    <span class="input-group-label input-clear" @click="clearPwd"><i class="iconfont">&#xe602;</i></span>
                </div>
                <button class="loginBtn" type="button" @click="checkCookie">登录</button>
            </form>
        </div>
        <div class="foot">江苏传智播客教育科技有限公司   主办</div>
    </div>
</template>
<script>
//    module.exports= require('./login');
    require('./login.less');
    module.exports = {
        name: 'login',
        data: function(){
            return {
                login: {
                    userName:'',
                    pwd:''
                }
            }
        },
        methods:{
            checkCookie:function(){
                alert(this.login.userName);
            },
            //清空输入框
            clearTex:function(){
                this.login.userName = '';
            },
            clearPwd:function(){
                this.login.pwd = '';
            }
        }
    };
</script>






