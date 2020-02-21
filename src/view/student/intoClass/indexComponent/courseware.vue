<template>
    <div class="courseware">
        <div v-for="m in 3" :key='m' class="item">
            <div class="item_top">
                <div class="data">
                    <div class="data_left">课件互动</div>
                    <div class="dates">20/10/10 12:00</div>
                </div>
                <img src="@/assets/student/icon_sy_gd@3x.png" alt="">
            </div>
            <div class="item_botm">
                <div class="item_title">
                    <img src="@/assets/student/icon_sy_kj@3x.png" alt="">
                    <span>高等数学</span>
                </div>
                <div class="btn">进入课程</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.courseware{
    width: 786px;
    height: auto;
    .item{
        width: 100%;
        height: 116px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        margin-bottom: 20px;
        padding: 13px 18px 19px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .item_top,.item_botm{
            width: 100%;
            display: flex;
            box-sizing: border-box;
            justify-content: space-between;
        }
        .item_top{
            font-size: 14px;
            align-items: flex-start;
            .data{
                display: flex;
                align-items: center;
                .data_left{
                    color: #fff;
                    width: 70px;
                    height: 30px;
                    background: #2c58ab;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 5px;
                    margin-right: 9px;
                }
                .datas{
                    color: #8f8f8f;
                }
            }
            img{
                width: 25px;
                height: 6px;
            }
        }
        .item_botm{
            align-items: flex-end;
            font-size: 16px;
            padding-right: 40px;
            .item_title{
                img{
                    width: 37px;
                    height: 34px;
                    margin-right: 12px;
                }
            }
            .btn{
                width: 120px;
                height: 50px;
                background: #2c58ab;
                color: #fff;
                border-radius: 5px;
                text-align: center;
                line-height: 50px;
                cursor: pointer;
            }
        }
    }
}
</style>