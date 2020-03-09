<template>
	<div>
		<navHead2></navHead2>
		<div class="addmark_content" v-if="option == 0">
			<div class="addmark_content_nav flex_x">
				<div>加分设置</div>
				<div class="points_option_btn" @click="option_btn()">扣分选项</div>
			</div>
			<div class="plus_options flex_x">
				<div v-for="(item,index) in 20" :key="index" style="margin: 1.1rem;" class="flex_y">
					<div style="position: absolute;border-radius: 50%;background-color: #FF4F42;border: 1.5px solid #FFFFFF;color: #FFFFFF;font-size: 15px;margin-left: 4rem;" >+5</div>
					<img  src="../../assets/teacher/icon_sy_jf_img5.png" style="width: 5.5rem;height: 5.5rem;" />
					<span>完全掌握</span>
				</div>
				<img  src="../../assets/teacher/icon_sy_jqjfx.png" class="del" style="width: 5.5rem;height: 5.5rem;margin-top: 1.2rem;margin-left: 1.2rem;" />
			</div>
			<div>添加</div>
			<div class="flex_y">
				<input type="text" placeholder="请输入加分名称" style="border-bottom: 1.5px solid #E5E5E5;line-height: 1.875rem;margin-top: 0.8rem;" />
				<input type="text" placeholder="请输入加分值" style="border-bottom: 1.5px solid #E5E5E5;line-height: 1.875rem;margin-top: 0.8rem;" />
				<div class="flex_x" style="justify-content: space-between;margin-top: 1rem;">
					<div class="flex_y">
						<img src="../../assets/teacher/icon_sy_sc_img15.png" style="width: 3.125rem;height: 3.125rem;" />
						<span>添加图片</span>
					</div>
					<div class="flex_x" style="margin-top: 2rem;">
						<div class="add_btn">取消</div>
						<div class="cancel_btn">确认</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="delmark_content" v-if="option == 1">
			<div class="addmark_content_nav flex_x">
				<div>扣分设置</div>
				<div class="points_option_btn" @click="option_btn()">加分设置</div>
			</div>
			<div class="plus_options flex_x">
				<div v-for="(item,index) in 20" :key="index" style="margin: 1.1rem;" class="flex_y">
					<div style="width: 1.3rem;height: 1.3rem;position: absolute;border-radius: 50%;background-color: #2C58AB;border: 1.5px solid #FFFFFF;color: #FFFFFF;font-size: 15px;margin-left: 4rem;text-align: center;" >-5</div>
					<img  src="../../assets/teacher/icon_sy_jf_img8.png" style="width: 5.5rem;height: 5.5rem;" />
					<span>不注意听讲</span>
				</div>
				<img  src="../../assets/teacher/icon_sy_jqjfx.png" class="del" style="width: 5.5rem;height: 5.5rem;margin-top: 1.2rem;margin-left: 1.2rem;" />
			</div>
			<div>添加</div>
			<div class="flex_y">
				<input type="text" placeholder="请输入加分名称" style="border-bottom: 1.5px solid #E5E5E5;line-height: 1.875rem;margin-top: 0.8rem;" />
				<input type="text" placeholder="请输入加分值" style="border-bottom: 1.5px solid #E5E5E5;line-height: 1.875rem;margin-top: 0.8rem;" />
				<div class="flex_x" style="justify-content: space-between;margin-top: 1rem;">
					<div class="flex_y">
						<img src="../../assets/teacher/icon_sy_sc_img15.png" style="width: 3.125rem;height: 3.125rem;" />
						<span>添加图片</span>
					</div>
					<div class="flex_x" style="margin-top: 2rem;">
						<div class="add_btn">取消</div>
						<div class="cancel_btn">确认</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navHead2 from '../../components/nav_head2.vue'
	export default {
		components: {
		  navHead2
		},
		data() {
			return {
				option:0
			}
		},
		methods: {
			option_btn(){
				if(this.option == 0){
					this.option = 1
				}else{
					this.option = 0
				}
			}
		}
	}
</script>

<style scoped>
	body{
		min-width: 1200px;
	}
	.flex_y{
		display: flex;
		flex-direction: column;
	}
	.flex_x{
		display: flex;
		flex-direction: row;
	}
	.addmark_content,.delmark_content{
		width: 63%;
		min-width: 62.5rem;
		min-height: 30rem;
		border: 1.5px solid #E5E5E5;
		margin: 1rem auto;
		border-radius: 0.3rem;
		padding: 1rem;
	}
	.addmark_content_nav{
		justify-content: space-between;
	}
	.points_option_btn{
		width: 7.7rem;
		height: 2.3rem;
		border: 1.5px solid #2C58AB;
		border-radius: 0.3rem;
		line-height: 2.3rem;
		text-align: center;
		color: #2C58AB;
		cursor: pointer;
	}
	.plus_options{
		flex-wrap: wrap;
	}
	.add_btn,.cancel_btn{
		width: 6rem;
		height: 2.3rem;
		line-height: 2.3rem;
		text-align: center;
		border-radius: 0.3rem;
		cursor: pointer;
	}
	.add_btn{
		border: 1.5px solid #E5E5E5;
		margin-right: 1.5rem;
	}
	.cancel_btn{
		background-color: #2C58AB;
		border: 1.5px solid #2C58AB;
		color: #FFFFFF;
	}
</style>
