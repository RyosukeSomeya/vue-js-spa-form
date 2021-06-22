<template>
    <div>
        <div class="columns">
            <div class="column is-half is-offset-one-quarter panel is-primary p-0">
                <p class="button is-small is-info is-pulled-left">STEP2</p>
                <h2 class="title is-6 has-text-centered panel-heading mb-0"><i class="fas fa-chalkboard-teacher"></i> 以下にお答えください</h2>
                <div class="container p-5">
                    <div class="question1 field">
                        <div class="control">
                            <p class="has-text-info-dark pb-5">現在、生命保険に加入されていますか？</p>
                            <label class="radio" for="q1-yes">
                                <input type="radio" id="q1-yes" v-model="question1" value="はい">
                                はい
                            </label>
                            <label class="radio" for="q1-no">
                                <input type="radio" id="q1-no" v-model="question1" value="いいえ">
                                いいえ
                            </label>
                        </div>
                    </div>
                    <transition name="fade" mode="out-in">
                    <div class="question2 field" v-if="question1">
                        <div class="control">
                            <p class="has-text-info-dark pb-5">
                                現在入院中ですか？または、最近3ヶ月以内に医師の診療・診察の結果、
                                入院・手術を進められたことはありますか
                            </p>
                            <label class="radio" for="q2-yes">
                                <input type="radio" id="q2-yes" v-model="question2" value="はい">
                            はい</label>
                            <label class="radio" for="q2-no">
                            <input type="radio" id="q2-no" v-model="question2" value="いいえ">
                            いいえ</label>
                        </div>
                    </div>
                    </transition>
                    <transition name="fade" mode="out-in">
                    <div class="field question3" v-if="question2">
                        <p class="has-text-info-dark pb-5">
                            過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の
                            入院をしたことがありますか？
                        </p>
                        <label class="radio" for="q3-yes">
                            <input type="radio" id="q3-yes" v-model="question3" value="はい">
                            はい
                        </label>
                        <label class="radio" for="q3-no">
                            <input type="radio" id="q3-no" v-model="question3" value="いいえ">
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
    data() {
        return {
            question1: '',
            question2: '',
            question3: '',
        }
    },
}
</script>