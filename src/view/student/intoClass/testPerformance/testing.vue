<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <div class="lTop">
                    <span>高数第一章</span>
                    <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                    <span>测试一</span>
                    <span class="endData">截止日期：19/10/10 12:00</span>
                </div>
                <div class="lbot">
                    <div class="sta">正在进行</div>
                    <span class="remainingTime">距离结束时间：01:05:20</span>
                </div>
            </div>
            <heads></heads>
        </div>
        <div class="line"></div>
        <div class="subItem">
            <div class="num">1、判断题 分值
                <input type="text">
            </div>
            <div class="title">在人的一生中，遇见知己是一件比较困难的事情。</div>
            <div class="answer">
                <div class="answerItem">
                    <img src="@/assets/student/icon_sy_wxz@3x.png" alt="">
                    <img src="@/assets/student/icon_sy_xz_pre@3x.png" alt="">
                    <span>对</span>
                </div>
                <div class="answerItem">
                    <img src="@/assets/student/icon_sy_wxz@3x.png" alt="">
                    <img src="@/assets/student/icon_sy_xz_pre@3x.png" alt="">
                    <span>错</span>
                </div>
            </div>
        </div>
        <div class="subItem">
            <div class="num">1、简答题 分值
                <input type="text">
            </div>
            <div class="title">在人的一生中，遇见知己是一件比较困难的事情。</div>
            <div class="answer">
                <textarea name="" id=""></textarea>
                <div class="add">
                    <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    <span>上传图片</span>
                </div>
            </div>
        </div>
        <button @click="submitConfirm" class="submit">确定</button>
        <!-- 确定提交测试 -->
        <div v-if="quitModal" class="quitModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="quit_modal">
                <div class="quit_cont">确定提交该测试，提交后不可更改</div>
                <div class="quit_btn">
                    <button @click="closeModal">取消</button>
                    <button>确定</button>
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
            quitModal:false
        }
    },
    mounted(){
        console.log('testing')
    },
    methods:{
        closeModal(){
            this.quitModal = false
        },
        submitConfirm(){
            this.quitModal = true
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
            flex-direction: column;
            justify-content: center;
            .lTop{
                display: flex;
                align-items: center;
                span{
                    font-size: 19px;
                    cursor: pointer;
                }
                .endData{
                    font-size: 13px;
                    margin-left: 20px;
                }
                img{
                    width: 8px;
                    height: 14px;
                    margin: 0 10px 0 9px;
                }
            }
            .lbot{
                display: flex;
                align-items: center;
                margin-top: 10px;
                .sta{
                    width: 100px;
                    height: 30px;
                    border-radius: 5px;
                    background: #2c58ab;
                    color: #fff;
                    font-size: 13px;
                    text-align: center;
                    line-height: 30px;
                    margin-right: 10px;
                }
                .remainingTime{
                    font-size: 13px;
                    color: red;
                }
            }
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        margin-bottom: 20px;
    }
    .subItem{
        width: 1200px;
        min-height: 180px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 20px;
        .num{
            font-size: 17px;
            input{
                width:42px;
                line-height: 17px;
                border-bottom: 2px solid #151515;
            }
        }
        .title{
            font-size: 15px;
            margin:20px 0 40px;
        }
        .answer{
            display: flex;
            align-items: center;
            .answerItem{
                img{
                    width: 24px;
                    height: 24px;
                    margin-right: 15px;
                }
            }
            textarea{
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                width: 515px;
                height: 85px;
                padding: 10px 20px;
                font-size: 15px;
                margin-right: 20px;
            }
            
            .add{
                display: flex;
                flex-direction: column;
                align-items: center;
                /deep/.el-upload--picture-card{
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center
                }
                span{
                    margin-top: 5px;
                }
            }
        }
    }
    .submit{
        width: 156px;
        height: 46px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        background:  #2c58ab;
        color: #fff;
        font-size: 17px;
        text-align: center;
        line-height: 46px;
        margin-top: 170px;
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
        .quit_modal{
            z-index: 1001;
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
}
</style>