<template>
    <div>
        <auth-template 
            :type="'Login'"
        />
    </div>
</template>

<script>
import AuthTemplate from '@/layouts/AuthTemplate.vue'

export default {
    name: 'LogIn',
    components: {
        AuthTemplate
    }
}
</script>