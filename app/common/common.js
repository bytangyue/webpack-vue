/**
 * Created by Administrator on 2016/12/14.
 */
module.exports = {
    /**
     * 根据接口返回的数据填充激活class的状态
     * @param respData 返回的数据【必须是数组】
     * @param curIndex  当前下标添加激活class
     * @returns {Array}
     */
    pushActClass: function (respData, curIndex) {
        var curTickClass = [];
        for (var i = 0; i < respData.length; i++) {
            if (i == curIndex) {
                curTickClass.push(true);
            } else {
                curTickClass.push(false);
            }
        }
        return curTickClass;
    },
    findWisDomIndex: function (wisdomData) {
        var myDate = new Date();
        var hours = myDate.getHours();//获取当前小时数(0-23)
        var wisTotalNum = wisdomData.length;//名言警句的总长度
        var curWisIndex = 0;
        if (hours >= wisTotalNum) {
            curWisIndex = hours % wisTotalNum;
        } else {
            curWisIndex = hours;
        }
        //console.log(curWisIndex, '当前第几个名言');
        return wisdomData[curWisIndex];
    }
}