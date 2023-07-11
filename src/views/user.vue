<template>

    <div style="height: 90%;" class="manage">
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
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="birth" label="出生日期">
                    <el-date-picker value-format="yyyy-MM-dd" v-model="form.birth" type="date" placeholder="选择日期时间">
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
        <div class="manage-header">
            <el-button @click="handleAdd" type="primary">+ 新增</el-button>
        </div>
        <el-table height="90%" :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
                <template slot-scope="scope">
                    <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="birth" label="出生日期">
            </el-table-column>
            <el-table-column prop="addr" label="地址">
            </el-table-column>
            <el-table-column prop="edit" label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
import {
    addUser,
    delUser,
    getUser
} from '../api'
export default {
    name: '',
    data() {
        return {
            modalType: 0, // 0 新增   1 编辑
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',
            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入姓名'
                }, ],
                age: [{
                    required: true,
                    message: '请输入年龄'
                }, ],
                sex: [{
                    required: true,
                    message: '请输入性别'
                }, ],
                birth: [{
                    required: true,
                    message: '请输入出生日期'
                }, ],
                addr: [{
                    required: true,
                    message: '请输入地址'
                }, ],
            },
            tableData: [],
        }
    },
    methods: {
        handleAdd() {
            this.modalType = 0
            this.dialogVisible = true
        },
        handleDel(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delUser({id:row.id}).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handleEdit(row) {
            this.modalType = 1
            this.dialogVisible = true
            this.form = JSON.parse(JSON.stringify(row)) // row
        },
        // 提交用户表单
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (this.modalType === 0) {
                        addUser(this.form).then(() => {
                            this.getList()
                        })
                    } else {
                        editUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                    this.handelClose()
                }
            })
        },
        cancel() {
            this.handelClose()

        },
        handelClose() {
            this.$refs.form.resetFields();
            this.form = {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: '',
            }
            this.dialogVisible = false
        },
        getList() {
            getUser().then(res => {
                this.tableData = res.data.list
            })
        },
    },
    mounted() {
        this.getList()
    },
}
</script>

<style lang="scss" scoped>
.manage{
    
}
</style>
