<template>
    <div>
    	<h2 class="text-center">Header</h2>
	    <nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <ul class="nav navbar-nav">
		      <li class="active"><a href="#">Name nhận từ app: {{ namehd }}</a></li>
		      <li><a href="#">Page 1 {{name}}</a></li>
		      <li><a href="#">Age {{useage}}</a></li>
		      <li><a href="#">address : {{address}}</a></li>
		    </ul>
		  </div>
		</nav>
		<headerdetail :name="name" @nameisreset="name = $event" :resertNamefn='resertName'></headerdetail>
		<button @click="changeName()">change</button>
	</div>
</template>

<script>
	import Headerdetail from './Headerdetail.vue'
	import { eventBus } from '../../main.js';
export default {

	data: function (){
		return {
			name: 'nguyenthinh',
			address: 'địa chỉ ban đầu'
		}
	},

	methods: {
		changeName() {
			this.name = "name changer";
		},
		resertName() {
			this.name = "sky albert";
		}
	},
	created() {
		eventBus.$on('getaddres', (addres) => {
			this.address = addres;
		});
		eventBus.$on('getage', (age) => {
			this.useage = age;
		});
	},

	components: {
		headerdetail: Headerdetail
	},
	// props dùng để chuyền dữ liệu từ component cha sang compo con , và thông báo đến compo cha 
	// thông qua các sự kiện.
	props: {
		namehd: String,
		useage: Number,
	}
}
</script>

<style scoped>
	div {
		background-color: #ff7300;
	}
</style>
