<template>
    <div>
		<p>My adress: {{ address }}</p>
		<hr>
		<button @click="changePhone">Show my phone</button>
	</div>
</template>

<script>
export default {
	data: function (){
		return {
			address: 'ha noi'
		}
	},

	methods: {
		changePhone(){
			this.address = "0342025533";
		}
	}
}
</script>

<style>

</style>
