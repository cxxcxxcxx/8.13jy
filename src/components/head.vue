<template>
    <div class="right">
        <img class="news_img" src="../assets/student/icon_sy_xx@3x.png" alt="">
        <img class="head_img" src="../assets/student/tx_sy_img1@3x.png" alt="">
        <a-menu mode="inline" :openKeys="openKeys" @openChange="onOpenChange" style="width: 96px">
            <a-sub-menu key="sub1">
                <span slot="title"><span>张三</span></span>
                <a-menu-item key="1">个人信息</a-menu-item>
                <a-menu-item key="2">Option 2</a-menu-item>
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rootSubmenuKeys: ['sub1'],
            openKeys: [],
        }
    },
    methods: {
      onOpenChange(openKeys) {
          console.log(openKeys)
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    },
}
</script>

<style lang="less" scoped>
.right{
    width: 190px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    select{
        width: 96px;
        height: 36px;
        border: 2px solid #e5e5e5;
        border-radius: 5px;
        font-size: 19px;
    }
    .news_img{
        width: 21px;
        height: 25px;
    }
    .head_img{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin: 0 6px 0 10px;
    }
    .ant-menu{
        position: absolute;
        top: 25px;
        right: 0;
        .ant-menu-submenu{
            .ant-menu-sub{
                .ant-menu-item{
                    padding-left: 20px !important;
                    border-radius: 10px
                }
            }
            .ant-menu-sub.ant-menu-inline{
                border-radius: 10px;
            }
        } 
    }
    .ant-menu-inline{
        border: 2px solid #e5e5e5;
        border-radius: 10px;
        padding-bottom: 5px;
    }
}
</style>