<template>
    <section id="loginPage" :style="{
        backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')'
    }">
        <div class="loginContent">
            <div class="loginCard">
                <login-component v-if="type === 'Login'"></login-component>
                <forget-component v-if="type === 'Forget'"></forget-component>
            </div>
        </div>
    </section>
</template>

<script>
import LoginComponent from './components/auth/LoginComponent.vue'
import ForgetComponent from './components/auth/ForgetComponent.vue'

export default {
    name: 'AuthTemplate',    
    props: ['type'],
    components: {
        LoginComponent,
        ForgetComponent
    }
}
</script>