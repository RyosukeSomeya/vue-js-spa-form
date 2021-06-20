<template>
    <header class="header">
        <h1 class="app-title">Sanple Form</h1>
        <div class="header-menu">
            <a href="#">ログイン</a>|
            <a href="#">新規登録</a>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    background: #eee;
}
.header-menu {
    display: flex;
    align-items: center;
    padding: 1rem;
}
.header-menu a {
    padding: 0 15px;
}
</style>