<template>
    <div class="content">
        <div class="head">
            <div class="head">
                <div @click="goBack" class="left">
                    <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                    <span>错题</span>
                </div>
                <heads></heads>
            </div>
        </div>
        <div class="line"></div>
        <div class="navList">
            <div :class="navIndex == index ? 'nav active' : 'nav'" @click="selectNav(index)" v-for="(item,index) in navList" :key="index">{{item}}</div>
        </div>
        <div class="cont">
            <div class="errorList">
                <div class="errorItem">
                    <div class="top">
                        <div class="topLeft">
                            <span>1、判断题</span>
                            <span>分值：10.0</span>
                        </div>
                        <div class="topRight">
                            <div class="sign">小数加法</div>
                            得分：<div class="score">0</div>
                        </div>
                    </div>
                    <div class="sub_title">在人的一生中，遇见知己是很容易的。</div>
                    <div class="answer">
                        <div class="answer_item">
                            <img class="selected" src="@/assets/student/icon_sy_xz_pre@3x.png" alt="">对
                            <img class="err_img" src="@/assets/student/icon_sy_cw@3x.png" alt="">
                        </div>
                        <div class="answer_item">
                            <img class="unSelected" src="@/assets/student/icon_sy_wxz@3x.png" alt="">错
                        </div>
                        <div class="answer_item">
                            <img class="unSelected" src="@/assets/student/icon_sy_zqda@3x.png" alt="">对还是错
                        </div>
                    </div>
                </div>
                <div class="errorItem">
                    <div class="top">
                        <div class="topLeft">
                            <span>2、简答题</span>
                            <span>分值：10.0</span>
                        </div>
                        <div class="topRight">
                            <div class="sign">小数减法</div>
                            得分：<div class="score">2</div>
                        </div>
                    </div>
                    <div class="sub_title">什么是世界？</div>
                    <div class="answer">
                        <div class="mineAnswer">
                            <img class="err_img" src="@/assets/student/icon_sy_cw@3x.png" alt="">
                            哈啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        </div>
                        <div class="correctAnswer">
                            <h5>正确答案</h5>
                            哈啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        </div>
                    </div>
                </div>
            </div>
            <div class="related">
                <div class="relatedItem">
                    <div class="relate_title">
                        <span>相关推荐：</span>
                        <div class="type">小数加法</div>
                    </div>
                    <div class="relateSubject" v-for="i in 3" :key="i">题目二</div>
                </div>
                <div class="relatedItem">
                    <div class="relate_title">
                        <span>相关推荐：</span>
                        <div class="type">小数减法</div>
                    </div>
                    <div class="relateSubject" v-for="i in 3" :key="i">题目一</div>
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
            navList:['全部错题','单选题','多选题','判断题','简答题'],
            navIndex:0
        }
    },
    methods:{
        selectNav(index){
            this.navIndex = index
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
        background:  #e5e5e5;
    }
    .navList{
        display: flex;
        align-items: center;
        width: 1200px;
        margin-top: 20px;
        .nav{
            width: 156px;
            height: 46px;
            border: 2px solid #e5e5e5;
            border-radius: 5px;
            text-align: center;
            line-height: 46px;
            font-size: 17px;
            margin-right: 40px;
            cursor: pointer;
        }
        .active{
            border-color: #2c58ab;
            color: #2c58ab;
        }
    }
    .cont{
        display: flex;
        width: 1200px;
        margin-top: 20px;
        .errorList{
            margin-right: 10px;
            .errorItem{
                width: 886px;
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                padding: 18px 18px 40px;
                margin-bottom: 10px;
                .top{
                    font-size: 19px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .topLeft{
                        span{
                            margin-right: 10px;
                        }
                    }
                    .topRight{
                        display: flex;
                        align-items: center;
                        .sign{
                            line-height: 30px;
                            color: #fff;
                            background: #2c58ab;
                            text-align: center;
                            font-size: 17px;
                            border-radius: 5px;
                            margin-right: 20px;
                            padding: 0 20px;
                        }
                        .score{
                            color: red;
                            border-bottom: 2px solid #333;
                            padding: 0 10px;
                        }
                    }
                }
                .sub_title{
                    font-size: 17px;
                    text-indent: 34px;
                    margin-top: 10px;
                }
                .answer{
                    display: flex;
                    margin-left: 25px;
                    margin-top: 40px;
                    .answer_item{
                        display: flex;
                        align-items: center;
                        position: relative;
                        font-size: 15px;
                        margin-right: 169px;
                        .selected,.unSelected{
                            width: 25px;
                            height: 25px;
                            margin-right: 16px;
                        }
                        .err_img{
                            position: absolute;
                            top: 0;
                            left: 20px;
                            width: 66px;
                            height: 67px;
                        }
                    }
                    .mineAnswer,.correctAnswer{
                        width: 390px;
                        border: 2px solid #e5e5e5;
                        border-radius: 5px;
                        padding: 10px;
                        font-size: 19px;
                    }
                    .mineAnswer{
                        margin-right: 20px;
                        position: relative;
                        .err_img{
                            position: absolute;
                            width: 66px;
                            height: 67px;
                            top: 20px;
                            left: 130px;
                        }
                    }
                    .correctAnswer{
                        position: relative;
                        h5{
                            position: absolute;
                            font-size: 19px;
                            top: -40px;
                            left: -3px;
                        }
                    }
                }
            }
        }
        .related{
            width: 200px;
            .relatedItem{
                margin-bottom: 25px;
                .relate_title{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 5px;
                    span{
                        font-size: 19px;
                    }
                    .type{
                        width: 80px;
                        height: 25px;
                        border-radius: 5px;
                        background: #2c58ab;
                        color: #fff;
                        text-align: center;
                        line-height: 25px;
                    }
                }
                .relateSubject{
                    width: 100%;
                    height: 35px;
                    border: 2px solid #e5e5e5;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 35px;
                    font-size: 17px;
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>