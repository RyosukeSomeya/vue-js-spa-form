<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter panel is-primary p-0">
                <p class="button is-small is-info is-pulled-left">STEP3</p>
                <h2 class="title is-6 has-text-centered panel-heading mb-0"><i class="fas fa-file-alt"></i> ご相談内容をご記入ください</h2>
                <p class="has-text-success pt-6 px-6">- ご相談内容 -</p>
                <div class="container p-6">
                    <textarea class="textarea" cols="30" rows="10" v-model="consultationContent"></textarea>
                </div>
            </div>
        </div>
        <div class="has-text-centered">
            <router-link to="/questionnaire" class="button is-primary mr-4"><i class="fas fa-angle-left"></i>&nbsp;前へ戻る</router-link>
            <router-link to="/confirm" class="button is-primary">次へ進む&nbsp;<i class="fas fa-angle-right"></i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        consultationContent: {
            get() {
                return this.$store.getters.cosulContent;
            },
            set(inputData) {
                this.$store.dispatch('registCosulContent', inputData);
            }
        },
    }
}
</script>
