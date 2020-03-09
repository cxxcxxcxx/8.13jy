<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <span @click="goBack">课堂</span>
                <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                <span>测试</span>
            </div>
            <heads></heads>
        </div>
        <div class="testItem">
            <div class="left">
                <div class="ltop">
                    <div class="staing">正在进行</div>
                    <div class="data">20/02/01 22:22</div>
                </div>
                <div class="lbot">
                    <img src="@/assets/student/icon_sy_kj@3x.png" alt="">
                    <span>测试一</span>
                </div>
            </div>
            <button @click="goTest">查看测试</button>
        </div>
        <div class="testItem">
            <div class="left">
                <div class="ltop">
                    <div class="staing staes">待完成</div>
                    <div class="data">20/02/01 22:22</div>
                </div>
                <div class="lbot">
                    <img src="@/assets/student/icon_sy_kj@3x.png" alt="">
                    <span>测试一</span>
                </div>
            </div>
            <button class="active">查看测试</button>
        </div>
        <div class="testItem">
            <div class="left">
                <div class="ltop">
                    <div class="staing staed">已结束</div>
                    <div class="data">20/02/01 22:22</div>
                </div>
                <div class="lbot">
                    <img src="@/assets/student/icon_sy_kj@3x.png" alt="">
                    <span>测试一</span>
                </div>
            </div>
            <button class="active">查看测试</button>
        </div>
    </div>
</template>

<script>
import heads from '@/components/head'
export default {
    components:{heads},
    methods:{
        goTest(){
            this.$router.push({path:'/testing'})
        },
        goBack(){
            this.$router.replace({path:'/class'})
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
    .testItem{
        width: 1200px;
        height: 116px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 98px 0 18px;
        margin-top: 20px;
        .left{
            .ltop{
                display: flex;
                align-items: center;
                font-size: 14px;
                .staing{
                    padding: 8px 7px;
                    background: red;
                    border-radius: 5px;
                    margin-right: 9px;
                    color: #fff;
                }
                .staes{
                    background: #eca720;
                }
                .staed{
                    background: #2c58ab;
                }
                .data{
                    color: #8f8f8f;
                }
            }
            .lbot{
                font-size: 18px;
                margin-top: 20px;
                img{
                    width: 37px;
                    height: 34px;
                    margin-right: 11px;
                }
            }
        }
        button{
            height: 50px;
            background: #2c58ab;
            line-height: 50px;
            color: #fff;
            font-size: 16px;
            margin-top: 30px;
            cursor: pointer;
        }
        .active{
            background: #fff;
            border: 2px solid #e5e5e5;
            color: #151515;
        }
    }
}
</style>