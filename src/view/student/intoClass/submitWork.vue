<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <span>一年级语文</span>
                <img src="../../../assets/student/icon_sy_xyg@3x.png" alt="">
                <span>作业一</span>
                <span class="data">截止日期：19/10/10 12:00</span>
            </div>
            <heads></heads>
        </div>
        <router-view></router-view>        
    </div>
</template>

<script>
import heads from '@/components/head'
export default {
    components:{heads},
    data(){
        return{
            sbmitModal:false
        }
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.content{
    .head{
        .left{
            height: 100%;
            display: flex;
            align-items: center;
            span{
               font-size: 19px;
            }
            img{
                width: 8px;
                height: 14px;
                margin: 0 10px 0 9px;
            }
            .data{
                margin-left: 20px;
                font-size: 14px;
            }
        }
    }
}
</style>