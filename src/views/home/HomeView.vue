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
                v-for="course in courses"
                :key="course.id"                
                :bgName="'laravel'"
                :course="course">
            </card-course>
        </ul>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import CardCourse from './components/CardCourse.vue'

export default {
    name: 'HomeView',
    
    setup() {
        const store = useStore()

        const courses = computed(() => store.state.courses.myCourses)

        //Quando montar o componente
        onMounted(() => {
            store.dispatch('getCourses') //Roda action getCourses
        })

        return {
            courses
        }
    },

    components: {
        CardCourse
    }
}
</script>
