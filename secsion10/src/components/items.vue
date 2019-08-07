<template>
	<div>
		<div class="card">
			<div class="card-body item">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	}
</script>
<style scoped>
	.card {
		border: 1px solid red;
	}
	.card-body{
		color: #ff7300;
	}
	.item {
		cursor: pointer;
	}
	.item:hover {
		background-color: #b6dce4
	}
</style>