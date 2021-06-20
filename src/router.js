import Vue from 'vue'
import Router from 'vue-router'
import BasicInfo from './components/BasicInfo'
import ConsulContent from './components/ConsulContent'
import Questionnaire from './components/Questionnaire'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'basicInfo',
            component: BasicInfo
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: Questionnaire
        },
        {
            path: '/consul-content',
            name: 'consulContent',
            component: ConsulContent
        },
    ]
})