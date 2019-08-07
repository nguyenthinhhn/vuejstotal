<template>
	<div>
		<h2>THis is contact</h2>
		<button @click="counter++">count +</button>
		<p>{{ counter }}</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				counter: 0
			}
		},
	}
</script>
<style scoped>

</style>