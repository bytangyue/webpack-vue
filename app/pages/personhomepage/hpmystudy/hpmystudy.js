/**
 * Created by Administrator on 2016/12/19.
 */
module.exports = {
    methods: {
        handleSizeChange:function(val) {
            console.log('每页', val, '条');
        },
        handleCurrentChange:function(val) {
            this.currentPage = val;
            console.log('当前页', val);
        }
    },
    data: function () {
        return {
            currentPage: 5
        };
    },
    mounted:function(){
        console.log(this.$route.params.id);
    }
}