<template>
    <div>
        <transition name="fade">
            <ul id="mainMenu">
                <li>
                    <router-link :to="{name: 'ead.home'}">Início</router-link>                    
                </li>
                <li>
                    <router-link :to="{name: 'ead.mysupports'}">Minhas Dúvidas</router-link>
                </li>
                <li>                    
                    <a href="">Sair</a>
                </li>
            </ul>
        </transition>        
    </div>
</template>

<script>
export default {
    name: 'MenuComponent'
}
</script>