// stateのデータの操作を実行する関数
export default {
    registGender(state, inputData) {
        state.gender = inputData
    },
    registBirthYear(state, inputData) {
        state.birthYear = inputData
    },
    registBirthMonth(state, inputData) {
        state.birthMonth = inputData
    },
    registBirthDate(state, inputData) {
        state.birthDate = inputData
    },
    registQuestion1(state, inputData) {
        state.question1 = inputData
    },
    registQuestion2(state, inputData) {
        state.question2 = inputData
    },
    registQuestion3(state, inputData) {
        state.question3 = inputData
    },
    registCosulContent(state, inputData) {
        state.consultationContent = inputData
    },
    mergeAnswers(state) {
        state.answers.push(state.question1);
        state.answers.push(state.question2);
        state.answers.push(state.question3);
    }
}