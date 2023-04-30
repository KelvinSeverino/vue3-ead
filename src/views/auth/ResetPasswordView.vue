<template>
    <div>
        <auth-template 
            :type="'Reset'"
            :token="tokenUrl"
        />
    </div>
</template>

<script>
import AuthTemplate from '@/layouts/AuthTemplate.vue'

export default {
    name: 'ResetPassword',
    props: ['token'],
    components: {
        AuthTemplate
    },

    data(props){
        return{
            tokenUrl: props.token,
        }
    },    
}
</script>