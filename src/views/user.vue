<template>
<div>
    <div class="manage">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handelClose">
            <el-form :inline="true" ref="form" :rules="rules" :model="form" label-width="80px">
                <el-form-item prop="name" label="姓名">
                    <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="birth" label="出生日期">
                    <el-date-picker v-model="form.birth" type="date" placeholder="选择日期时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="addr" label="地址">
                    <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-head">
            <el-button @click="dialogVisible=true" type="primary">+ 新增</el-button>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',
            },
            rules:{
                name:[
                    {required:true,message:'请输入姓名'},
                ],
                age:[
                    {required:true,message:'请输入年龄'},
                ],
                sex:[
                    {required:true,message:'请输入性别'},
                ],
                birth:[
                    {required:true,message:'请输入出生日期'},
                ],
                addr:[
                    {required:true,message:'请输入地址'},
                ],
            },
        }
    },
    methods:{
        // 提交用户表单
        submit(){
            this.$refs.form.validate( (valid)=>{
                if(valid){

                    this.handelClose()
                }
            } )
        },
        cancel(){
            this.handelClose()

        },
        handelClose(){
            this.$refs.form.resetFields();
            this.dialogVisible = false
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
