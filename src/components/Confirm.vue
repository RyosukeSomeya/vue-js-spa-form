<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter panel is-primary p-0">
                <p class="button is-small is-info is-pulled-left">STEP4</p>
                <h2 class="title is-6 has-text-centered panel-heading mb-0"><i class="fas fa-file-alt"></i>  以下の内容をご確認ください</h2>
                <div class="container p-6">
                    <div class="content">
                        <p class="has-text-success">- 性別 -</p>
                        <p>{{ gender }}</p>
                    </div>
                    <div class="content">
                        <p class="has-text-success mb-1">- 生年月日 -</p>
                        <p>{{ birthDay }}</p>
                    </div>
                    <div class="content" v-for="(qustion, index) in questions" :key="qustion">
                        <p class="has-text-success">- {{ qustion }} -</p>
                        <p>{{ answers[index] }}</p>
                    </div>

                    <div class="content">
                        <p class="has-text-success mb-1">- ご相談内容 -</p>
                        <pre>{{ consulContent }}</pre>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-centered mt-4">
            <div class="has-text-centered">
                <router-link to="/consultation" class="button is-primary mr-4"><i class="fas fa-angle-left"></i>&nbsp;前へ戻る</router-link>
                <router-link to="#" class="button is-primary">送信&nbsp;<i class="fas fa-angle-right"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        gender() {
            return this.$store.getters.gender;
        },
        birthDay() {
            return this.$store.getters.birthDay;
        },
        questions() {
            return this.$store.getters.questions;
        },
        consulContent() {
            return this.$store.getters.cosulContent;
        },
        answers() {
            this.mergeAnswers();
            return this.$store.getters.answers;
        }
    },
    methods: {
        mergeAnswers() {
            this.$store.dispatch('mergeAnswers');
        }
    }
}
</script>

<style>
.select-text {
    display: flex;
    align-items: center;
    margin: 0 .5rem;
}
</style>