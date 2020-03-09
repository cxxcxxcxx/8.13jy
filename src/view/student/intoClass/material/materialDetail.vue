<template>
    <div class="content">
        <div class="head">
            <div class="head">
                <div @click="goBack" class="left">
                    <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                    <span>资料一</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <images></images>
        <watchVideo></watchVideo>
        <format></format>
    </div>
</template>

<script>
import images from './images'
import watchVideo from '../homeWork/watchVideo'
import format from './format'
export default {
    components:{images, watchVideo, format},
    methods:{
        goBack(){
            this.$router.replace('/material')
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    .head{
        .left{
            cursor: pointer;
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
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background: #e5e5e5;
    }
}
</style>