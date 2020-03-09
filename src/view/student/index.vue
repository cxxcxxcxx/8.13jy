<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <div class="logo" @click="goIndex"></div>
                <span @click="concat" class="concat">联系我们</span>
            </div>
            <heads></heads>
        </div>
        <div class="list_title">
            <h2>全部课程</h2>
        </div>
        <div class="list_cont">
            <div class="gradeGenre list_cont_item">
                <h3>年级分类</h3>
                <ul>
                    <li v-for="(item,index) in gradeGenre" :key="index" :class="gradeGenreSel == index ? 'selected' : ''" @click="selectGradeGenre(index)">{{item}}</li>
                </ul>
            </div>
            <div class="classGenre list_cont_item">
                <h3>课程分类</h3>
                <ul>
                    <li v-for="(item,index) in classGenre" :key="index" :class="classGenreSel == index ? 'selected' : ''" @click="selectClass(index)">{{item}}</li>
                </ul>
            </div>
            <div class="gradeSelect list_cont_item">
                <h3>年级选择</h3>
                <ul>
                    <li v-for="(item,index) in gradeSelect" :key="index" :class="gradeSelectSel == index ? 'selected' : ''" @click="selectGradeSel(index)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="cont">
            <div class="cont_nav">
                <ul>
                    <li :class="nav == index ? 'selected' :''" v-for="(item,index) in contNav" :key="'nav'+index" @click="selectNav(index)">{{item}}</li>
                </ul>
                <div class="area">
                    <input type="text" value="￥">
                    <span>——</span>
                    <input type="text" value="￥">
                </div>
                <div class="search">
                    <input type="text" placeholder="搜索课程关键字">
                    <i class="iconfont icon-icon-test"></i>
                </div>
            </div>
            <div class="cont_class">
                <h3>线上课程</h3>
                <div class="list">
                    <div @click="intoRoom" class="item" v-for="i in 6" :key="i">
                        <div class="tip">未报名</div>
                        <img src="../../assets/student/tp_sy_img3@3x.png" alt="">
                        <div class="detail">
                            <h4>一年级语文春季习题讲解</h4>
                            <div class="botm">
                                <span>￥5.00</span>
                                <div class="btn" @click="goBuy">立即购买</div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>线下课程</h3>
                <div class="list">
                    <div class="item" v-for="i in 3" :key="i">
                        <div class="tip actived">已报名</div>
                        <img src="../../assets/student/tp_sy_img3@3x.png" alt="">
                        <div class="detail">
                            <h4>一年级语文春季习题讲解</h4>
                            <!-- <div class="botm">
                                <span>￥5.00</span>
                                <div class="btn">立即购买</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="page">
                <div :class="page != 1 ? 'prev have' : 'prev'" @click="prevPage">上一页</div>
                <div class="num"><span>{{page}}</span>/<span>{{pageSum}}</span></div>
                <div :class="page != pageSum ? 'next have' : 'next' " @click="nextPage">下一页</div>
            </div>
        </div>
        <!-- 购买弹框 -->
        <div v-if="visible" class="modal">
            <div @click="closeModal" class="mask"></div>
            <div class="modal_cont">
                <div class="top">
                    <img @click="closeModal" src="../../assets/student/icon_sy_cuo@3x.png" alt="">
                </div>
                <div class="modal_detail">
                    <img src="../../assets/student/tp_sy_img3@3x.png" alt="">
                    <div class="detail">
                        <h4>一年级语文春季习题讲解</h4>
                        <div class="botm">
                            <span>￥5.00</span>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div @click="pay(1)" class="btn_weixin">微信付款</div>
                    <div @click="pay(2)" class="btn_ali">支付宝付款</div>
                </div>
            </div>
        </div>
        <!-- 支付二维码弹框 -->
        <div v-if="payVisible" class="payCode">
            <div @click="closePay" class="mask"></div>
            <div class="code">
                <img src="../../assets/student/icon_sy_ewm@3x.png" alt="">
                <span>请打开{{payType}}扫码付款</span>
            </div>
        </div>
        <!-- 联系我们弹框 -->
        <div v-if="concatVisible" class="concatModal">
            <div @click="closeModal" class="mask"></div>
            <div class="concat_Modal">
                <div class="top">
                    <span></span>
                    <span>联系我们</span>
                    <img @click="closeModal" src="../../assets/student/icon_sy_cuo@3x.png" alt="">
                </div>
                <div class="concat_cont">
                    <img src="../../assets/student/icon_sy_ewm@3x.png" alt="">
                    <div class="right">
                        <span>联系人：张老师</span>
                        <span>联系方式：18888888888</span>
                        <span>联系地址：乌龙市乌龙镇乌龙山乌龙院</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import heads from '@/components/head'
export default {
    components:{
        heads
    },
    data(){
        return{
            gradeGenre:['不限','幼儿','小学','初中','高中','大学'],
            classGenre:['不限','语文','数学','生物','物理','化学'],
            gradeSelect:['不限','一年级','二年级','三年级','四年级','五年级','六年级'],
            contNav:['综合排序','免费','已报名课程','未报名课程'],
            gradeGenreSel:0,
            classGenreSel:0,
            gradeSelectSel:0,
            nav:0,
            pageSum:20,
            page:1,
            visible: false,
            payVisible:false,
            concatVisible:false,
            payType:''
        }
    },
    mounted(){
        
    },
    methods:{
        goIndex(){
            this.$router.replace('/')
        },
        intoRoom(){
            this.$router.push('/classRoom')
        },
        concat(){
            this.concatVisible = true
        },
        closePay(){
            this.payVisible = false
        },
        closeModal(){
            this.visible = false
            this.concatVisible = false
        },
        pay(type){
            this.payVisible = true
            if(type == 1){
                this.payType = '微信'
            }else{
                this.payType = '支付宝'
            }
        },
        goBuy(){
            this.visible = true
        },
        prevPage(){
            if(this.page == 1){
                return false
            }else{
                this.page -= 1
            }
        },
        nextPage(){
            if(this.page == this.pageSum){
                return false
            }else{
                this.page += 1
            }
        },
        selectGradeGenre(index){
            this.gradeGenreSel = index
        },
        selectClass(index){
            this.classGenreSel = index
        },
        selectGradeSel(index){
            this.gradeSelectSel = index
        },
        selectNav(index){
            this.nav = index
        }
    }
}
</script>

<style lang='less' scoped>
.content{
    .head{
        .left{
            height: 100%;
            display: flex;
            align-items: center;
            .logo{
                cursor: pointer;
                width: 109px;
                height: 68px;
                border-radius: 10px;
                background: #012063;
                margin-right: 50px;
            }
            .concat{
                cursor: pointer;
                font-size: 20px;
                color: #2c58ab;
            }
        }
    }
    .modal,.payCode,.concatModal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .mask{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.65);
        }
        .concat_Modal,.code,.modal_cont{
            z-index: 1001;
            background: #fff;
            border: 2px solid #e5e5e5;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .concat_Modal{
            width: 756px;
            height: 556px;
            .top{
                display: flex;
                padding: 0 18px;
                height: 53px;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                font-size: 19px;
                color: #151515;
                img{
                    width: 17px;
                    height: 17px;
                }
            }
            .concat_cont{
                display: flex;
                justify-content: center;
                margin-top: 100px;
                img{
                    width: 155px;
                    height: 155px;
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    font-size: 17px;
                    color: #151515;
                    justify-content: space-around;
                    margin-left: 20px;
                }
            }
        }
        .code{
            width: 396px;
            height: 296px;
            img{
                width: 114px;
                height: 113px;
                margin: 58px 0 50px;
            }
            span{
                font-size: 16px;
                color: #151515;
            }
        }
        .modal_cont{
            width: 760px;
            height: 560px;
            .top{
                width: 100%;
                height: 50px;
                padding-right: 18px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                img{
                    width: 17px;
                    height: 17px;
                }
            }
            .modal_detail{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 356px;
                    height: 182px;
                    border: 2px solid #e5e5e5;
                    border-radius: 7px;
                }
                .detail{
                    font-size: 17px;
                    color: #151515;
                    margin-top: 20px;
                    h4{
                        margin-bottom: 30px;
                    }
                    .botm{
                        color: red;
                    }
                }
            }
            .foot{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 134px;
                .btn_weixin,.btn_ali{
                    width: 116px;
                    height: 56px;
                    text-align: center;
                    line-height: 56px;
                    font-size: 16px;
                    border-radius: 5px;
                }
                .btn_weixin{
                    border: 2px solid #e5e5e5;
                    color: #151515;
                    margin-right: 102px;
                }
                .btn_ali{
                    background: #2c58ab;
                    color: #fff;
                }
            }
        }
    }
    .list_title{
        width: 100%;
        height: 100px;
        border-bottom:1px solid #e5e5e5;
        h2{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            line-height: 100px;
            font-size: 18px;
            color: #151515;
        }
    }
    .list_cont{
        width: 1200px;
        height: auto;
        display: flex;
        flex-direction: column;
        .list_cont_item{
            width: 100%;
            height: 80px;
            border-bottom: 1px solid #e5e5e5;
            display: flex;
            h3{
                width: 110px;
                height: 100%;
                font-size: 18px;
                color: #151515;
                text-align: center;
                line-height: 80px;
            }
            ul{
                display: flex;
                font-size: 18px;
                color: #151515;
                li{
                    cursor: pointer;
                    width: 110px;
                    text-align: center;
                    line-height: 80px;
                }
                .selected{
                    color: #2c58ab;
                }
            }
        }
    }
    .cont{
        margin-top: 30px;
        width: 1200px;
        height: auto;
        border: 2px solid #e5e5e5;
        border-radius: 7px;
        margin-bottom: 70px;
        padding-bottom: 28px;
        .cont_nav{
            width: 100%;
            height: 77px;
            border-bottom: 1px solid #e5e5e5;
            border-radius: 7px 7px 0 0;
            display: flex;
            align-items: center;
            ul{
                margin-left: 9px;
                display: flex;
                height: 100%;
                font-size: 17px;
                color: #151515;
                li{
                    cursor: pointer;
                    height: 100%;
                    padding: 0 7px;
                    margin: 0 20px;
                    line-height: 77px;
                    position: relative;
                    bottom: -2px;
                }
                .selected{
                    color: #2c58ab;
                    border-bottom: 4px solid #2c58ab;
                }
            }
            .area{
                display: flex;
                align-items: center;
                margin-left: 51px;
                input{
                    width: 116px;
                    border: 2px solid #e5e5e5;
                    border-radius: 5px;
                    font-size: 12px;
                    color: #151515;
                    padding:16px 9px;
                }
                span{
                    margin: 0 20px;
                }
            }
            .search{
                width: 258px;
                height: 48px;
                border: 1px solid #e5e5e5;
                border-radius: 7px;
                box-sizing: border-box;
                padding: 0 9px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 56px;
                input{
                    font-size: 14px;
                    color: #a6a6a6;
                }
                i{
                    cursor: pointer;
                    font-size: 20px;
                }
            }
        }
        .cont_class{
            width: 100%;
            min-height:  1218px;
            padding: 0 18px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            h3{
                width: 100%;
                height: 70px;
                font-size: 19px;
                color: #151515;
                line-height: 70px;
            }
            .list{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
                .item{
                    width: 356px;
                    height: 296px;
                    border: 2px solid #e5e5e5;
                    border-radius: 7px;
                    margin-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    .tip{
                        width: 80px;
                        height: 30px;
                        background: red;
                        color: #fff;
                        text-align: center;
                        line-height: 30px;
                        position: absolute;
                        left: -2px;
                        top: 12px;
                        border-radius: 0 5px 5px 0;
                    }
                    .actived{
                        background: #2c58ab;
                    }
                    img{
                        width: 352px;
                        height: 185px;
                    }
                    .detail{
                        display: flex;
                        flex-direction: column;
                        padding: 0 18px;
                        h4{
                            height: 53px;
                            font-size: 17px;
                            color: #151515;
                            line-height: 53px;
                        }
                        .botm{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            span{
                                color: red;
                            }
                            .btn{
                                cursor: pointer;
                                width: 100px;
                                height: 40px;
                                border-radius: 5px;
                                background: #2c58ab;
                                color: #ffffff;
                                font-size: 16px;
                                text-align: center;
                                line-height: 40px;
                            }
                        }
                    }
                }
            }
        }
        .page{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding-right: 37px;
            .prev,.next{
                cursor: pointer;
                width: 156px;
                height: 46px;
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                color: #151515;
                line-height: 46px;
                text-align: center;
                font-size: 17px;
            }
            .have{
                background: #2c58ab;
                color: #fff;
                border: 0;
            }
            .num{
                width: 50px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                font-size: 17px;
                color: #151515;
                margin: 0 60px;
            }
        }
    }
}

</style>