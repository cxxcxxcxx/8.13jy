<template>
    <div>
        <div class="cont">
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
                <span>添加作业文件</span>
                <span>支持各类文档、图片、视频、语音</span>
            </div>
            <div class="leaveMessage">
                <span>作业留言：</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="添加留言"></textarea>
            </div>
            <div class="btn">
                <button @click="submit">提交</button>
            </div>
        </div>
        <!-- 提交成功弹框 -->
        <div v-if="submitModal" class="submitModal">
            <div @click="close" class="mask"></div>
            <div class="cont">
                <span>作业提交成功</span>
                <button @click="goWatch">查看视频讲解</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            submitModal:false,
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
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
    .add{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        span{
            font-size: 17px;
        }
        span:nth-child(4){
            font-size: 15px;
            color: #8f8f8f;
            margin: 15px 0 55px 0;
        }
    }
    .leaveMessage{
        display: flex;
        align-items: center;
        font-size: 17px;
        padding-left: 28px;
        textarea{
            width: 996px;
            height: 96px;
            font-size: 15px;
            padding: 11px 17px;
            border: 2px solid #e5e5e5;
            border-radius: 5px;
        }
    }
    .btn{
        text-align: right;
        button{
            color: #fff;
            font-size: 16px;
            background: #2c58ab;
            margin: 58px 48px 28px 0;
        }
    }
}
</style>