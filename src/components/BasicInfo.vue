<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter panel is-primary p-0">
                <p class="button is-small is-info is-pulled-left">STEP1</p>
                <h2 class="title is-6 has-text-centered panel-heading mb-0"><i class="fas fa-address-card"></i> お客様の情報を入力してください</h2>
                <div class="container p-5">
                    <p class="has-text-success">- 性別 -</p>
                    <div class="field">
                        <div class="control">
                            <label class="radio" for="gender-male">
                                <input type="radio" id="gender-male" v-model="gender" value="male">
                            男性</label>
                            <label class="radio" for="gender-female">
                                <input type="radio" id="gender-female" v-model="gender" value="female">
                            女性</label>
                        </div>
                    </div>

                    <p class="has-text-success mb-1">- 生年月日 -</p>
                    <div class="field is-horizontal">
                        <div class="control">
                            <div class="select has-text-left">
                                <select class="" id="birth-year" v-model="birthYear">
                                    <option v-for="n in 51" :value="n + baseYear" :key="n">
                                    {{ n + baseYear }}({{ getJpCalender(n + baseYear) }})
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="select-text">年</div>

                        <div class="control">
                            <div class="select">
                                <select class="" id="birth-month" v-model="birthMonth">
                                    <option v-for="n of 12" :key="n">{{ n }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="select-text">月</div>

                        <div class="control">
                            <div class="select">
                                <select class="" id="birth-day" v-model="birthDate">
                                    <option v-for="n of 31" :key="n">{{ n }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="select-text">日</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-centered mt-4">
            <div class="has-text-centered">
                <router-link to="/questionnaire" class="button is-primary">次へ進む&nbsp;<i class="fas fa-angle-right"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import getJpCalender from '../utils/definition';

export default {
    data() {
        return {
            gender: 'male',
            baseYear: 1979,
            birthYear: 2000,
            birthMonth: 1,
            birthDate: 1,
        }
    },
    methods: {
        getJpCalender,
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