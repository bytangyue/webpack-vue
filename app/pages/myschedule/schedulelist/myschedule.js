/**
 * Created by ty on 2016/12/1.
 * 我的课表
 */
module.exports = {
    name: 'myschedule',
    data: function(){
        return {
            brdata: [
                {
                    'url':'',
                    'name': '我的学习'
                },
                {
                    'url':'',
                    'name': '我的课表'
                }

            ],
            tableData: [{
                date: '2016-05-02',
                day : '星期一',
                courseName: '王小虎王小虎虎王小虎王小虎王小虎王小虎王小虎王小虎',
                classRoom: '12345班',
                teacher : '李露',

            }, {
                date: '2016-05-04',
                day : '星期一',
                courseName: '王小虎',
                classRoom: '12345班',
                teacher : '李露'

            }, {
                date: '2016-05-01',
                day : '星期一',
                courseName: '王小虎',
                classRoom: '12345班',
                teacher : '李露'

            }, {
                date: '2016-05-03',
                day : '星期一',
                courseName: '王小虎',
                classRoom: '12345班',
                teacher : '李露'
            }],
           // currentRow: null
        }
    },
    methods: {
        handleEdit:function(index, row) {
            console.log(index, row);
        },

    }
};