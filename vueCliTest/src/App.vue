<template>
    <div>
    	<div>age cha : {{ age }}</div>
        <header-component :namehd="name" :useage="age"></header-component>
        <footer-component :useage="age"
							@ageisedit="age = $event"
        ></footer-component>
    </div>
</template>

<script>
export default {
	data: function (){
		return {
			name: 'name nhận từ app',
			age: 18
		}
	},
}
</script>

<style>
	div {
		background-color: blue;
	}
</style>
