<template>
    <div class="content">
        <div class="head">
            <div @click="goBack" class="left">
                <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                <span>作业表现</span>
            </div>
            <heads></heads>
        </div>
        <div class="cont">
            <div class="title">
                <img class="head_img" src="@/assets/student/tp_sy_img11@3x.png" alt="">
                <div class="info_right">
                    <div class="info_rt">
                        <span class="rt_name">牛顿</span>
                        <div class="sign">
                            <img src="@/assets/student/icon_sy_touxian@3x.png" alt="">
                            <span>至尊王者</span>
                        </div>
                        <div class="progress">
                            <div :style="{width:width+'px'}" class="pro"></div>
                            <span class="pro_tip">100/202</span>
                        </div>
                        <span class="level">15级</span>
                    </div>
                    <div class="info_rbot">
                        <span>总分：548</span>
                        <span>得分率：85%</span>
                    </div>
                </div>
            </div>
            <div class="contItem" v-for="i in 5" :key="'itme'+i">
                <span>第一次作业</span>
                <span>3分</span>
                <span>提交2次</span>
            </div>
        </div>
    </div>
</template>

<script>
import heads from '@/components/head'
export default {
    components:{heads},
    data(){
        return{
            width:'100'
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
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
    .cont{
        width: 1200px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        .title{
            width: 100%;
            height: 130px;
            border-bottom: 1px solid #e5e5e5;
            display: flex;
            align-items: center;
            .head_img{
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
            .info_right{
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                .info_rt{
                    display: flex;
                    align-items: center;
                    color: #151515;
                    .rt_name{
                        font-size: 17px;
                    }
                    .sign{
                        margin:0 13px 0 20px;
                        display: flex;
                        align-items: center;
                        font-size: 17px;
                        img{
                            width: 16px;
                            height: 20px;
                            margin-right: 7px;
                        }
                    }
                    .progress{
                        width: 206px;
                        height: 20px;
                        border: 2px solid #2c58ab;
                        border-radius: 5px;
                        margin-right: 20px;
                        position: relative;
                        .pro{
                            position: absolute;
                            top: 0;
                            left: 0;
                            border-radius: 3px;
                            height: 16px;
                            background: #2c58ab;
                            z-index: 1;                    
                        }
                        .pro_tip{
                            font-size: 8px;
                            position: absolute;
                            top: 10%;
                            left: 45%;
                            z-index: 2;
                        }
                    }
                    .level{
                        font-size: 17px;
                        color: red;
                    }
                }
                .info_rbot{
                    margin-top: 5px;
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    color: #151515;
                    span{
                        margin-right: 20px;
                    }
                }
            }
        }
        .contItem{
            width: 100%;
            border-bottom: 1px solid #e5e5e5;
            height: 110px;
            display: flex;
            align-items: center;
            font-size: 17px;
            color: #151515;
            padding-left: 30px;
            span{
                margin-right: 65px;
            }
            span:last-child{
                border-bottom: none;
            }
        }
    }
}
</style>