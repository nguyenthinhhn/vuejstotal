<template>
    <div id="app">
        <app-new-item @itemAdded="addItem"></app-new-item>
        <app-item-layout :items="items" @itemRemove="removeItem" :item-count="items.length"></app-item-layout>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                footer
            </div>            
        </div>
    </div>
</template>

<script>
    import ItemLayout from './components/itemLayout.vue';
    import NewItem from './components/NewItem.vue';
    export default {
        data: function() {
            return {
                items: [
                    'I love you',
                    'Hello'
                ],
                maxItems: 10
            }
        },

        components: {
            appItemLayout: ItemLayout,
            appNewItem: NewItem,
        },

        methods: {
            addItem(item, thamso){
                this.items.push(item);
                this.items.push(thamso);
            },
            removeItem(index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style scoped="">
    .row{
        background-color: gray;
        color:white;
    }

    #app {
        margin: 10px;
    }
</style>
