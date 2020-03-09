<template>
    <div class="list">
        <div @click="sel(i)" :style="{margin:i % 3 == 2 ? '0 215px 100px' : ''}" v-for="i in 7" :key="i" class="item">
            <img v-if="index.indexOf(i) > -1 ? false : true" src="@/assets/student/tp_sy_img20@3x.png" alt="">
            <img v-if="index.indexOf(i) > -1 ? true : false" src="@/assets/student/tp_sy_img22@3x.png" alt="">
            <span>开宝箱</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            index:[]
        }
    },
    methods:{
        sel(i){
            if(this.index.indexOf(i) > -1){
                return false
            }else{
                this.index.push(i)
            }
            this.$emit('box',true)
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
            width: 88px;
            height: 83px;
            margin-bottom: 34px;
        }
    }
}
</style>