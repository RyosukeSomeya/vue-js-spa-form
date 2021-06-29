import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gender: 'male',
        baseYear: 1979,
        birthYear: 2000,
        birthMonth: 1,
        birthDate: 1,
        questions: [
            `現在、生命保険に加入されていますか？`,
            `現在入院中ですか？または、最近3ヶ月以内に医師の診療・診察の結果、
            入院・手術を進められたことはありますか？`,
            `過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の
            入院をしたことがありますか？`,
        ],
        answer1: '',
        answer2: '',
        answer3: '',
        answers: [],
        consultationContent: '',
    },
    getters,
    actions,
    mutations
})
