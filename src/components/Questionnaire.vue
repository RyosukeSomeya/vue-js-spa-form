<template>
    <div>
        <div class="form-body">
            <h2>以下にお答えください</h2>
            <div class="question1">
                <p>現在、生命保険に加入されていますか？</p>
                <input type="radio" id="question1-y" v-model="question1" value="はい">
                <label for="gender-male">はい</label>
                <input type="radio" id="question1-y" v-model="question1" value="いいえ">
                <label for="gender-female">いいえ</label>
            </div>
            <transition name="fade" mode="out-in">
            <div class="question2" v-if="question1">
                <p>
                    現在入院中ですか？または、最近3ヶ月以内に医師の診療・診察の結果、
                    入院・手術を進められたことはありますか
                </p>
                <input type="radio" id="question2-y" v-model="question2" value="はい">
                <label for="gender-male">はい</label>
                <input type="radio" id="question2-y" v-model="question2" value="いいえ">
                <label for="gender-female">いいえ</label>
            </div>
            </transition>
            <transition name="fade" mode="out-in">
            <div class="question3" v-if="question2">
                <p>
                    過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の
                    入院をしたことがありますか？
                </p>
                <input type="radio" id="question3-y" v-model="question3" value="はい">
                <label for="gender-male">はい</label>
                <input type="radio" id="question3-y" v-model="question3" value="いいえ">
                <label for="gender-female">いいえ</label>
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