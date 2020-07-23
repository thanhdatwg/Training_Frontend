<template>
    <header>
        <h1>{{text}}</h1>
        <button v-on:click="$emit('getData',text)">click</button>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    data () {
        return {
            text: 'test vuejs'
        }
    }
}
</script>
<style>

</style>