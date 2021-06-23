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
                    <div class="content">
                        <p class="has-text-success">- 現在、生命保険に加入されていますか？ -</p>
                        <p>{{ answer1 }}</p>
                    </div>
                    <div class="content">
                        <p class="has-text-success">
                            - 現在入院中ですか？または、最近3ヶ月以内に医師の診療・診察の結果、
                            入院・手術を進められたことはありますか？ -
                        </p>
                        <p>{{ answer2 }}</p>
                    </div>
                    <div class="content">
                    <p class="has-text-success">
                        - 過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の
                        入院をしたことがありますか？ -
                    </p>
                    <p>{{ answer3 }}</p>
                    </div>
                    <div class="content">
                        <p class="has-text-success mb-1">- ご相談内容 -</p>
                        <p>{{ consultationContent }}</p>
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
    data() {
        return {
            gender: this.$store.state.gender,
            birthDay: '2000年1月1日',
            answer1: 'はい',
            answer2: 'いいえ',
            answer3: 'はい',
            consultationContent: '相談内容テキスト 相談内容テキスト 相談内容テキスト',
        }
    },
}
</script>

<style>
.select-text {
    display: flex;
    align-items: center;
    margin: 0 .5rem;
}
</style>