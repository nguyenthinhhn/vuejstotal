<template>
	<div class="text-centrer box">
		<form >
			<legend>Profile</legend>
		
			<div class="form-group">
				<label for="">Name</label>
				<input type="text" class="form-control" id="" v-model="userData.name">
			</div>

			<div class="form-group">
				<label for="">Email</label>
				<input type="text" class="form-control" id="" v-model="userData.email">
			</div>

			<div class="form-group">
				<label for="">Age</label>
				<input type="number" class="form-control" id="" v-model="userData.age">
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form><br>
		<div class="show">
			<div>name : {{userData.name }}</div>
			<div>email : {{userData.email }}</div>
			<div>age : {{userData.age }}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				userData: {
					name: 'Name',
					email: 'Email',
					age: 0
				}
			}
		}
	}
</script>
<style scoped>
.box {
	margin-left: 10%;
	margin-right: 10%;
	border: 1px solid black;
}
.show {
	margin-left: 10%;
	margin-right: 10%;
}
form {
	margin: 10px;
}
</style>