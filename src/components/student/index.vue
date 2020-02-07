<template>
    <div>
        <div>student</div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        let that = this
        that.init()
    },
    methods:{
        init(){
            console.log('123')
        }
    }
}
</script>

<style>
    div{
        width: 300px;
        height: 600px;
        font-size: 100px
    }
</style>