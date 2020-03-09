<template>
    <div class="list">
        <div @click="sel" :style="{margin:i % 3 == 2 ? '0 166px 100px' : ''}" v-for="i in 7" :key="i" class="item">
            <img src="@/assets/student/tp_sy_img18@3x.png" alt="">
            <span>刮刮乐</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        sel(){
            this.$emit('scratch',true)
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>