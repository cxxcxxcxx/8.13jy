<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
            </div>
            <ul class="center">
                <li :class="selectLi == index ? 'active' : ''" @click="selectNav(index)" v-for="(item,index) in nav" :key="'nav'+index"><span>{{item}}</span></li>
            </ul>
            <heads></heads>
        </div>
        <div class="line"></div>
        <router-view></router-view>
    </div>
</template>

<script>
import heads from '@/components/head'
export default {
    components:{heads},
    data(){
        return{
            selectLi:1,
            nav:['成员','成绩'],
            page:1
        }
    },
    mounted(){
        console.log('index')
    },
    methods:{
        selectNav(index){
            this.selectLi = index
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
            img{
                width: 8px;
                height: 14px;
                margin: 0 10px 0 9px;
            }
        }
        ul.center{
            height: 100%;
            display: flex;
            align-items: center;
            li{
                height: 100%;
                font-size: 19px;
                padding: 0 30px;
                line-height: 100px;
                margin:0 10px;
                cursor: pointer;
            }
            li.active{
                color: #2c58ab;
                border-bottom: 4px solid #2c58ab;
            }
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background: #e5e5e5;
    }
}
</style>