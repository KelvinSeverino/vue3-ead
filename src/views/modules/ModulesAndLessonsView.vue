<template>
    <div>        
        <div class="pageTitle">
            <span class="title">{{ course.name }}</span>
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
import { useStore } from 'vuex'
import { computed } from 'vue'

import ModulesList from './components/Modules.vue'
import PlayerScreen from './components/Player.vue'
import SupportsLesson from './components/Supports.vue'

export default {
    name: 'ModulesAndLessons',

    setup() {
        const store = useStore()

        const course = computed(() => store.state.courses.courseSelected)

        return {
            course
        }
    },

    components: {
        ModulesList,
        PlayerScreen,
        SupportsLesson
    }
}
</script>