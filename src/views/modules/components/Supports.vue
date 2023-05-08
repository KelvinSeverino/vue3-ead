<template>
    <div class="comments" v-show="lesson.nome">
        <div class="header">
            <span class="title">Dúvidas (total: {{ supports.length }})<span v-if="loading">(Carregando...)</span> </span>
            <button class="btn primary"
                @click.prevent="modal.showModal = true">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <supports-utils/>

        <modal-support-component
            :show-modal="modal.showModal"
            :support-reply="modal.supportReply"
            @closeModal="modal.showModal = false"    
        >            
        </modal-support-component>
    </div>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'

import SupportsUtils from '@/components/Supports.vue'
import ModalSupportComponent from '@/components/SupportModalComponent.vue'

export default {
    name: 'SupportsLesson',
    setup() {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)
        const supports = computed(() => store.state.supports.supports.data)

        const loading = ref(false)

        const modal = ref({
            showModal: false,
            supportReply: ''
        })

        //Evento de observacao
        watch(
            () => store.state.courses.lessonPlayer, //Se mudar executa abaixo
            () => {
                loading.value = true
                //Chama Metodo para setar os suportes vindos da API
                store.dispatch('getSupportsOfLesson', lesson.value.id)
                        .finally(() => loading.value = false)
            }
        )

        return {
            lesson,
            loading,
            supports,
            modal
        }
    },
    components: {
        SupportsUtils,
        ModalSupportComponent
    }
}
</script>