<template>
    <div class="content">        

        <!-- PERGUNTAS -->
        <div class="card" v-for="support in supports.data" :key="support.id">
            <div class="commentContent main">
                <span class="avatar">
                    <img :src="[
                        support.user.image ?
                        support.user.image :
                        require('@/assets/images/avatars/user01.svg')
                    ]" :alt="support.user.name">
                </span>
                <div class="comment">
                    <div class="balloon">
                        <span class="fas fa-sort-down"></span>
                        <span class="owner"></span>
                        <span class="text">
                            {{ support.description }}
                        </span>
                    </div>
                </div>
                <button class="btn primary">
                    <span v-if="showSupport === support.id" @click.prevent="showSupport = '0'">Ocultar respostas</span>
                    <span v-else @click.prevent="showSupport = support.id">Exibir respostas ({{ support.replies.length }})</span>
                </button>
            </div>
            
            <!-- RESPOSTAS -->
            <div class="answersContent" v-show="showSupport === support.id">
                <div :class="[
                        'commentContent', 
                        {'rightContent' : support.user.id != reply.user.id}
                    ]" 
                    v-for="reply in support.replies" 
                    :key="reply.id">
                    
                    <span class="avatar" v-if="support.user.id == reply.user.id">
                        <img :src="[
                            reply.user.image ?
                            reply.user.image :
                            require('@/assets/images/avatars/user01.svg')
                        ]" :alt="reply.user.name">
                    </span>

                    <div class="comment">
                        <div class="balloon">
                            <span class="fas fa-sort-down"></span>
                            <span class="owner">{{ reply.user.name }} - {{ reply.date }}</span>
                            <span class="text">
                                {{ reply.description }}
                            </span>
                        </div>
                    </div>

                    <span class="avatar" v-if="support.user.id != reply.user.id">
                        <img :src="[
                            reply.user.image ?
                            reply.user.image :
                            require('@/assets/images/avatars/user02.svg')
                        ]" :alt="reply.user.name">
                    </span>
                </div>
                
                <span class="answer">
                    <button class="btn primary" @click.prevent="openModal(support.id)">
                        Responder
                    </button>
                </span>
            </div>
        </div>

    </div>

    <modal-support-component
        :show-modal="modal.showModal"
        :support-reply="modal.supportReply"
        @closeModal="modal.showModal = false"    
    >            
    </modal-support-component>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import ModalSupportComponent from './SupportModalComponent.vue'

export default {
    name: 'SupportsUtils',
    setup() {
        const store = useStore()

        const showSupport = ref('0')

        const supports = computed(() => store.state.supports.supports)

        const modal = ref({
            showModal: false,
            supportReply: ''
        })

        const openModal = (supportId) => modal.value = {
            showModal: true,
            supportReply: supportId
        }
                
        return {
            supports,
            showSupport,
            modal,
            openModal
        }
    },
    components: {
        ModalSupportComponent
    }
}
</script>