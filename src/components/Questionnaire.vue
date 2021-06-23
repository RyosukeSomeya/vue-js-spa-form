<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter panel is-primary p-0">
                <p class="button is-small is-info is-pulled-left">STEP2</p>
                <h2 class="title is-6 has-text-centered panel-heading mb-0"><i class="fas fa-chalkboard-teacher"></i> 以下にお答えください</h2>
                <div class="container p-6">
                    <div class="question1 field pb-5">
                        <div class="control">
                            <p class="has-text-info-dark pb-4">{{ questions[0] }}</p>
                            <label class="radio" for="q1-yes">
                                <input type="radio" id="q1-yes" name='question1' v-model="question1" value="はい">
                                はい
                            </label>
                            <label class="radio" for="q1-no">
                                <input type="radio" id="q1-no" name='question1' v-model="question1" value="いいえ">
                                いいえ
                            </label>
                        </div>
                    </div>
                    <transition name="fade" mode="out-in">
                    <div class="question2 field pb-5" v-if="question1">
                        <div class="control">
                            <p class="has-text-info-dark pb-4">{{ questions[1] }}</p>
                            <label class="radio" for="q2-yes">
                                <input type="radio" id="q2-yes" name='question2' v-model="question2" value="はい">
                            はい</label>
                            <label class="radio" for="q2-no">
                            <input type="radio" id="q2-no" name='question2' v-model="question2" value="いいえ">
                            いいえ</label>
                        </div>
                    </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                    <div class="field question3 pb-5" v-if="question2">
                        <p class="has-text-info-dark pb-4">{{ questions[2] }}</p>
                        <label class="radio" for="q3-yes">
                            <input type="radio" id="q3-yes" name='question3' v-model="question3" value="はい">
                            はい
                        </label>
                        <label class="radio" for="q3-no">
                            <input type="radio" id="q3-no" name='question3' v-model="question3" value="いいえ">
                            いいえ
                        </label>
                    </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="has-text-centered">
            <router-link to="/" class="button is-primary mr-4"><i class="fas fa-angle-left"></i>&nbsp;前へ戻る</router-link>
            <router-link to="/consultation" class="button is-primary">次へ進む&nbsp;<i class="fas fa-angle-right"></i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        questions: {
            get() {
                return this.$store.getters.questions;
            }
        },
        question1: {
            get() {
                return this.$store.getters.question1;
            },
            set(inputData) {
                this.$store.dispatch('registQuestion1', inputData);
            }
        },
        question2: {
            get() {
                return this.$store.getters.question2;
            },
            set(inputData) {
                this.$store.dispatch('registQuestion2', inputData);
            }
        },
        question3: {
            get() {
                return this.$store.getters.question3;
            },
            set(inputData) {
                this.$store.dispatch('registQuestion3', inputData);
            }
        },
    }
}
</script>