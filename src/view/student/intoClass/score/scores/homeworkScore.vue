<template>
    <ul class="homework">
        <li>
            <span>已批1</span>
            <span>未批1</span>
            <span>未交2</span>
        </li>
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="state">已批</span>
            <span class="score">80</span>
        </li>
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="state">未批</span>
            <span class="score">0</span>
        </li>
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="state">未交</span>
            <span class="score">0</span>
        </li>
    </ul>
</template>

<script>
export default {
    mounted(){
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
    li{
        width: 100%;
        height: 80px;
        border-bottom: 2px solid #e5e5e5;
        line-height: 80px;
    }
    li:first-child{
        // padding: 0 108px;
        display: flex;
        justify-content: space-around;
        // justify-content: space-between;
        align-items: center;
        font-size: 15px;
        span:nth-child(1){
            color: #2c58ab;
        }
        span:nth-child(3){
            color: red;
        }
    }
    li:not(:first-child){
        display: flex;
        align-items: center;
        font-size: 15px;
        .name{
            flex: 6;
            padding-left: 50px;
        }
        .state{
            flex: 0.6;
        }
        .score{
            flex: 1.3;
        }
    }
}
</style>