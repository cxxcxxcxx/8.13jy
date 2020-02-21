<template>
    <ul class="homework">
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="score">80</span>
        </li>
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="score">0</span>
        </li>
        <li>
            <span class="name">一年级数学第一次成绩</span>
            <span class="score">0</span>
        </li>
    </ul>
</template>

<script>
export default {
    
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        padding: 0 160px 0 100px;
    }
}
</style>