<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <span @click="goBack">课堂</span>
                <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                <span>抽奖</span>
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
            
        }
    },
    methods:{
        goBack(){
            this.$router.replace('/class')
        }
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
               cursor: pointer;
            }
            img{
                width: 8px;
                height: 14px;
                margin: 0 10px 0 9px;
            }
        }
    }
}
</style>