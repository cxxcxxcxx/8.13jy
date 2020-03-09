<template>
    <div class="quitModal">
        <div @click="closeModal" class="modal_mask"></div>
        <div class="quit_modal">
            <div class="quit_cont">
                <div>恭喜您抽中</div>
                <div class="name">五谷丰登牌一张</div>
            </div>
            <div class="quit_btn">
                <button @click="closeModal">确定</button>
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
        closeModal(){
            this.$emit('closeModal',false)
        }
    }
}
</script>

<style lang="less" scoped>
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
            margin: 140px 0 80px;
            .name{
                margin-top: 30px;
                color: red;
                font-family: '华文行楷';
                font-size: 26px;
            }
        }
    }
    .quit_btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 15px;
        button{
            width: 116px;
            height: 56px;
            background: #2c58ab;
            color: #fff;
            border: 0;
        }
    }
}
</style>