import Vue from 'vue'
import Router from 'vue-router'

// import stuIndex from '@/components/student/index'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:()=>import('../components/student/index')
        }
    ]
})