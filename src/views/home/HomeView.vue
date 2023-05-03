<template>
  <div class="pageTitle">
        <span class="title">Meus Cursos</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>

    <div class="content">
        <ul class="listCourses">
            <card-course
                :title="'Curso de Laravel com Vue.js'"
                :image="''"
                :bgName="'laravel'">
            </card-course>
        </ul>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

import CardCourse from './components/CardCourse.vue'

export default {
    name: 'HomeView',
    
    setup() {
        const store = useStore()

        //Quando montar o componente
        onMounted(() => {
            store.dispatch('getCourses') //Roda action getCourses
        })
    },

    components: {
        CardCourse
    }
}
</script>
