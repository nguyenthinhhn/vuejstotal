<template>
    <div>
		<p> my name : {{ name }}</p>
		<button @click="resertname()">resert name </button>
		<button @click="resertNamefn()">resert case: call back</button>

	</div>
</template>

<script>
export default {
	// props dùng để chuyền dữ liệu từ component cha sang compo con , và thông báo đến compo cha 
	// //thông qua các sự kiện.
	props: {
		name: {
			type: String,
		},
		resertNamefn: Function
	},
	methods: {
		reversename(){
			return this.name.split("").reverse().join("");
		},
		resertname(){
			this.name = "name reset";
			this.$emit('nameisreset', this.name);
		}
	}
}
</script>

<style>

</style>
