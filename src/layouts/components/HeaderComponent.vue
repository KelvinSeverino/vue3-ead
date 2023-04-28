<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars"></span>
            <span class="logo">
                <router-link :to="{name: 'ead.home'}">    
                    <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTI">
                </router-link>
            </span>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header-component'
}
</script>