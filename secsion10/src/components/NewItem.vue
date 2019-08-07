<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<form>
			<legend>Thêm từ</legend>
		
			<div class="form-group">
				<label for="">Nhập từ cần thêm </label>
				<input type="text" class="form-control" v-model="item" id="" name="">
			</div>

			<button @click.prevent="createNew" class="btn btn-primary">Submit</button>
		</form><br>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function() {
			return {
				item: '',
				thamso: 'tham số thứ 2'
			}
		},

		methods: {
			createNew() {
				if (this.item == ''){
					alert('Nhập vào!');
					return false;
				} else {
					this.$emit('itemAdded', this.item, this.thamso);
					this.item = '';
				}
			}
		}
	}
</script>
<style scoped>
</style>