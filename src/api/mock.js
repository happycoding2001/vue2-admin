import Mock from 'mockjs'
import homeApi from '../api/mockServerData/home'
import user from '../api/mockServerData/user'

// 首页的数据
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

// 用户列表的数据
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock('/api/user/getUser',user.getUserList)

