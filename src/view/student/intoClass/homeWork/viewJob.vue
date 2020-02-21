<template>
    <div>
        <div class="cont">
            <div class="jobCont">

            </div>
            <div class="jobMessage">

            </div>
            <div class="btn">
                <button @click="goWatch">查看视频讲解</button>
            </div>
        </div>
        <!-- 提交成功弹框 -->
        <div v-if="submitModal" class="submitModal">
            <div @click="close" class="mask"></div>
            <div class="cont">
                <span>作业提交成功</span>
                <!-- <button @click="goWatch">查看视频讲解</button> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            submitModal:false
        }
    },
    methods:{
        goWatch(){
            this.$router.push('/watchVideo')
        },
        close(){
            this.submitModal = false
        },
        submit(){
            this.submitModal = true
        }
    }
}
</script>

<style lang="less" scoped>
.submitModal{
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
        background: rgba(0, 0, 0, 0.65);
    }
    .cont{
        z-index: 1001;
        background: #fff;
        width: 396px;
        height: 296px;
        border: 2px solid #e5e5e5;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        button{
            width: 160px;
            height: 50px;
            font-size: 16px;
            color: #fff;
            background: #2c58ab;
            line-height: 50px;
            margin-top: 112px;
        }
    }
}
.cont{
    width: 1200px;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    padding: 28px 28px 0;
    .jobCont,.jobMessage{
        width: 100%;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
    }
    .jobCont{
        height: auto;
        padding: 16px 18px 36px;
    }
    .jobMessage{
        width: 100%;
        min-height: 96px;
        margin-top: 30px;
    }
    .btn{
        width: 100%;
        margin: 14px 0;
        text-align: center;
        button{
            width: 160px;
            height: 50px;
            font-size: 17px;
            color: #fff;
            background: #2c58ab;
            line-height: 50px;
        }
    }
}
</style>