// stateのデータの操作を実行する関数
export default {
    registGender(state, inputData) {
        state.gender = inputData;
    },
    registBirthYear(state, inputData) {
        state.birthYear = inputData;
    },
    registBirthMonth(state, inputData) {
        state.birthMonth = inputData;
    },
    registBirthDate(state, inputData) {
        state.birthDate = inputData;
    },
    registAnswer1(state, inputData) {
        state.answer1 = inputData;
    },
    registAnswer2(state, inputData) {
        state.answer2 = inputData;
    },
    registAnswer3(state, inputData) {
        state.answer3 = inputData;
    },
    registCosulContent(state, inputData) {
        state.consultationContent = inputData;
    },
    mergeAnswers(state) {
        state.answers[0] = state.answer1;
        state.answers[1] = state.answer2;
        state.answers[2] = state.answer3;
    }
}