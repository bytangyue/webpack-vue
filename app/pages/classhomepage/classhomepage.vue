<template>
    <div class="stu-classhomepage two-columns">
        <div class="left-box">
            <div class="top-left two-columns">
                <div class="left-box"><img class="photo" src="../../../assets/images/default.png" alert="加载中"></div>
                <div class="right-box class-info">
                    <h1 class="title">{{resultObject.className}}({{resultObject.stuCount}}人)</h1>
                    <ul>
                        <li class="li-wid"><span>班主任：</span>{{resultObject.headMaster}}</li>
                        <li class="li-wid"><span>助教：</span>{{resultObject.teachTeacher}}</li>
                        <li class="li-wid"><span>班长：</span>{{resultObject.classMonitor}}</li>
                        <li class="li-wid"><span>技术总监：</span>{{resultObject.techDirector}}</li>
                        <li class="classSlogan"><span>班级口号：</span>{{resultObject.classSlogan}}</li>
                        <li><span>班歌：</span>{{resultObject.classSong}}</li>
                    </ul>
                </div>
            </div>

            <div class="bottom-left dynamic">
                <el-tabs :active-name="activeName">
                    <el-tab-pane label="全部动态" name="first">
                        <ul class="dynamic-list">
                            <li class="two-columns" v-for="item in resultObjectInfostate.items">
                                <img class="person-pho" src="../../../assets/images/photo3.png" />
                                <div class="descrip">
                                    <div class="two-columns">
                                        <h2>{{item.studentName}}</h2>
                                        <p><i class="iconfont">&#xe620;</i><span class="fs-bold">{{item.up}}</span></p>
                                    </div>
                                    <div class="two-columns">
                                        <div>在{{item.finishTimeStr}}  完成了 <span class="titleName">{{item.titleName}}</span></div>
                                        <div class="finishnum">已有<span class="fs-bold">{{item.finishCount}}</span>人完成</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="more">查看更多</div>
                    </el-tab-pane>
                    <el-tab-pane label="特别关注" name="second">特别关注</el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <div class="right-box">
            <div class="top-right">
                <stu-tag-sign signName="值日表"></stu-tag-sign>
                <ul class="duty-list">
                    <li v-for="item in resultObjectDuty">
                        •周一&nbsp;{{item.teachDate}}<span class="stuname">{{item.students}}</span>
                    </li>
                </ul>
            </div>
            <div class="content-right">
                <el-tabs :active-name="activeName">
                    <el-tab-pane label="小组排名" name="first">
                        <ul class="rank-list">
                            <li v-for="item in resultObjectRank" class="two-columns">
                                <div><span class="green">1</span>{{item.groupName}}</div>
                                <div><i class="iconfont fen">&#xe606;</i>{{item.scoreAvg}}</div>
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="bottom-right">
                <stu-tag-sign signName="同班同学"></stu-tag-sign>
                <ul class="student-list stu-after-clear">
                    <li v-for="item in resultObjectStu.items">
                        <img src="../../../assets/images/photo3.png"/>
                        <div class="mate-hover">
                            <div>关注 {{item.concernCount}}</div>
                            <el-button class="btn-care">+ 关注</el-button>
                        </div>
                        <p>{{item.studentName}}</p>
                    </li>
                </ul>
                <div class="page-switch"><i class="iconfont">&#xe61f;</i> <i class="iconfont">&#xe613;</i></div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    module.exports=require('./classhomepage');
    require('./classhomepage.less');
    module.exports ={
        data:function(){
            return{
                msg:'hello vue',
                resultObject:{
                    classMonitor: "双元一",
                    className: "我是超级无敌长的学科我是超级无敌长的学科就业班120期",
                    classPic: "/attachmentCenter/download?aid=ff80808153897cd6015396e215a40068",
                    classSlogan: "20160304黄转学科JAVA双元班是最棒的，加油！",
                    classSong: "阳光总在风雨后",
                    headMaster: "欣欣",
                    id: "ff808081533f464901533fbc367f0155",
                    stuCount: 15,
                    teachTeacher: "王晓霞",
                    techDirector: "双元二"
                },
                activeName: 'first',
                resultObjectDuty:[
                    {"classDutyId":"402881f55708aed3015708d117560036","teachDate":"2016-12-12","students":"李刚"},
                    {"classDutyId":"402881f55708aed3015708d117560037","teachDate":"2016-12-14","students":"李刚"},
                    {"classDutyId":"402881f55708aed3015708d117560038","teachDate":"2016-12-16","students":"李刚"},
                    {"classDutyId":"402881f55708aed3015708d117560039","teachDate":"2016-12-18","students":"李刚"},
                    {"classDutyId":"402881f55708aed3015708d11756003a","teachDate":"2016-12-20","students":"李刚"}
                ],
                resultObjectRank:[
                    {"groupId":"402881f557a71bd20157a764ce7d000b","groupName":"第三组","scoreAvg":0},
                    {"groupId":"402881f557a71bd20157a764ba310009","groupName":"第二组","scoreAvg":0},
                    {"groupId":"402881f55708aed3015708d35a0f0194","groupName":"第一组","scoreAvg":0}
                ],
                resultObjectStu:{
                    "items":[
                        {"id":"402881f557b6714f0157b67d8a5f0004","studentName":"李峰","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"4028998156b1ea840156b21a3c7e0019","studentName":"上岛咖啡","concernCount":1,"concernedCount":0,"isConcern":false},
                        {"id":"402881f557b6714f0157b684ef2a0006","studentName":"史蒂芬","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"4028998156b1ea840156b21b52aa001b","studentName":"星巴克咖啡","headPhoto":"2c908191586bf3cb0158718398e10061","concernCount":0,"concernedCount":2,"isConcern":false},
                        {"id":"402881f5574526ff015745513e1c0001","studentName":"李鹏","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"402881f557b6714f0157b6856cae0008","studentName":"斯蒂芬","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"402881f55799bd50015799c9a5ad0000","studentName":"李波","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"402881f5579dbdd801579dd5859b0002","studentName":"测试","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"402881f5579e321c01579e3601060001","studentName":"测试李","concernCount":0,"concernedCount":0,"isConcern":false},
                        {"id":"402881f557b6ed880157b6fae3d50002","studentName":"水电费","concernCount":0,"concernedCount":0,"isConcern":false}
                    ],
                    "totalCount":16,
                    "totalPageCount":2,
                    "pageSize":10,
                    "currentPage":1
                },
                resultObjectInfostate:{
                    "items":[
                        {"studentName":"星巴克咖啡","finishTimeStr":"2016-12-14 11:46:10","headPhoto":"2c908191586bf3cb0158718398680060","up":0,"isUp":false,"finishCount":1,"comment":0,"targetId":"2c90819158dc78010158fb6de9ed008a","stateType":2,"studentId":"4028998156b1ea840156b21b52aa001b","finishTime":"Dec 14, 2016 11:46:10 AM","titleName":"测试上次附件","state":true,"id":"2c90809f58fb6abf0158fb6ffad20015","isDelete":false},
                        {"studentName":"飞过海","finishTimeStr":"2016-12-01 13:18:11","up":0,"isUp":false,"finishCount":12,"comment":0,"targetId":"72","stateType":2,"studentId":"402881f557b6ed880157b7013a8d0004","finishTime":"Dec 1, 2016 1:18:11 PM","titleName":"Day43-面向对象阶段第3天-第3套","state":true,"id":"2c90819158b4b7240158b8d18ea50016","isDelete":false},
                        {"studentName":"娃娃","finishTimeStr":"2016-12-01 12:50:18","up":0,"isUp":false,"finishCount":1,"comment":0,"targetId":"79","stateType":2,"studentId":"2c90819157f973860157faf1c4cb0005","finishTime":"Dec 1, 2016 12:50:18 PM","titleName":"Day41-面向对象阶段第1天-第2套","state":true,"id":"2c90819158b4b7240158b8b807840015","isDelete":false},
                        {"studentName":"星巴克咖啡","finishTimeStr":"2016-12-01 11:40:47","headPhoto":"2c908191586bf3cb0158718398680060","up":0,"isUp":false,"finishCount":2,"comment":0,"targetId":"73","stateType":2,"studentId":"4028998156b1ea840156b21b52aa001b","finishTime":"Dec 1, 2016 11:40:47 AM","titleName":"Day42-面向对象第2天-第3套卷","state":true,"id":"2c90819158b4b7240158b87861bf0014","isDelete":false},
                        {"studentName":"星巴克咖啡","finishTimeStr":"2016-12-01 11:40:15","headPhoto":"2c908191586bf3cb0158718398680060","up":0,"isUp":false,"finishCount":1,"comment":0,"targetId":"77","stateType":2,"studentId":"4028998156b1ea840156b21b52aa001b","finishTime":"Dec 1, 2016 11:40:15 AM","titleName":"Day43-面向对象阶段第3天-第1套","state":true,"id":"2c90819158b4b7240158b877e6040013","isDelete":false},
                        {"studentName":"测试李","finishTimeStr":"2016-12-01 11:35:32","up":0,"isUp":false,"finishCount":12,"comment":0,"targetId":"72","stateType":2,"studentId":"402881f5579e321c01579e3601060001","finishTime":"Dec 1, 2016 11:35:32 AM","titleName":"Day43-面向对象阶段第3天-第3套","state":true,"id":"2c90819158b4b7240158b87393620012","isDelete":false},
                        {"studentName":"李鹏","finishTimeStr":"2016-12-01 11:31:15","up":0,"isUp":false,"finishCount":2,"comment":0,"targetId":"73","stateType":2,"studentId":"402881f5574526ff015745513e1c0001","finishTime":"Dec 1, 2016 11:31:15 AM","titleName":"Day42-面向对象第2天-第3套卷","state":true,"id":"2c90819158b4b7240158b86fa8330011","isDelete":false},
                        {"studentName":"李鹏","finishTimeStr":"2016-12-01 11:30:50","up":0,"isUp":false,"finishCount":1,"comment":0,"targetId":"75","stateType":2,"studentId":"402881f5574526ff015745513e1c0001","finishTime":"Dec 1, 2016 11:30:50 AM","titleName":"Day3-JAVA语法基础阶段第3天-第4套","state":true,"id":"2c90819158b4b7240158b86f44ef0010","isDelete":false}
                    ],
                    "totalCount":49,
                    "totalPageCount":7,
                    "pageSize":8,
                    "currentPage":1
                }
            }
        },
        methods:{
            attention:function(){
                alert("click");
            }
        }
    }
</script>