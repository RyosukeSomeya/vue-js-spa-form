<template>
    <div>
        <div class="form-body">
            <h2>お客様の情報を入力してください</h2>
            <p>性別</p>
            <input type="radio" id="gender-male" v-model="gender" value="male">
            <label for="gender-male">男性</label>
            <input type="radio" id="gender-female" v-model="gender" value="female">
            <label for="gender-female">女性</label>
            <p>生年月日</p>
            <select id="birth-year" v-model="birthYear">
                <option v-for="n in 51" :value="n + baseYear" :key="n">{{ n + baseYear }}({{ getJpCalender(n + baseYear) }})</option>
            </select>年
            <select id="birth-month" v-model="birthMonth">
                <option v-for="n of 12" :key="n">{{ n }}</option>
            </select>月
            <select id="birth-day" v-model="birthDate">
                <option v-for="n of 31" :key="n">{{ n }}</option>
            </select>日
        </div>
        <router-link to="/questionnaire">次へ進む</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gender: 'male',
            baseYear: 1979,
            birthYear: 1990,
            birthMonth: 1,
            birthDate: 1,
        }
    },
    methods: {
        getJpCalender: function(birthYear) {
            if (birthYear <= 1988) {
                return '昭和' + (birthYear - 1925);
            } else if (birthYear === 1989) {
                return '昭和63年/平成元年';
            } else if (birthYear >= 1990 && birthYear < 2019) {
                return '平成' + (birthYear - 1988);
            } else if (birthYear === 2019) {
                return '平成31年/令和元年';
            } else if (birthYear >= 2020) {
                return '令和' + (birthYear - 2018);
            }
        },
    }
}
</script>

<style>
.form-body {
    padding: 10px;
    border: 1px solid #18aec2;
}
</style>