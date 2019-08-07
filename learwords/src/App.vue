<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-default" @click="selectedComponent = 'appCard'">Card</button>
                    <button class="btn btn-default" @click="selectedComponent = 'appContact'">Contact</button>
                    <button class="btn btn-default" @click="selectedComponent = 'appAbout'">About</button>
                </div>
            </div>
            <div class="row">
               <!--  <div>{{ selectedComponent }}</div>
                <div class="col-sm-12">
                    <app-card cardWords="hahha">
                        <h4 slot="title">this is test slot</h4>
                        <h2 slot="content">{{cardTitle}}</h2>
                    </app-card>
                </div> -->
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './components/Card.vue';
    import Contact from './components/Contact.vue';
    import About from './components/About.vue';
    export default {
        data: function() {
            return {
                cardTitle: 'White Cat',
                selectedComponent: 'appCard',
            }
        },
        components: {
            appCard: Card,
            appAbout: About,
            appContact: Contact,
        }
    }
</script>

<style>

</style>
