<template>
<div>
    <el-form label-width="70px" :inline="true" class="login-container" ref="form" :rules="rules" :model="form" >
        <h3 class="login-title">系统登录</h3>
        <!-- 是prop，不是props，prop要写在el-form-item里 -->
        <el-form-item label="用户名" prop="username" >
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"  type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="btn-wrap"> 
            <el-button @click="sumit" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '@/api'
export default {
    name: '',
    data() {
        return {
            form:{
                username:'',
                password:'',
            },
            rules:{
                username:[
                    {required:true,trigger:'blur',message:'请输入用户名'}
                ],
                password:[
                    {required:true,trigger:'blur',message:'请输入用密码'}
                ],
            },
        }
    },
    methods:{
        sumit(){
            
            // const token = Mock.Random.guid()
            // Cookie.set('token',token)

            this.$refs.form.validate(validate=>{
                
                if(validate){
                    getMenu(this.form).then( res=>{
                        if(res.data.code === 20000){
                           Cookie.set('token', data.data.token)
                           this.$router.push('/home')
                        }
                    } )
                }
            })
            
        }
    },
}
</script>

<style lang="less" scoped>
.login-container{
    width: 350px;
    margin:180px auto;
    border: 1px solid #eaeaea;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .el-input{
        width: 198px;
    }
    h3{
        text-align: center;
        margin-bottom: 40px;
        color:#505448;
    }
    .btn-wrap{
        display: flex;
        flex-direction:column;
        align-items: center;
        /deep/.el-form-item__content{
            // text-align: center;
            
            // align-items: center;
        }
    }

}
</style>
