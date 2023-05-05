<template>
    <div class="comments" v-show="lesson.nome">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <supports-utils/>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import SupportsUtils from '@/components/Supports.vue'

export default {
    name: 'SupportsLesson',
    setup() {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        return {
            lesson
        }
    },
    components: {
        SupportsUtils
    }
}
</script>