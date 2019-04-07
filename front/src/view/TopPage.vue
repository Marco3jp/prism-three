<template>
    <div>
        <h1>Prism Three</h1>
        <h2 id="what-is-this">これはなに？</h2>
        <p>タカラトミーアーツがエイプリルフールネタで超次元桃山サッカーしてたので作ろうと思った。</p>
        <h2 id="can-i-play">プレイは？</h2>
        <p>現在開発中ですが、
            <router-link to="/title">こちら</router-link>
            で見れるかも。
        </p>
        <h2 id="how-to-make">どうやって作ってるか</h2>
        <p>以下みたいなやつ使ってる</p>
        <ul>
            <li>TypeScript</li>
            <li>Vue</li>
            <li>VueRouter</li>
            <li>Vuex</li>
        </ul>
        <h2 id="memo">メモ的なやつ</h2>
        <h3>実は</h3>
        <p>フロントエンドの環境を作るのが初めてで手間取りまくってます。npmで管理する環境を使ったことはあっても自分で立てたことなかったのでいい経験だった……。</p>
        <h3>ミス</h3>
        <p>scriptタグにlangつけ忘れて環境ミスった……？とかやりまくってた。落ち着け。</p>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TopPage"
    }
</script>

<style scoped>

</style>