<template>
    <div class="comments">
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
import SupportsUtils from '@/components/Supports.vue'

export default {
    name: 'SupportsLesson',
    components: {
        SupportsUtils
    }
}
</script>