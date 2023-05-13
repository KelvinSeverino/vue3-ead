<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
                <img :src="require('@/assets/images/icons/laravel.svg')" alt="EspecializaTi">
            </span>
            <span class="title">{{ lesson.name }}</span>
            <router-link :to="{name: 'ead.home'}" class="btn laravel">                
                <i class="fas fa-chevron-left"></i>
                Voltar
            </router-link>
        </div>
        <iframe 
            v-if="lesson.video"
            width="100%" 
            height="auto" 
            :src="lesson.video" 
            :title="lesson.name" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
    </div>

    <div class="description-lesson" v-if="lesson.description">
        {{ lesson.description }}
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, watch } from 'vue'

export default {
    name: 'PlayerScreen',

    setup() {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        //Fica observando quando o state LessonPlayer mudar seus dados, seja ao mudar de aula
        watch(() => store.state.courses.lessonPlayer, () => {
            if (lesson.value.id != ''){
                //Cenario ideal usar o parametro do player(Youtube, Vero) para identificar o tempo de visualizacao
                setTimeout(() => store.dispatch('markLessonViewed'), 3000)                
            }
        })

        return {
            lesson
        }
    }
}
</script>