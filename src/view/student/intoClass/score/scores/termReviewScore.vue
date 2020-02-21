<template>
    <div class="termReview">
        <div class="info">
            <img src="@/assets/student/tp_sy_img11@3x.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(555)
    }
}
</script>

<style lang="less" scoped>
.termReview{
    width: 1200px;
    height: auto;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    padding: 30px;
    .info{
        display: flex;
        align-items: center;
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
    }
}
</style>