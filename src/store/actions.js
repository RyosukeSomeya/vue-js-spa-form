// stateのデータの操作を実行する関数呼び出し
export default {
    registGender({ commit }, inputData) {
        commit("registGender", inputData);
    },
    registBirthYear({ commit }, inputData) {
        commit("registBirthYear", inputData);
    },
    registBirthMonth({ commit }, inputData) {
        commit("registBirthMonth", inputData);
    },
    registBirthDate({ commit }, inputData) {
        commit("registBirthDate", inputData);
    },
    registAnswer1({ commit }, inputData) {
        commit("registAnswer1", inputData);
    },
    registAnswer2({ commit }, inputData) {
        commit("registAnswer2", inputData);
    },
    registAnswer3({ commit }, inputData) {
        commit("registAnswer3", inputData);
    },
    registCosulContent({ commit }, inputData) {
        commit("registCosulContent", inputData);
    },
    mergeAnswers({ commit }) {
        commit("mergeAnswers");
    },
}
