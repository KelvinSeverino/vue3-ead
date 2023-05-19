<template>
    <div>        
        <div class="pageTitle">
            <span class="title">Minhas Dúvidas</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">
            
                <div class="left">
                    <div class="card">
                        <div class="title bg-laravel">
                            <span class="text">Filtros ({{ status }})</span>
                        </div>
                        <div class="modules">
                        <ul class="classes">
                            <li :class="{active : status === ''}" @click="getMySupports(1, '')">Todos</li>
                            <li :class="{active : status === 'A'}" @click="getMySupports(1, 'A')">Aguardando Minha Resposta</li>
                            <li :class="{active : status === 'P'}" @click="getMySupports(1, 'P')">Aguardando Professor</li>
                            <li :class="{active : status === 'F'}" @click="getMySupports(1, 'F')">Finalizados</li>
                        </ul>
                        </div>
                    </div>
				</div>

                <div class="right">
                    <div class="content">
                        <div class="comments">
                            <supports-lesson/>
                            
                            <pagination
                                :data="supports"
                                @pagination-change-page="changePage"
                            ></pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { Bootstrap5Pagination } from 'laravel-vue-pagination'
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

import SupportsLesson from '@/components/Supports.vue'

export default {
	name: 'MySupportsView',
    setup() {
        const store = useStore()

        const status = ref('')  

        const supports = ref({});

        const changePage = (page) => {
            getMySupports(page, '')
        }

        const getMySupports = async (page = 1, newStatus = '') => {
            status.value = newStatus

            store.dispatch('getMySupports', {
                params: page ? { page: page } : null, 
                status: status.value
            }).then(() => {
                supports.value = JSON.parse(JSON.stringify(store.state.supports.supports))
            })
        }

        onBeforeMount(() => {
            getMySupports() 
        })         

        return {
            status,
            supports,
            getMySupports,
            changePage,
        }
    },
	components: {
		SupportsLesson,
        pagination: Bootstrap5Pagination
	}
}
</script>
  