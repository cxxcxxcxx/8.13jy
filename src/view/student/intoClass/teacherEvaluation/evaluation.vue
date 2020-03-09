<template>
    <div class="content">
        <div class="head">
            <div @click="goBack" class="left">
                <img src="@/assets/student/icon_sy_fh_bt@3x.png" alt="">
                <span>教师评价</span>
            </div>
        </div>
        <div class="line"></div>
        <div class="cont">
            <div class="title">
                <img src="@/assets/student/tx_sy_img12@3x.png" alt="">
                <div class="right">
                    <span>牛顿</span>
                    <span>一年级语文1班</span>
                </div>
            </div>
            <div class="item">
                <div class="time">评论时间：2020年10月10日 12:12</div>
                <div class="itemCont">
                    <p>&nbsp;(本节课的加分情况) 课堂表现好三次，共9分；积极回答问题4次，共10分；课堂表现好三次，共9分；课堂表现好三次，共9分；课堂表现好三次，共9分；课堂表现好三次，共9分。</p>
                    <p>评价内容：很好很好很好~~~~~</p>
                    <div class="imgList">
                        <img src="@/assets/student/tp_sy_img9@3x.png" alt="">
                        <img src="@/assets/student/sp_sy_img10@3x.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.replace('/class')
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    .head{
        .left{
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            span{
               font-size: 19px;
            }
            img{
                width: 8px;
                height: 14px;
                margin: 0 10px 0 9px;
            }
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background: #e5e5e5;
    }
    .cont{
        width: 1200px;
        min-height: 955px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        padding: 10px 30px 0;
        margin-top: 20px;
        .title{
            font-size: 17px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            img{
                width: 68px;
                height: 78px;
                margin-right: 30px;
            }
            .right{
                display: flex;
                flex-direction: column;
            }
            
        }
        .item{
            font-size: 17px;
            .time{
                margin-bottom: 20px;
            }
            .itemCont{
                border: 2px solid #e5e5e5;
                border-radius: 5px;
                padding: 20px 8px;
                p{
                    margin-bottom: 23px;
                }
                .imgList{
                    display: flex;
                    img{
                        width: 77px;
                        height: 77px;
                        margin-right: 30px;
                    }
                }
            }
        }
    }
}
</style>