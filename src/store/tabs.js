import Cookies from "js-cookie"

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
        menu:[

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
        removeTag(state,index){
            
            // const index = state.tabsList.findIndex(t=>t.name === val.name)  
            // const curIndex = state.tabsList.findIndex(t=>t.name === this.$route.name) 
            state.tabsList.splice(index,1)
            
        },
        setMenu(state,val){
            state.menu = val
            Cookies.set('menu',JSON.stringify(val))
        },
        addMenu(state,router){
            if(Cookies.get('menu')){
                const menu = JSON.parse(Cookies.get('menu'))
                state.menu = menu
                const menuArray = []
                menu.forEach(item=>{
                    if(item.children){
                        item.children = item.children.map(item=>{
                            item.component = () =>import(`../views/${item.url}`)
                            return item
                        })
                        menuArray.push(...item.children)
                    }else{
                        item.component = ()=>import(`../views/${item.url}`)
                        menuArray.push(item)
                    }
                })
                
                menuArray.forEach(item=>{
                    router.addRoute('main',item)
                })
            }
        }
    },
}