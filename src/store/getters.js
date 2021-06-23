// vuexのstateの算出プロパティ用
export default {
    gender: state => {
        let genderJp = '男性'
        if (state.gender === 'female') {
            genderJp = '女性';
        }
        return genderJp;
    },
    baseYear: state => state.baseYear,
    birthYear: state => state.birthYear,
    birthMonth: state => state.birthMonth,
    birthDate: state => state.birthDate,
    birthDay: state => {
        const birthDay = `${state.birthYear}年${state.birthMonth}月${state.birthDate}日`
        return birthDay;
    },
    questions: state => state.questions,
    answers: state => state.answers,
    answer1: state => state.answer1,
    answer2: state => state.answer2,
    answer3: state => state.answer3,
    cosulContent: state => state.consultationContent,
}