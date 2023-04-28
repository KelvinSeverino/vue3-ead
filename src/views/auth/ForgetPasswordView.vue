<template>
    <div>
        <auth-template 
            :type="'Forget'"
        />
    </div>
</template>

<script>
import AuthTemplate from '@/layouts/AuthTemplate.vue'

export default {
    name: 'ForgetPassword',
    components: {
        AuthTemplate
    }
}
</script>