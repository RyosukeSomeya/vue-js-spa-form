<template>
    <header class="navbar has-background-light box">
        <h1 class="navbar-brand">
            <span class="navbar-item">Sanple Form</span>
        </h1>
        <div class="navbar-end">
            <a class="navbar-item" href="#">ログイン</a>
            <span class="navbar-item">|</span>
            <a class="navbar-item"  href="#">新規登録</a>
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