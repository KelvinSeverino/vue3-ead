<template>
    <div>        
        <div class="pageTitle">
            <span class="title">Curso X</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">

                <modules-list/>

                <div class="right">
                    <div class="content">
                        <player-screen/>
                        
                        <supports-lesson/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModulesList from './components/Modules.vue'
import PlayerScreen from './components/Player.vue'
import SupportsLesson from './components/Supports.vue'

export default {
    name: 'ModulesAndLessons',
    components: {
        ModulesList,
        PlayerScreen,
        SupportsLesson
    }
}
</script>