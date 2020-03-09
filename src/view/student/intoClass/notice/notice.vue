<template>
    <div class="content">
        <div class="head">
            <div class="head">
                <div class="left">
                    <span @click="goBack">课堂</span>
                    <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                    <span>公告</span>
                </div>
                <heads></heads>
            </div>
        </div>
        <div @click="goDetail" class="item" v-for="i in 3" :key="i">
            <h4>停课通知</h4>
            <div class="origin">
                <span>发布人：张老师</span>
                <span>发布时间：19/10/20 12:00</span>
            </div>
            <p :class="more ? 'active' : ''">{{cont}}</p>
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
import heads from '@/components/head'
export default {
    components:{heads},
    data(){
        return{
            quitModal:false,
            more:false,
            cont:'哈哈哈哈哈哈哈哈,哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
        }
    },
    mounted(){
        // console.log(this.cont.length)
        if(this.cont.length >= 90){
            this.cont = this.cont.split('')
            this.cont.splice(90,this.cont.length-90)
            this.cont = this.cont.join('')+'...'
        }
    },
    methods:{
        goDetail(){
            this.$router.push({path:'/noticeDetail'})
        },
        del(){
            this.quitModal = true
        },
        closeModal(){
            this.quitModal = false
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
    .item{
        width: 1200px;
        height: 174px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 25px 39px 17px 17px;
        h4{
            font-size: 17px;
            // margin-bottom: 5px;
        }
        .origin{
            font-size: 13px;
            color: #6e6e6e;
            margin-bottom: 10px;
            span{
                margin-right: 30px;
            }
        }
        p{
            font-size: 15px;
            margin-bottom: 10px;
            
        }
        .active{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical
        }
        .del{
            font-size: 17px;
            float: right;
            color: red;
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