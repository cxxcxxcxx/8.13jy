<template>
    <div class="content">
        <div class="head">
            <div class="left">
                <span @click="goBack">课堂</span>
                <img src="../../../assets/student/icon_sy_xyg@3x.png" alt="">
                <span>一年级语文</span>
            </div>
            <heads></heads>
        </div>
        <div class="nav">
            <div class="nav_top">
                <img src="../../../assets/student/tp_sy_img16@3x.png" alt="">
                <div class="nav_title">一年级语文</div>
            </div>
            <div class="nav_botm">
                <span @click="navChange(index)" v-for="(item,index) in navList" :key="'nav'+index" :class="navSelected == index ? 'active' : ''">{{item}}</span>
            </div>
        </div>
        <div class="class_Content">
            <courseware v-if="navSelected == 0"></courseware>
            <homework v-if="navSelected == 1"></homework>
            <div class="cont_right">
                <div @click="goItem(item.name)" class="cont_item" :style="{background:item.color}" v-for="(item,index) in contList" :key="'cont'+index">
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import heads from '@/components/head'
import courseware from './indexComponent/courseware'
import homework from './indexComponent/homework'
export default {
    components:{heads, courseware, homework},
    data(){
         return{
             navList:['课件互动','作业'],
             navSelected:0,
             contList:[
                 {name:'成绩',img:require('../../../assets/student/chengji_03.png'),color:'#59bbec'},
                 {name:'课堂表现',img:require('../../../assets/student/class_03.png'),color:'#169bd5'},
                 {name:'作业表现',img:require('../../../assets/student/zuoye_03.png'),color:'#2c58ab'},
                 {name:'测试',img:require('../../../assets/student/ceshi_03.png'),color:'#4880e7'},
                 {name:'教师评价',img:require('../../../assets/student/pingjia_03.png'),color:'#59bbec'},
                 {name:'资料',img:require('../../../assets/student/ziliao_03.png'),color:'#169bd5'},
                 {name:'公告',img:require('../../../assets/student/gonggao_03.png'),color:'#2c58ab'},
                 {name:'抽奖',img:require('../../../assets/student/choujiang_03.png'),color:'#4880e7'},
                 {name:'错题',img:require('../../../assets/student/cuoti_03.png'),color:'#59bbec'},
                 {name:'考勤',img:require('../../../assets/student/kaoqin_03.png'),color:'#169bd5'},
             ]
         }
    },
    methods:{
        goBack(){
            this.$router.replace('/classRoom')
        },
        goItem(name){
            if(name == '成绩'){
                this.$router.push({
                    path:'/score/homework',
                    query:{
                        page:1
                    }
                })
            }else if(name == '课堂表现'){
                this.$router.push({path:'/stuPerformance'})
            }else if(name == '作业表现'){
                this.$router.push({path:'/jobPerformance'})
            }else if(name == '测试'){
                this.$router.push({path:'/testPerformance'})
            }else if(name == '教师评价'){
                this.$router.push({path:'/evaluation'})
            }else if(name == '资料'){
                this.$router.push({path:'/material'})
            }else if(name == '公告'){
                this.$router.push({path:'/notice'})
            }else if(name == '抽奖'){
                this.$router.push({path:'/luckDraw'})
            }else if(name == '错题'){
                this.$router.push({path:'/errorSubject'})
            }

        },
        navChange(index){
             this.navSelected = index
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
    .nav{
        width: 1200px;
        height: 325px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        .nav_top{
            width: 100%;
            height: 250px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .nav_title{
                width: 140px;
                height: 40px;
                background: #fff;
                border-radius: 5px;
                text-align: center;
                line-height: 40px;
                font-size: 18px;
                position: absolute;
                top: 59px;
                left: 19px;
            }
        }
        .nav_botm{
            width: 100%;
            height: 75px;
            font-size: 17px;
            display: flex;
            align-items: center;
            padding-left: 28px;
            box-sizing: border-box;
            span{
                margin-right: 77px;
                cursor: pointer;
            }
            .active{
                color: #2c58ab;
            }
        }
    }
    .class_Content{
        width: 1200px;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        .cont_right{
            width: 356px;
            height: 436px;
            border: 2px solid #e5e5e5;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            padding: 28px 0 28px 28px;
            .cont_item{
                width: 80px;
                height: 80px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 15px;
                margin:0 28px 20px 0;
                border-radius: 7px;
                cursor: pointer;
                img{
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>