<template>
    <div>
        <user v-for="user in listUser" v-bind:key="user.id" v-bind:user="user"/>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name: 'ListUser',
    props: {
        listUser: Array
    },
    data () {
        return {
        }
    },
    components: {
        User
    }
}
</script>

<style>
    .list-user{
        
    }
</style>