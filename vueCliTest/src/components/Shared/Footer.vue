<template>
    <div>
	    <h2 class="text-center">this is footer</h2>
	    <p>age: {{ useage }}</p>
	    <button @click="editAge()">change smy age</button>
	    <button @click="getAddress()">getaddress</button>
	</div>
</template>

<script>
	import { eventBus } from '../../main.js';
export default {
	data: function (){
		return {
			obj: 'footer'
		}
	},

	methods: {
		editAge() {
			this.useage = 30;
			this.$emit('ageisedit', this.useage);
		},
		getAddress() {
			eventBus.$emit('getaddres', 'hà nội địa chỉ nhận từ footer');
			eventBus.$emit('getage', 100);
		}
	},
	props: {
		useage: Number,
	}
}
</script>

<style scoped>
	div {
		background-color: gray;
	}
</style>

