<template>
    <div class="homework">
        <h4>总分数：500</h4>
        <div class="cont">
            <div class="nameList">
                <div class="nameItem" v-for="(item,index) in nameList" :key="'name'+index">{{item}}</div>
            </div>
            <div class="scoreList">
                <div class="scoreItem" v-for="(item,index) in scoreList" :key="'score'+index">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nameList:['表现一','表现二','表现三'],
            scoreList:['80','90','100']
        }
    }
}
</script>

<style lang="less" scoped>
.homework{
    width: 1200px;
    min-height: 610px;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    h4{
        width: 100%;
        height: 80px;
        border-bottom: 2px solid #e5e5e5;
        line-height: 80px;
        padding-left: 50px;
        font-size: 17px;
    }
    .cont{
        width: 100%;
        flex: 1;
        display: flex;
        .nameList{
            flex: 1;
            border-right: 2px solid #e5e5e5;
            .nameItem{
                width: 100%;
                height: 80px;
                border-bottom: 2px solid #e5e5e5;
                text-align: center;
                line-height: 80px;
            }
        }
        .scoreList{
            flex: 4;
            .scoreItem{
                width: 100%;
                height: 80px;
                border-bottom: 2px solid #e5e5e5;
                line-height: 80px;
                text-align: right;
                padding-right: 160px;
            }
        }
    }
}
</style>