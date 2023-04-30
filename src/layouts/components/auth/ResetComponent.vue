<template>
    <div class="decor" style="background-image: url('./assets/images/building.jpg');">
        <div class="content">
            <span class="logo">
                <img :src="require('@/assets/images/logo.svg')" alt="">
            </span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span class="description">
                <p>
                    Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                </p>
            </span>
            <span class="copyright fontSmall">
                Todos os Direitos reservados - <b>Especializati</b>
            </span>
        </div>
    </div>
    
    <div class="login">
        <div class="content">
            <span class="logo">
                <img :src="require('@/assets/images/logoDark.svg')" alt="">
            </span>
            <span>
                <p>Seja muito bem vindo!</p>
            </span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span class="description">
                Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
            </span>
            <form action="/dist/index.html" method="">
                <div class="groupForm">
                    <i class="far fa-envelope"></i>
                    <input type="email" name="email" placeholder="E-mail" v-model="email" required>
                </div>
                <div class="groupForm">
                    <i class="far fa-key"></i>
                    <input type="password" name="password" placeholder="Senha" v-model="password" required>
                    <i class="far fa-eye buttom"></i>
                </div>
                <button 
                    :class="[
                        'btn', 
                        'primary',
                        loading ? 'loading' : ''
                    ]"
                    type="submit" 
                    @click.prevent="auth">
                    <span v-if="loading">Alterando...</span>
                    <span v-else>Alterar Senha</span>
                </button>
            </form>
        </div>
        <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
        </span>
    </div>
</template>

<script>
//import router from '@/router'
import { ref } from 'vue'

import router from '@/router'
import ResetPasswordService from '@/services/password.reset.service'

export default {
    name: 'reset-component',
    props: {
        token: {
            require: true,
        }
    },
    setup(props) {
        const email = ref("")
        const password = ref("")
        const loading = ref("")

        const auth = () => {
            loading.value = true

            //Chamando action reset da ResetPasswordService
            ResetPasswordService.reset({
                email: email.value,
                password: password.value,
                token: props.token
            })
            .then(() => router.push({name: 'auth'}))
            .catch(() => alert("Acesso Negado!"))
            .finally(() => loading.value = false)
        }

        return {
            //login,
            auth,
            email,
            password,
            loading,
        }
    }
}
</script>