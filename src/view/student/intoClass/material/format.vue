<template>
    <div class="format">
        <h4>支持多种格式的在线预览</h4>
        <div class="item" v-for="(item,index) in format" :key="'format'+index">
            <span class="title">【{{item.name}}】</span>
            <span class="itemName" v-for="(items,index) in item.list" :key="'item'+index">{{items}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            format:[
                {name:'视频格式',list:['mp4','flv','mov','rm','rmvb','avi','3gp','wmv','mkv','ts']},
                {name:'视频格式',list:['webm','m3u8','mpg','asf','flash','swf']},
                {name:'音频格式',list:['mp3','wma','wav','aac','flac','mid']},
                {name:'图片格式',list:['jpg','jpeg','bmp','png','gif','pad','tga','pcx','tif']},
                {name:'CAD图纸',list:['dwg','dxf','dws']},
                {name:'微软office',list:['doc','docx','ppt','pptx','xls','xlsx','rtf']}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.format{
    width: 1200px;
    height: auto;
    border: 2px solid #e5e5e5;
    border-radius: 5px;
    padding: 20px 70px 50px 130px;
    h4{
        font-size: 19px;
        text-align: center;
        margin-bottom: 50px;
    }
    .item{
        font-size: 18px;
        margin-bottom: 42px;
        .title{
            margin-right: 89px;
        }
        .itemName{
            margin-right: 50px;
        }
    }
}
</style>