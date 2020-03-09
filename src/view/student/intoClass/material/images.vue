<template>
    <div>
        <img src="@/assets/student/tp_sy_img16@3x.png" alt="">
        <div class="bottom">
            <button @click="prevPage" :class="page == 1 ?'active prev': 'prev'">上一张</button>
            <div class="page">{{page}}/{{pageAll}}</div>
            <button @click="nextPage" :class="page == pageAll ? 'active next' : 'next'">下一张</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            page:1,
            pageAll:20
        }
    },
    methods:{
        prevPage(){
            if(this.page == 1){
                return false
            }else{
                this.page -= 1
            }
        },
        nextPage(){
            if(this.page == this.pageAll){
                return false
            }else{
                this.page += 1
            }
        }
    }
}
</script>

<style lang="less" scoped>
img{
    width: 1200px;
    height: 660px;
    border-radius: 5px;
    margin-top: 20px;
}
.bottom{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    margin-top: 107px;
    button{
        width: 160px;
        height: 50px;
        line-height: 50px;
        background: #2c58ab;
        color: #fff;
    }
    .active{
        background: #fff;
        border: 2px solid #e5e5e5;
        color: #151515;
    }
    .page{
        width: 160px;
        text-align: center;
    }
}
</style>