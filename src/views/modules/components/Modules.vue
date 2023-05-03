<template>
    <div>        
        <div class="left">
            <div class="card">
                <div class="title bg-laravel">
                    <span class="text">Modulos</span>
                    <span class="icon far fa-stream"></span>
                </div>

                <div class="modules" v-for="module in modules" :key="module.id">
                    <div class="name">
                        <span class="text">{{ module.nome }}</span>
                        <span class="icon fas fa-sort-down"></span>
                    </div>
                    <ul class="classes">
                        <li class="active" v-for="lesson in module.lessons" :key="lesson.id">
                            <span class="nameLesson">{{ lesson.nome }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'ModulesList',

    setup() {
        const store = useStore()

        //const course = computed(() => store.state.courses.courseSelected)
        const modules = computed(() => store.state.courses.courseSelected.modules)

        return {
            //course,
            modules
        }
    },
}
</script>