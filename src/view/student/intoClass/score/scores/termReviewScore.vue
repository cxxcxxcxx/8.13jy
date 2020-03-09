<template>
    <div class="termReview">
        <div class="info">
            <img class="head_img" src="@/assets/student/tp_sy_img11@3x.png" alt="">
            <div class="info_right">
                <div class="info_rt">
                    <span class="rt_name">牛顿</span>
                    <div class="sign">
                        <img src="../../../../../assets/student/icon_sy_touxian@3x.png" alt="">
                        <span>至尊王者</span>
                    </div>
                    <div class="progress">
                        <div :style="{width:width+'px'}" class="pro"></div>
                        <span class="pro_tip">100/202</span>
                    </div>
                    <span class="level">15级</span>
                </div>
                <div class="info_rbot">
                    <span>班级：一年级数学1班</span>
                    <span>班级排名：5</span>
                    <span>唯学分总分：500</span>
                </div>
            </div>
        </div>
        <div class="learnSuggestion">
            <h4>学习建议</h4>
            <p class="cont">表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。表现非常好，继续保持。</p>
        </div>
        <div class="creditStatistic">
            <h4>唯学分统计</h4>
            <div class="cont">
                <span>学期总分：500</span>
                <span>课堂表现优秀：+50</span>
                <span>积极回答问题：+100</span>
                <span>迟到：-25</span>
            </div>
        </div>
        <div class="jobSituation">
            <h4>作业情况</h4>
            <div class="jobList">
                <span>第一次作业：50分</span>
                <span>第二次作业：50分</span>
            </div>
            <div class="cont">
                <span>总作业次数：15</span>
                <span>提交次数：10</span>
                <span>未交次数：5</span>
                <span>平均提交次数：15</span>
                <span>作业总分：200</span>
                <span>作业得分：300</span>
                <span>平均每题分数：20</span>
                <span>作业闯关称呼：至尊王者</span>
                <span>等级：15</span>
            </div>
        </div>
        <div class="testSituation">
            <h4>测试情况</h4>
            <div class="testList">
                <span>第一次测试：100分</span>
                <span>第二次测试：100分</span>
            </div>
            <div class="cont">
                <span>总测试次数：15</span>
                <span>提交次数：15</span>
                <span>未提交次数：0</span>
                <span>平均提交次数：15</span>
                <span>测试平均分：50</span>
                <span>测试得分率：60%</span>
            </div>
        </div>
        <div class="courseSituation">
            <h4>每堂课评价情况</h4>
            <div class="courseList">
                <span>第一次课：课堂表现非常不错课堂表现非常不错课堂表现非常不错课堂表现非常不错课堂表现非常不错</span>
                <span>第二次课：课堂表现非常不错课堂表现非常不错课堂表现非常不错课堂表现非常不错课堂表现非常不错课堂表现非常不错</span>
            </div>
        </div>
        <div class="attendanceStatistic">
            <h4>考勤统计</h4>
            <div class="cont">
                <span>共15次，出勤：13；旷课：1；请假：1；迟到：0。</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            width:'100'
        }
    },
    mounted(){
    }
}
</script>

<style lang="less" scoped>
.termReview{
    width: 1200px;
    height: auto;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    padding: 30px;
    margin-top: 20px;
    .info{
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        .head_img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
        .info_right{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            .info_rt{
                display: flex;
                align-items: center;
                color: #151515;
                .rt_name{
                    font-size: 17px;
                }
                .sign{
                    margin:0 13px 0 20px;
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    img{
                        width: 16px;
                        height: 20px;
                        margin-right: 7px;
                    }
                }
                .progress{
                    width: 206px;
                    height: 20px;
                    border: 2px solid #2c58ab;
                    border-radius: 5px;
                    margin-right: 20px;
                    position: relative;
                    .pro{
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-radius: 3px;
                        height: 16px;
                        background: #2c58ab;
                        z-index: 1;                    }
                    .pro_tip{
                        font-size: 8px;
                        position: absolute;
                        top: 10%;
                        left: 45%;
                        z-index: 2;
                    }
                }
                .level{
                    font-size: 17px;
                    color: red;
                }
            }
            .info_rbot{
                margin-top: 30px;
                display: flex;
                align-items: center;
                font-size: 17px;
                color: #6e6e6e;
                span{
                    margin-right: 20px;
                }
            }
        }
    }
    .learnSuggestion, .creditStatistic,.jobSituation, .testSituation, .courseSituation, .attendanceStatistic{
        margin-bottom: 30px;
        h4{
            font-size: 17px;
            color: #151515;
            margin-bottom: 20px;
        }
        .cont,.jobList, .testList, .courseList{
            padding-left: 10px;
            font-size: 15px;
        }
    }
    .creditStatistic,.jobSituation, .testSituation{
        .cont{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            span{
                margin:0 65px 5px 0;
            }
        }
    }
    .jobSituation, .testSituation, .courseSituation{
        .jobList, .testList, .courseList{
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
        }
    }
    .courseSituation{
        .courseList{
            span{
                width: 645px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                line-height: 25px;
            }
        }
    }
}
</style>