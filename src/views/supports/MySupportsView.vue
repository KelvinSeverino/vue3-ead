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
                            <li :class="{active : status === ''}" @click="getMySupportsWithStatus('')">Todos</li>
                            <li :class="{active : status === 'A'}" @click="getMySupportsWithStatus('A')">Aguardando Minha Resposta</li>
                            <li :class="{active : status === 'P'}" @click="getMySupportsWithStatus('P')">Aguardando Professor</li>
                            <li :class="{active : status === 'F'}" @click="getMySupportsWithStatus('F')">Finalizados</li>
                        </ul>
                        </div>
                    </div>
				</div>

                <div class="right">
                    <div class="content">
                        <div class="comments">
                          <supports-lesson/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import SupportsLesson from '@/components/Supports.vue'

export default {
	name: 'MySupportsView',
	components: {
		SupportsLesson
	},
    setup() {
        const store = useStore()

        const status = ref('')

        onMounted(() => {
            store.dispatch('getMySupports', status.value)            
        })

        const getMySupportsWithStatus = (newStatus) => {
            status.value = newStatus

            store.dispatch('getMySupports', status.value)
        }

        return {
            status,
            getMySupportsWithStatus
        }
    }
}
</script>
  