export default {
    state:{
        isCollapse:false, 
        tabsList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
        ],
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            // console.log(val,'val')
            
            // if(val.name !== 'home'){
                const index = state.tabsList.findIndex(t=>t.name === val.name)  
                if(index === -1){
                    state.tabsList.push(val)
                }
            // }
        },
    },
}