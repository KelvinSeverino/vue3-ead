<template>
    <section id="loginPage" :style="{
        backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')'
    }">
        <div class="loginContent">
            <div class="loginCard">
                <login-component v-if="type === 'Login'"></login-component>
                <forget-component v-if="type === 'Forget'"></forget-component>
                <reset-component v-if="type === 'Reset'" :token="token"></reset-component>
            </div>
        </div>
    </section>
</template>

<script>
import LoginComponent from './components/auth/LoginComponent.vue'
import ForgetComponent from './components/auth/ForgetComponent.vue'
import ResetComponent from './components/auth/ResetComponent.vue'

export default {
    name: 'AuthTemplate',    
    props: ['type', 'token'],
    components: {
        LoginComponent,
        ForgetComponent,
        ResetComponent
    }
}
</script>