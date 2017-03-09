/**
 * Created by Administrator on 2016/12/14.
 */
var com = require('../../../common/common');
var wisdom = require('../wisdomdata');
module.exports = {
    name: 'bottomleft',
    mounted: function () {
        this.tickling.curTickClass = com.pushActClass(this.tickling.respData, 0);
        this.tickling.htmlData = this.tickling.respData[0];
        var eluionData = wisdom.evaluation;
        this.evaluation.wisData = com.findWisDomIndex(eluionData);
    },
    data: function () {
        return {
            tickling: {
                curTickClass: [],
                htmlData: {},
                respData: [
                    {
                        col0: '第22天学习目标反馈卷--',
                        col1: '10',
                        col2: '08-17 15:46:00',
                        col3: '08-17 15:46:00'
                    },
                    {
                        col0: '第23天学习目标反馈卷',
                        col1: '10',
                        col2: '08-17 15:46:00',
                        col3: '08-17 15:46:00'
                    },
                    {
                        col0: '第24天学习目标反馈卷',
                        col1: '10',
                        col2: '08-17 15:46:00',
                        col3: '08-17 15:46:00'
                    }
                ]
            },
            evaluation: {
                wisData: {}
            }
        }
    },
    methods: {
        changTickData: function (index) {
            this.tickling.curTickClass = com.pushActClass(this.tickling.respData, index);
            this.tickling.htmlData = this.tickling.respData[index];
        }
    }
}