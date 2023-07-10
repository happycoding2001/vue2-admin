<template>
<div class="tabs">
    <el-tag size="small" v-for="(item,index) in tags" @click="jump(item)" @close="closeTag(item,index)" :key="item.path" :closable="item.name!=='home'" :effect="$route.name === item.name?'dark':'plain'">
        {{ item.label }}
    </el-tag>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    name: '',
    data() {
        return {

        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tabs.tabsList
        }),
        
    },
    methods:{
        ...mapMutations(['removeTag']),
        jump(item){
            this.$router.push(item.path,()=>{})//这里传第二个参数，是因为最新版的vue-router返回的是promise，同一个链接点第二次会报错
            // this.$store.commit('selectMenu',item)
        },
        closeTag(item,index){
            let curIndex =this.tags.findIndex(t=>t.name === this.$route.name) 
            if(index === curIndex){
                if((index+1)===this.tags.length){//最后一个
                    this.$router.push( {name:this.tags[index-1].name}  )
                }else{
                    this.$router.push( {name:this.tags[index+1].name}  )
                }
                
            }
            
            // this.$store.commit('removeTag',index)
            this.removeTag(index)
        },
    }
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
