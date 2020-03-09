<template>
    <div class="cont">
        <div class="top">
            <div class="left">
                <span @click="goBack">抽奖</span>
                <img src="@/assets/student/icon_sy_xyg@3x.png" alt="">
                <span>{{title}}</span>
            </div>
            <div class="right">我的唯学分：60</div>
        </div>
        <!-- 刮刮乐 -->
        <scratch v-if="scratchs" @scratch='scratch'></scratch>
        <!-- 转盘抽奖 -->
        <turnTable v-if="turn" @turnTable='scratch'></turnTable>
        <!-- 开宝箱 -->
        <box v-if="box" @box='scratch'></box>
        <!-- 抽中弹框 -->
        <modal v-if="quitModal" @closeModal='closeModal'></modal>
    </div>
</template>

<script>
import scratch from './scratchCard'
import turnTable from './turntable'
import box from './box'
import modal from './modal'
export default {
    components:{scratch, modal, turnTable, box},
    data(){
        return{
            quitModal:false,
            scratchs:false,
            turn:false,
            box:false,
            title:''
        }
    },
    mounted(){
        let id =  this.$route.params.id
        if(id == 'scratch'){
            this.scratchs = true
            this.title = '刮刮乐'
        }else if(id == 'turnTable'){
            this.turn = true
            this.title = '转盘抽奖'
        }else if(id == 'box'){
            this.box = true
            this.title = '开宝箱'
        }
    },
    methods:{
        closeModal(data){
            this.quitModal = data
        },
        scratch(data){
            this.quitModal = data
        },
        goBack(){
            this.$router.replace('/luckDraw')
        }
    }
}
</script>

<style lang="less" scoped>
.cont{
    width: 1200px;
    height: auto;
    padding: 30px;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    font-size: 19px;
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
            height: 100%;
            display: flex;
            align-items: center;
            span{
               cursor: pointer;
            }
            img{
                width: 8px;
                height: 14px;
                margin: 0 10px 0 9px;
            }
        }
    }
    .list{
        width: 720px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 110px auto;
        .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 100px;
            img{
                width: 118px;
                height: 67px;
                margin-bottom: 34px;
            }
        }
    }
}
</style>