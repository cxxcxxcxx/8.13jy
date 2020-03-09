<template>
    <div class="content">
        <div class="head">
            <div class="head">
                <div @click="goBack" class="left">
                    <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                    <span>公告详情</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <h3>公告详情</h3>
        <div class="cont">
            <h4>停课通知</h4>
            <div class="time">19/10/10 12:00</div>
            <p class="hi">同学们:</p>
            <p class="con">哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈</p>
            <span @click="del" class="del">删除</span>
        </div>
        <!-- 删除提示框 -->
        <div v-if="quitModal" class="quitModal">
            <div @click="closeModal" class="modal_mask"></div>
            <div class="quit_modal">
                <div class="quit_cont">确定删除此公告</div>
                <div class="quit_btn">
                    <button @click="closeModal">取消</button>
                    <button>确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quitModal:false
        }
    },
    methods:{
        del(){
            this.quitModal = true
        },
        closeModal(){
            this.quitModal = false
        },
        goBack(){
            this.$router.replace('/notice')
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
    h3{
        margin: 30px 0;
        font-size: 18px;
    }
    .cont{
        width: 1200px;
        height: auto;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        font-size: 16px;
        padding: 30px 30px 20px 20px;
        .time{
            margin: 10px 0
        }
        .hi{
            text-indent: 36px;
        }
        .con{
            text-indent: 72px;
        }
        .del{
            color: red;
            float: right;
            cursor: pointer;
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