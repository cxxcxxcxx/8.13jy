<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <div class="logo"></div>
                <div class="title">课堂</div>
            </div>
            <heads></heads>
        </div>
        <div class="list_title">
            <div class="center">
                <h2>全部课程</h2>
                <div @click="classSort" class="sort">课程排序</div>
            </div>
        </div>
        <div class="cont">
            <div @click="intoClass" v-for="i in 2" :key='i' :style="{margin: i%3 == 2 ? '0 61px' : '0'}" class="item">
                <div class="top">
                    <img src="../../assets/student/tp_sy_img3@3x.png" alt="">
                    <div class="mask"></div>
                    <div class="left">
                        <span>一年级语文</span>
                        <span>一年级1班</span>
                    </div>
                    <div class="right">
                        <span>2020-01-01</span>
                        <span>第一学期</span>
                    </div>
                </div>
                <div class="center">
                    <div class="title">近期作业</div>
                    <div class="center_cont">作业题1</div>
                </div>
                <div class="botm">
                    <div class="botm_left">
                        <div class="head_img">
                            <img v-for="i in 3" :key='i' src="../../assets/student/tx_sy_img6@3x.png" alt="">
                        </div>
                        <span>成员10人</span>
                    </div>
                    <div @click="more(i)" class="more">更多</div>
                </div>
                <div v-if="moreIndex == i ? true : false" @click='quitClass' class="quit">退出课堂</div>
            </div>
            <div @click="addClass" class="add">
                <span>加入课程</span>
            </div>
        </div>
        <!-- 确定退出课堂弹框 -->
        <div v-if="quitModal" class="quitModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="quit_modal">
                <div class="quit_cont">确定退出<span>一年级语文</span>吗？</div>
                <div class="quit_btn">
                    <button @click="closeModal">取消</button>
                    <button>确定</button>
                </div>
            </div>
        </div>
        <!-- 课堂排序弹框 -->
        <div v-if="sortModal" class="classSortModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="sort_modal">
                <h4>课堂排序</h4>
                <div class="sortItem" v-for="(item,index) in sortList" :key="index">
                    <div class="name">{{item.name}}</div>
                    <div class="option">
                        <span @click="prevMove(index)">上移</span>
                        <span @click="nextMove(index)">下移</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 加入课程 -->
        <div v-if="addClassModal" class="addClassModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="add_modal">
                <h4>加入课程</h4>
                <div class="add_cont">
                     <input type="text" placeholder="请输入课程加课邀请码">
                    <span>不知道班级码？请联系任课老师</span>
                </div>
                <div class="quit_btn">
                    <button @click="closeModal">取消</button>
                    <button>加入</button>
                </div>
            </div>
        </div>
        <!-- 加入课程选择身份 -->
        <div v-if="chooseStatusModal" class="chooseStatusModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="choose_modal">
                <div class="status">
                    <span class="status_title">请选择您的身份:</span>
                    <div @click="selectStatus(index)" :class="selectedStatus == index ? 'status_item status_active' : 'status_item' " v-for="(item,index) in status" :key="index">{{item}}</div>
                </div>
                <div class="child">
                    <span class="child_title">您的孩子姓名：</span>
                    <div class="child_name">
                        <div class="cont">
                            <div @click="selectChild(index)" v-for="(item,index) in childList" :key="index" class="child_item">
                                <img v-if="selectedChild != index" src="../../assets/student/icon_sy_wxz@3x.png" alt="">
                                <img v-if="selectedChild == index" src="../../assets/student/icon_sy_xz_pre@3x.png" alt="">
                                <span>{{item}}</span>
                            </div>
                        </div>
                        <div class="fill">不在列表中，请填写：<input type="text" placeholder="请输入名字"></div>
                    </div>
                </div>
                <div class="choose_btn">
                    <button>确定</button>
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
            moreIndex:'',
            quitModal:false,
            sortModal:false,
            addClassModal:false,
            chooseStatusModal:false,
            sortList:[
                {name:'一年级语文'},
                {name:'一年级数学'},
                {name:'一年级英语'}
            ],
            status:['爸爸','妈妈','本人','其它'],
            childList:['张三','李四','王二','马五'],
            selectedStatus:0,
            selectedChild:0
        }
    },
    methods:{
        selectChild(index){
            this.selectedChild = index
        },
        selectStatus(index){
            this.selectedStatus = index
        },
        intoClass(){
            this.$router.push('/class')
        },
        addClass(){
            this.addClassModal = true
        },
        prevMove(index){
            if(index == 0){
                return false
            }else{
                [this.sortList[index-1],this.sortList[index]] = [this.sortList[index],this.sortList[index-1]]
            }
        },
        nextMove(index){
            if(index == this.sortList.length-1){
                return false
            }else{
                [this.sortList[index],this.sortList[index-1]] = [this.sortList[index-1],this.sortList[index]]
            }
        },
        closeModal(){
            this.quitModal = false
            this.sortModal = false
            this.addClassModal = false
            this.chooseStatusModal  = false
        },
        classSort(){
            this.sortModal = true
        },
        quitClass(){
            this.quitModal = true
        },
        more(index){
            if(this.moreIndex == '' || (this.moreIndex != '' && this.moreIndex != index)){
                this.moreIndex = index
            }else if(this.moreIndex != '' && this.moreIndex == index){
                this.moreIndex = ''
            }
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    .quitModal,.classSortModal,.addClassModal,.chooseStatusModal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        .modal_mask{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.65);
        }
        .quit_modal,.sort_modal,.add_modal,.choose_modal{
            z-index: 1001;
            border: 2px solid #e5e5ee;
            border-radius: 5px;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .choose_modal{
            width: 1200px;
            border: none;
            align-items: flex-start;
            padding: 52px 0 0 101px;
            .status{
                display: flex;
                align-items: center;
                .status_title{
                    font-size: 19px;
                    margin-right: 70px;
                }
                .status_item{
                    cursor: pointer;
                    width: 116px;
                    height: 36px;
                    border: 2px solid #e5e5e5;
                    border-radius: 5px;
                    text-align: center;
                    line-height: 36px;
                    font-size: 16px;
                    margin-right: 40px;
                }
                .status_active{
                    background: #2c58ab;
                    border: none;
                    color: #fff;
                }
            }
            .child{
                display: flex;
                flex-direction: column;
                margin-top:20px;
                .child_title{
                    font-size: 19px;
                }
                .child_name{
                    width: 996px;
                    border: 2px solid #e5e5e5;
                    border-radius: 7px;
                        font-size: 17px;

                    .cont{
                        width: 750px;
                        margin: 20px 0 110px 80px; 
                        .child_item{
                            cursor: pointer;
                            margin:0 136px 16px 0;
                            img{
                                width: 25px;
                                height: 25px;
                                margin-right: 20px;
                            }
                        }
                    }
                    .fill{
                        margin:0 0 28px 18px;
                        input{
                            margin-left: 22px;
                            width: 196px;
                            border: 2px solid #e5e5e5;
                            border-radius: 7px;
                            padding: 15px 18px;
                            font-size: 16px;
                        }
                    }
                }
            }
            .choose_btn{
                width: 100%;
                padding-right: 100px;
                text-align: right;
                button{
                    background: #2c58ab;
                    color: #fff;
                    font-size: 16px;
                    margin: 103px 0 95px;
                }
            }
        }
        .add_modal,.sort_modal{
            h4{
                width: 100%;
                font-size: 19px;
                border-bottom: 2px solid #e5e5e5;
            }
        }
        .sort_modal{
            width: 996px;
            height: 596px;
            padding: 0 73px;
            h4{
                height: 70px;
                text-align: center;
                line-height: 70px;
            }
            .sortItem{
                width: 100%;
                height: 77px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 25px;
                box-sizing: border-box;
                border-bottom: 2px solid #e5e5e5;
                font-size: 17px;
                .option{
                    color: #2c58ab;
                    span{
                        cursor:pointer
                    }
                    span:nth-child(1){
                        margin-right: 39px;
                    }
                }
            }
        }
        .quit_modal,.add_modal{
            width: 396px;
            height: 296px;
            .quit_cont{
                width: 100%;
                font-size: 18px;
                text-align: center;
                margin: 87px 0 112px;
                span{
                    color: red;
                }
            }
            .quit_btn{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-size: 15px;
                button{
                    border: 2px solid #e5e5e5;
                    width: 116px;
                    height: 56px;
                }
                button:nth-child(2){
                    background: #2c58ab;
                    color: #fff;
                    border: 0;
                }
            }
        }
        .add_modal{
            width: 596px;
            height: 396px;
            h4{
                height: 58px;
                text-align: left;
                padding-left: 40px;
                line-height: 58px;
            }
            .add_cont{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-top: 45px;
                input{
                    border-bottom: 2px solid #e5e5e5;
                    width: 400px;
                    font-size: 23px;
                    padding: 0 14px;
                }
                span{
                    font-size: 15px;
                    color: red;
                    margin-top: 10px;
                }
            }
            .quit_btn{
                margin-top: 136px;
            }
        }
    }
    .head{
        .left{
            height: 100%;
            display: flex;
            align-items: center;
            .logo{
                width: 109px;
                height: 68px;
                border-radius: 10px;
                background: #012063;
                margin-right: 50px;
            }
            .title{
                width: 100px;
                height: 100%;
                font-size: 20px;
                color: #2c58ab;
                text-align: center;
                line-height: 100px;
                border-bottom: 4px solid #2c58ab;
            }
        }
    }
    .list_title{
        width: 100%;
        height: 100px;
        border-bottom:1px solid #e5e5e5;
        .center{
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2{
                height: 100%;
                line-height: 100px;
                font-size: 18px;
                color: #151515;
            }
            .sort{
                cursor: pointer;
                width: 156px;
                height: 46px;
                border: 2px solid #e5e5e5;
                border-radius: 7px;
                background: #2c58ab;
                color: #fff;
                font-size: 17px;
                text-align: center;
                line-height: 46px;
            }
        }
        
    }
    .cont{
        width: 1200px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 30px;
        .item{
            position: relative;
        }
        .item,.add{
            width: 356px;
            height: 316px;
            border: 2px solid #e5e5ee;
            border-radius: 5px;
            .quit{
                width: 116px;
                height: 36px;
                border: 2px solid #e5e5ee;
                border-top: 0;
                border-radius: 5px;
                font-size: 17px;
                text-align: center;
                line-height: 36px;
                position: absolute;
                right: 0
            }
            .top{
                width: 356px;
                height: 185px;
                position: relative;
                .mask,img{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 5px;
                }
                .mask{
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 2;
                }
                img{
                    z-index: 1;
                }
                .left,.right{
                    position: absolute;
                    z-index: 3;
                    font-size: 18px;
                    color: #fff;
                    line-height: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .left{
                    top: 14px;
                    left: 8px;
                }
                .right{
                    right: 8px;
                    bottom: 30px;
                }
            }
            .center{
                width: 100%;
                height: 75px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 18px;
                font-size: 17px;
                border-bottom: 2px solid #e5e5e5;
                .title{
                    color: #8f8f8f
                }
                .center_cont{
                    color: #151515;
                }
            }
            .botm{
                width: 100%;
                height: 54px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 19px 0 9px;
                .botm_left{
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    .head_img{
                        display: flex;
                        img{
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                        }
                        img:nth-child(2){
                            position: relative;
                            left: -10px;
                        }
                        img:nth-child(3){
                            position: relative;
                            left: -20px;
                        }
                    }
                }
                .more{
                    font-size: 15px;
                    color: #2c58ab;
                }
            }
        }
        .add{
            background: url('../../assets/student/bg_sy_jrkc@3x.png') center center no-repeat;
            background-size: 356px 316px;
            display: flex;
            justify-content: center;
            span{
                margin-top: 230px;
                font-size: 17px;
            }
        }
    }
}
</style>