<template>
<div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>{{isCollapse? '后台' :'通用后台管理'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  @click="clickMenu(subItem)"  v-for="subItem in item.children" :index="item.url">{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>
</div>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu{
    border-right: none;
    height: 100vh;
    h3{
        color:#fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>

<script>
import Cookies from "js-cookie"
export default {
    data() {
        return {
            
        };
    },
    methods: {
        clickMenu(item){
            this.$router.push(item.path,()=>{})//这里传第二个参数，是因为最新版的vue-router返回的是promise，同一个链接点第二次会报错
            this.$store.commit('selectMenu',item)

        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
    computed: {
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tabs.isCollapse
        },
        menuData(){
            return JSON.parse(Cookies.get('menu')) || this.$store.state.tabs.menu 
        },
    }
}
</script>
