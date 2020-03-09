<template>
    <div class="content">
        <div class="head">
            <div @click="goBack" class="left">
                <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                <span>课堂表现</span>
            </div>
            <heads></heads>
        </div>
        <div class="info_top">
            <div class="info">
                <img class="head_img" src="@/assets/student/tx_sy_img12@3x.png" alt="">
                <div class="right">
                    <span class="name">00001&nbsp;&nbsp;&nbsp;&nbsp;牛顿</span>
                    <div class="infoBotm">
                        <div class="group">组别</div>
                        <div class="groupNum">
                            <span>01</span>
                            <img src="@/assets/student/icon_sy_xl_fz@3x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="selectData">
                <div @mouseenter="enterYear" @mouseleave="leaveYear" class="yearSelect">
                    <span>{{year}}</span>
                    <img src="@/assets/student/icon_sy_xl_rq@3x.png" alt="">
                    <div v-if="yearModal" class="year_modal">
                        <div :style="{background:selYear==i?'#2c58ab' :'#fff',color:selYear==i?'#fff':''}" @mouseenter="enterYearItem(i)" v-for="i in 5" :key="'year'+i">2019年</div>
                    </div>
                </div>
                <div @mouseenter="enterMonth" @mouseleave="leaveMonth" class="monthSelect">
                    <span>{{month}}月</span>
                    <img src="@/assets/student/icon_sy_xl_rq@3x.png" alt="">
                    <div v-if="monthModal" class="month_modal">
                        <div @mouseenter="enterMonthItem(i)" :style="{background:month==i?'#2c58ab' :'#fff', color:month==i?'#fff':''}" v-for="i in 12" :key="'year'+i">{{i}}月</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contList">
            <div v-for="i in 5" :key="'itme'+i" class="listItem">
                <div class="itemTitle">
                    <span class="name">一年级数学</span>
                    <span class="data">2019.09.23  12:00</span>
                </div>
                <div class="itemCont">
                    <span>积极回答问题：+5分，</span>
                    <span>大声说话：-3分，</span>
                    <span>扰乱纪律：-5分</span>
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
            yearModal:false,
            monthModal:false,
            selYear:Number,
            year:'2020年',
            month:'9'
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        enterMonthItem(i){
            this.month = i
        },
        enterMonth(){
            this.monthModal = true
        },
        leaveMonth(){
            this.monthModal = false
        },
        enterYearItem(i){
            this.selYear = i
        },
        enterYear(){
            this.yearModal = true
        },
        leaveYear(){
            this.yearModal = false
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
    .info_top{
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .info{
            display: flex;
            align-items: center;
            .head_img{
                width: 88px;
                height: 100px;
                margin-right: 25px;
            }
            .right{
                display: flex;
                flex-direction: column;
                .name{
                    font-size: 20px;
                }
                .infoBotm{
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    .group{
                        width: 69px;
                        height: 39px;
                        background: #2c58ab;
                        color: #fff;
                        text-align: center;
                        line-height: 39px;
                        font-size: 19px;
                        border-radius: 5px;
                        margin-right: 15px;
                    }
                    .groupNum{
                        font-size: 20px;
                        img{
                            width: 20px;
                            height: 13px;
                            margin-left: 12px;
                        }
                    }
                }
            }
        }
        .selectData{
            display: flex;
            align-items: center;
            .yearSelect,.monthSelect{
                width: 196px;
                height: 45px;
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                display: flex;
                align-items: center;
                font-size: 15px;
                padding: 0 20px;
                justify-content: space-between;
                margin-right: 30px;
                position: relative;
                img{
                    width: 14px;
                    height: 8px;
                }
                .year_modal,.month_modal{
                    position: absolute;
                    left: -1px;
                    top: 41px;
                    width: 196px;
                    height: auto;
                    border: 2px solid #e5e5e5;
                    border-radius: 5px;
                    div{
                        width: 100%;
                        height: 38px;
                        border-bottom: 1px solid #e5e5e5;
                        text-align: center;
                        line-height: 38px;
                        cursor: pointer;
                    }
                    div:first-child{
                        border-radius: 5px 5px 0 0;
                    }
                    div:last-child{
                        border-radius: 0 0 5px 5px;
                        border-bottom: none;
                    }
                }
            }
        }
    }
    .contList{
        width: 1200px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        margin-top: 15px;
        .listItem{
            width: 1200px;
            height: 110px;
            border-bottom: 1px solid #e5e5e5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .itemTitle{
                padding-left: 20px;
                display: flex;
                align-items: center;
                font-size: 18px;
                margin-bottom: 15px;
                .name{
                    margin-right: 17px;
                }
            }
            .itemCont{
                padding-left: 30px;
                font-size: 16px;
                span{
                    margin-right: 60px;
                }
                span:last-child{
                    border-bottom: none
                }
            }
        }
    }
}
</style>