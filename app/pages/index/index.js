/**
 * Created by ty on 2016/12/1.
 */
var wisdomData = require('./wisdomdata');
module.exports = {
    name: 'index',
    components: {
        'bottom-left': require('./bottomleft/bottomleft.vue')
    },
    mounted: function () {//加载完就执行，相当于jquery的$(document).ready(function(){})
        //console.log("加载完成", this.$route);
    },
    data: function () {
        return {
            scheduleIndex: 1,
            scheduleSign: '今日',
            mySchedule: wisdomData.mySchedule
        }
    },
    methods: {
        changeScheduleDate: function (direction) {
            var dateTxt = ['昨日', '今日', '明日'];
            if (direction === 'left') {//左
                if (this.scheduleIndex<=0) {
                    return;
                }
                this.scheduleIndex--;
            } else {//右
                if (this.scheduleIndex>=2) {
                    return;
                }
                this.scheduleIndex++;
            }
            this.scheduleSign = dateTxt[this.scheduleIndex];
        }
    }
}