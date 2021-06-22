import Vue from 'vue'
import Router from 'vue-router'
import BasicInfo from './components/BasicInfo'
import Consultation from './components/Consultation'
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
            path: '/consultation',
            name: 'consultation',
            component: Consultation
        },
    ]
})