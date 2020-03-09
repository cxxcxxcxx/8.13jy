<template>
	<div>
		<div class="nav flex_x">
			<div class="nav_l flex_x">
				<div class="">
					查看班级
				</div>
			</div>
			<navHead3></navHead3>
		</div>
		<div class="courses_content">
			<div class="studentHomework_head flex_x" >
				  <el-checkbox style="margin-top: 0.8rem;" label="全选"></el-checkbox>
				  <div class="batch_points">批量给分</div>
				  <div class="back_work">打回作业</div>
			</div>
			<div class="" style="padding: 1rem;">
				<div class="flex_x" style="justify-content: space-between;margin-top: 1rem;" v-for="(item,index) in 20" :key="index">
					<div class="flex_x">
						<el-checkbox ></el-checkbox>
						<div class="sutdent_name">牛顿</div>
						<div class="sutdent_results">70/100</div>
						<div class="submit_time">2020/12/13 12:00</div>
						<div class="submit_number">提交2次</div>
					</div>
					<div class="" style="color: #2C58AB;cursor: pointer;">进入批阅</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navHead3 from '../../components/nav_head3.vue'
	export default{
		components: {
		  navHead3
		}, 
		data() {
			return{
				student_data:""
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	body{
		min-width: 1200px;
	}
	.nav{
		width: 63%;
		height: 4.375rem;
		margin: 0.5rem auto;
		justify-content: space-between;
		align-content: space-between;
	}
	.nav_l{
		margin-top: 1.5rem;
	}
	.fg{
		height: 1px;
		background-color: #E9E9E9;
		border: none;
	}
	
	.flex_y{
		display: flex;
		flex-direction: column;
	}
	.flex_x{
		display: flex;
		flex-direction: row;
	}
	.courses_content{
		width: 63%;
		min-width: 60rem;
		flex-flow: wrap;
		margin: 0.5rem auto;
		border: 1.5px solid #E9E9E9;
		min-height: 30rem;
		border-radius: 0.3rem;
		overflow: hidden;
	}
	.studentHomework_head{
		width: 100%;height: 3rem;background-color: #2C58AB;padding: 0.5rem;
	}
	.batch_points,.back_work{
		width: 7.8rem;
		height: 2.3rem;
		border: 1.5px solid #FFFFFF;
		color: #FFFFFF;
		margin-left: 0.5rem;
		border-radius: 0.3rem;
		text-align: center;
		line-height: 2.3rem;
		cursor: pointer;
		margin-top: 0.3rem;
	}
	.sutdent_name,.sutdent_results,.submit_time,.submit_number{
		margin-left: 1rem;
	}
	
	
	
	
	
	/deep/.el-checkbox{
		color: #FFFFFF;
	}
	/deep/.el-checkbox__input.is-checked+.el-checkbox__label{
		color: #FFFFFF;
	}
	/deep/.el-checkbox__inner{
		border-radius: 50%;
	}
	/deep/.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
		background-color: #2C58AB;
		border-color: #2C58AB;
	}
</style>
