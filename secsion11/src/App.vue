<template>
    <div id="app">
        <app-form></app-form>
    </div>
</template>

<script>
    import Form from './components/Form.vue';
    export default {
        data: function() {
            return {
                selectedComponent: 'appCard',
            }
        },
        components: {
            appForm: Form,
        }
    }
</script>

<style>

</style>
