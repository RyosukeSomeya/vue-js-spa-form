// stateのデータの操作を実行する関数呼び出し
export default {
    registGender({ commit }, inputData) {
        commit("registGender", inputData)
    },
    registBirthYear({ commit }, inputData) {
        commit("registBirthYear", inputData)
    },
    registBirthMonth({ commit }, inputData) {
        commit("registBirthMonth", inputData)
    },
    registBirthDate({ commit }, inputData) {
        commit("registBirthDate", inputData)
    },
    registQuestion1({ commit }, inputData) {
        commit("registQuestion1", inputData)
    },
    registQuestion2({ commit }, inputData) {
        commit("registQuestion2", inputData)
    },
    registQuestion3({ commit }, inputData) {
        commit("registQuestion3", inputData)
    },
    registCosulContent({ commit }, inputData) {
        commit("registCosulContent", inputData)
    },
    mergeAnswers({ commit }) {
        commit("mergeAnswers")
    },
}