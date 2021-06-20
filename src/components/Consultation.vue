<template>
    <div>
        <div class="form-body">
            <h2>ご相談内容</h2>
            <textarea cols="30" rows="10" v-model="consultationContent"></textarea>
        </div>
        <router-link to="/questionnaire" class="button is-primary">前へ戻る</router-link>
        <router-link to="/consultation" class="button is-primary">次へ進む</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            consultationContent: '',
        }
    },
}
</script>
