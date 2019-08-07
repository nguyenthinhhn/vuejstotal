<template>
	<div>
		<div class="progress-bar bg-success" :style="{width: (itemCount / 10) * 100 + '%'}">{{itemCount}} / 10</div>
		<app-item v-for="(item, index) in items" v-bind:data="item" v-bind:key="item" @click.native="removeItem(index)">{{ item }}</app-item>
	</div>
</template>

<script type="text/javascript">

	import Items from './items.vue';

	export default {
		props: ['items','itemCount'],

		components: {
			appItem: Items
		},

		methods: {
			removeItem(index) {
				this.$emit('itemRemove', index);
			}
		}
	}

</script>

<style scoped>
</style>