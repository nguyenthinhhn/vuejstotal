<template>
	<div>
		<h2>{{ cardWords }}</h2>
		<div class="title">
			<slot name="title"></slot>
		</div>
		<div class="">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['cardWords']
	}
</script>
<style scoped="">
	div {
		border: 1px solid #ccc;
		padding: 30px;
		margin: 20px auto;
		text-align: center;
	}
	h4 {
        color: red;
    }

</style>