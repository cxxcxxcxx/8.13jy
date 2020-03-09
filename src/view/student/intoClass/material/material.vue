<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <span @click="goBack">课堂</span>
                <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                <span>资料</span>
            </div>
            <heads></heads>
        </div>
        <div @click="pull" class="materialItem">
            <img class="pull" src="@/assets/student/icon_sy_sl@3x.png" alt="">
            <img class="sign" src="@/assets/student/icon_sy_kj@3x.png" alt="">
            <div class="info">
                <span class="name">数学资料一</span>
                <span class="time">创建时间：2019-10-10 12:00</span>
            </div>
            <div v-if="show" class="contList">
                <div class="contItem" v-for="i in 3" :key="i">
                    <span class="itemName">数学资料一  第一部分</span>
                    <button @click="toSee">查看</button>
                </div>
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
            show:false
        }
    },
    methods:{
        toSee(){
            this.$router.push({path:'/materialDetail'})
        },
        pull(){
            this.show == true ? this.show = false : this.show = true
        },
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
    .materialItem{
        width: 1200px;
        height: 76px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        position: relative;
        .pull{
            cursor: pointer;
            width: 19px;
            height: 12px;
            margin: 0 16px 0 10px;
        }
        .sign{
            width: 37px;
            height: 34px;
            margin-right: 8px;
        }
        .info{
            display: flex;
            flex-direction: column;
            font-size: 18px;
            .time{
                font-size: 13px;
                color: #8f8f8f;
            }
        }
        .contList{
            position: absolute;
            right: 0;
            top: 74px;
            width: 1156px;
            height: auto;
            border: 2px solid #e5e5e5;
            border-radius: 5px;
            border-top: none;
            .contItem{
                width: 100%;
                height: 56px;
                border-bottom: 2px solid #e5e5e5;
                padding: 0 178px 0 23px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 18px;
                button{
                    width: 80px;
                    height: 40px;
                    background: #2c58ab;
                    color: #fff;
                    line-height: 40px;
                }
            }
            .contItem:first-child{
                border-radius: 5px 5px 0 0;
            }
            .contItem:last-child{
                border-radius: 0 5px 5px 0;
                border-bottom: none;
            }
        }
    }
}
</style>