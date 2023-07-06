<template>
<el-container>
    <el-aside width="200px">
        <Aside></Aside>
    </el-aside>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

    
<script>
import Aside from '../components/aside'
import Header from '../components/header'
export default {
    components:{
        Aside,
        Header,
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
