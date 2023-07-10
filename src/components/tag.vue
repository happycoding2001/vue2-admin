<template>
<div class="tabs">
    <el-tag v-for="item in tags" :key="item.path" :closable="item.name!=='home'" :effect="$route.name === item.name?'dark':'plan'">
        {{ item.label }}
    </el-tag>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: '',
    data() {
        return {

        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tabs.tabsList
        })
    },
}
</script>

<style lang="less" scoped>

</style>
