<template>
    <h1 class="list-user">{{user.name}}</h1>
</template>

<script>
export default {
    name: 'User',
    props: {
        user: Object
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>