<template>
    <div>
        <div class="form-body">
            <h2>以下にお答えください</h2>
            <div class="question1">
                <p>現在、生命保険に加入されていますか？</p>
                <input type="radio" id="q1-yes" v-model="question1" value="はい">
                <label for="q1-yes">はい</label>
                <input type="radio" id="q1-no" v-model="question1" value="いいえ">
                <label for="q1-no">いいえ</label>
            </div>
            <transition name="fade" mode="out-in">
            <div class="question2" v-if="question1">
                <p>
                    現在入院中ですか？または、最近3ヶ月以内に医師の診療・診察の結果、
                    入院・手術を進められたことはありますか
                </p>
                <input type="radio" id="q2-yes" v-model="question2" value="はい">
                <label for="q2-yes">はい</label>
                <input type="radio" id="q2-no" v-model="question2" value="いいえ">
                <label for="q2-no">いいえ</label>
            </div>
            </transition>
            <transition name="fade" mode="out-in">
            <div class="question3" v-if="question2">
                <p>
                    過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の
                    入院をしたことがありますか？
                </p>
                <input type="radio" id="q3-yes" v-model="question3" value="はい">
                <label for="q3-yes">はい</label>
                <input type="radio" id="q3-no" v-model="question3" value="いいえ">
                <label for="q3-no">いいえ</label>
            </div>
            </transition>
        </div>
        <router-link to="/">前へ戻る</router-link>
        <router-link to="/consultation">次へ進む</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question1: '',
            question2: '',
            question3: '',
        }
    },
}
</script>