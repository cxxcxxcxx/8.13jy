<template>
    <div class="turn">
        <img @click="turn" src="@/assets/student/tp_sy_img21@3x.png" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        turn(){
            this.$emit('turnTable',true)
        }
    }
}
</script>

<style lang="less" scoped>
.turn{
    display: flex;
    justify-content: center;
    img{
        width: 310px;
        height: 327px;
        margin: 108px auto;
    }
}

</style>