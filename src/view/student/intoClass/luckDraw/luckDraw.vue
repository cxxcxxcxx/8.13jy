<template>
    <div class="content">
        <div class="cont">
            <h4>我的唯学分：60</h4>
            <div class="list">
                <div @click="goGraw(index)" class="item" v-for="(item,index) in list" :key="index">
                    <img :style="{width:item.width+'px',height:item.height+'px'}" :src="item.img" alt="">
                    <span class="name">{{item.name}}</span>
                    <span class="tip">{{item.tip}}</span>
                </div>
            </div>
            <button @click="seeMinePrize">查看我的奖品</button>
        </div>
        <!-- 查看我的奖品 -->
        <div class="seePrize" v-if="seePrize">
            <div @click="closeModal" class="mask"></div>
            <div class="cont">
                <div class="top">
                    <span></span>
                    <span>我的奖品</span>
                    <img @click="closeModal" src="@/assets/student/icon_sy_cuo@3x.png" alt="">
                </div>
                <div class="item">
                    <div class="left">
                        <div class="lt">2019/10/10 12:00</div>
                        <div class="lb">恭喜您获得***奖品，请联系老师领取</div>
                    </div>
                    <div class="right">
                        <button @click="onLineReceive" class="onLine">线上领取</button>
                        <button @click="outLineReceive" class="outLine">线下领取</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 线上领取 -->
        <div class="seePrize" v-if="onLine">
            <div @click="closeModal" class="mask"></div>
            <div class="cont">
                <div class="top">
                    <span></span>
                    <span>线上领取</span>
                    <img @click="closeModal" src="@/assets/student/icon_sy_cuo@3x.png" alt="">
                </div>
                <div class="item">
                    <input type="text" placeholder="姓名">
                </div>
                <div class="item">
                    <input type="text" placeholder="联系方式">
                </div>
                <div class="item">
                    <input type="text" placeholder="收货地址">
                </div>
                <button @click="confirmReceive" class="confirmReceive">确定</button>
            </div>
        </div>
        <!-- 提交成功 -->
        <div v-if="success" class="quitModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="quit_modal">
                <div class="quit_cont">提交成功，注意查收</div>
                <div class="quit_btn">
                    <button @click="closeModal">确定</button>
                </div>
            </div>
        </div>
        <!-- 提交成功 -->
        <div v-if="outLine" class="quitModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="quit_modal">
                <div class="quit_cont">请联系老师进行领取</div>
                <div class="quit_btn">
                    <button @click="closeModal">确定</button>
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
            seePrize:false,
            onLine:false,
            success:false,
            outLine:false,
            list:[
                {img:require('../../../../assets/student/tp_sy_img18@3x.png'),width:131,height:75,name:'刮刮乐',tip:'每抽奖一次消耗5个唯学分'},
                {img:require('../../../../assets/student/tp_sy_img21@3x.png'),width:111,height:116,name:'转盘',tip:'每抽奖一次消耗5个唯学分'},
                {img:require('../../../../assets/student/tp_sy_img20@3x.png'),width:84,height:78,name:'开宝箱',tip:'每抽奖一次消耗5个唯学分'}
            ]
        }
    },
    methods:{
        confirmReceive(){
            this.success = true
        },
        onLineReceive(){
            this.seePrize = false
            this.onLine = true
        },
        outLineReceive(){
            this.outLine = true
        },
        closeModal(){
            this.seePrize = false
            this.onLine = false
            this.success = false
            this.outLine = false
        },
        seeMinePrize(){
            this.seePrize = true
        },
        goGraw(index){
            if(index == 0){
                this.$router.push({path:'/draw/scratch'})
            }else if(index == 1){
                this.$router.push({path:'/draw/turnTable'})
            }else if(index == 2){
                this.$router.push({path:'/draw/box'})
            }
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    .cont{
        width: 1200px;
        height: auto;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        padding: 30px;
        h4{
            text-align: right;
            font-size: 19px;
        }
        .list{
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            .item{
                width: 356px;
                height: 366px;
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                font-size: 17px;
                .name{
                    margin-top: 55px;
                }
                .tip{
                    margin:62px 0 20px;
                }
            }
        }
        button{
            width: 160px;
            color: #fff;
            font-size: 17px;
            background: #2c58ab;
            margin-top: 40px;
            float: right;
        }
    }
    .seePrize{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        .mask{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.65);
        }
        .cont{
            z-index: 1001;
            width: 1000px;
            min-height: 560px;
            border: 2px solid #e5e5ee;
            border-radius: 5px;
            background: #fff;
            padding: 30px 75px;
            font-size: 19px;
            .top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
                img{
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                }
            }
            .item{
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 10px;
                border-bottom: 2px solid #e5e5e5;
                .left{
                    .lt{
                        margin-bottom: 5px;
                    }
                }
                .right{
                    display: flex;
                    button{
                        margin: 0;
                        height: 50px;
                        line-height: 50px;
                    }
                    .onLine{
                        border: 2px solid #e5e5e5;
                        background: #fff;
                        color: #151515;
                        margin-right: 20px;
                    }
                }
                input{
                    font-size: 16px;
                }
            }
            .confirmReceive{
                width: 156px;
                height: 46px;
                background: #2c58ab;
                color: #fff;
                line-height: 46px;
                border: 2px solid #e5e5e5;
                margin: 71px 43%;
                float: center;
            }
        }
    }
    .quitModal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1002;
        .modal_mask{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1002;
            background: rgba(0, 0, 0, 0.65);
        }
        .quit_modal{
            z-index: 1003;
            width: 600px;
            height: 400px;
            border: 2px solid #e5e5ee;
            border-radius: 5px;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            .quit_cont{
                width: 100%;
                font-size: 18px;
                text-align: center;
                margin: 150px 0 130px;
            }
        }
        .quit_btn{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 15px;
            button{
                background: #2c58ab;
                color: #fff;
                border: 0;
            }
        }
    }
}
</style>