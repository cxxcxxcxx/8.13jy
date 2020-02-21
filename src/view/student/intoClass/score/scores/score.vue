<template>
    <div>
        <div class="scoreNav">
            <div @click="selectScore(index)" :class="selectScoreNav == index ? 'item select' : 'item'" v-for="(item,index) in scoreNav" :key="'score'+index">{{item}}</div>
        </div>
        <router-view></router-view>
        <div class="page">
            <button @click="prev" class="prev">上一页</button>
            <div class="pageNum">
                <div @click="goPage(i)" :class="page == i ? 'num active' : 'num'" v-for="i in 5" :key='i'>{{i}}</div>
            </div>
            <button @click="next" class="next">下一页</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            selectScoreNav:0,
            scoreNav:['作业成绩','测试成绩','课堂表现','期末成绩','学期总评'],
            page:1
        }
    },
    mounted(){
    },
    methods:{
        goPage(i){
            this.page = i
            this.routerChange()
        },
        prev(){
            this.page -= 1
            this.routerChange()
        },
        next(){
            this.page += 1
            this.routerChange()
        },
        routerChange(){
            this.name = this.$route.name
            this.$router.push({
                path:'/score/'+this.name,
                query:{
                    page:this.page
                }
            })
        },
        selectScore(index){
            this.selectScoreNav = index
            this.page = 1
            if(index == 0){
                this.$router.push({
                    path:'/score/homework',
                    query:{
                        page:this.page
                    }
                })
            }else if(index == 1){
                this.$router.push({
                    path:'/score/test',
                    query:{
                        page:this.page
                    }
                })
            }else if(index == 2){
                this.$router.push({
                    path:'/score/classPerformance',
                    query:{
                        page:this.page
                    }
                })
            }else if(index == 3){
                this.$router.push({
                    path:'/score/final',
                    query:{
                        page:this.page
                    }
                })
            }
        },
        selectNav(index){
            this.selectLi = index
        }
    }
}
</script>

<style lang="less" scoped>
.scoreNav{
    border-radius: 5px;
    margin-top: 22px;
    width: 1200px;
    height: 76px;
    border: 2px solid #e5e5e5;
    border-right: 0;
    display: flex;
    align-items: center;
    .item{
        flex: 1;
        height: 100%;
        border-right: 2px solid #e5e5e5;
        line-height: 76px;
        text-align: center;
        font-size: 17px;
        cursor: pointer;
    }
    .item:first-child{
        border-radius: 5px 0 0 5px;
    }
    .item:last-child{
        border-radius: 0 5px 5px 0;
    }
    .select{
        color: #fff;
        background: #2c58ab;
    }
}
.page{
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
    button{
        height: 50px;
        width: 160px;
        font-size: 17px;
        border-radius: 5px;
        border: 2px solid #e5e5e5;
        line-height: 50px;
    }
    .pageNum{
        width: auto;
        height: 50px;
        border: 2px solid #e5e5e5;
        border-right: 0;
        display: flex;
        border-radius: 5px;
        margin: 0 60px;
        .num{
            width: 56px;
            height: 46px;
            border-right: 2px solid #e5e5e5;
            text-align: center;
            line-height: 46px;
            cursor: pointer;
        }
        .num:first-child{
            border-radius: 5px 0 0 5px;
        }
        .num:last-child{
            border-radius: 0 5px 5px 0;
        }
        .active{
            background: #2c58ab;
            color: #fff;
        }
    }
}
</style>