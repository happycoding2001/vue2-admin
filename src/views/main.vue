<template>
<el-container>
    <el-aside width="auto">
        <Aside></Aside>
    </el-aside>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <Tag />
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

    
<script>
import Aside from '../components/aside'
import Header from '../components/header'
import Tag from '../components/tag'
export default {
    components:{
        Aside,
        Header,
        Tag,
    },
    name: '',
    data() {
        return {
            
        }
    }
}
</script>

    
<style lang="scss" scoped>
.el-header{
    padding:0;
}
</style>
