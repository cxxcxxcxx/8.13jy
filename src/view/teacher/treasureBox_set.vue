<template>
	<!-- 宝箱设置 -->
	<div>
		<div class="nav flex_x">
			<div class="nav_l flex_x">
				<div class="">
					宝箱设置
				</div>
			</div>
			<navHead3></navHead3>
		</div>
		<div class="courses_content">
			<div>宝箱奖品设置</div>
			<div class="treasureChestPrize_set">
				<div class="flex_x " style="flex-wrap: wrap;">
					<el-input v-for="(item,index) in formData.treasureChestPrize_set" v-model="item.prize" :key="index" placeholder="请输入奖品名称" style="width: 15rem;margin-left: 3rem;margin-top: 0.5rem;"></el-input>
					<!-- <img  src="../../assets/teacher/icon_sy_bxsz_sc.png" style="width: 15rem;height: 2.5rem;margin-left: 3rem;" /> -->
					<el-button class="add_treasureChestPrize_btn" @click="add_treasureChestPrize()" >+</el-button>
				</div>
				<div class="ack_treasureChestPrize">确认</div>
			</div>
			
			<div>刮刮乐奖品设置</div>
			<div class="treasureChestPrize_set">
				<div class="flex_x " style="flex-wrap: wrap;">
					<el-input v-for="(item,index) in formData.scratchOffPrize_set" v-model="item.prize" :key="index" placeholder="请输入奖品名称" style="width: 15rem;margin-left: 3rem;margin-top: 0.5rem;"></el-input>
					<!-- <img  src="../../assets/teacher/icon_sy_bxsz_sc.png" style="width: 15rem;height: 2.5rem;margin-left: 3rem;" /> -->
					<el-button class="add_treasureChestPrize_btn" @click="add_scratchOffPrize()" >+</el-button>
				</div>
				<div class="ack_treasureChestPrize">确认</div>
			</div>
			
			<div>转盘奖品设置</div>
			<div class="treasureChestPrize_set">
				<div class="flex_x " style="flex-wrap: wrap;">
					<el-input v-for="(item,index) in formData.turnTablePrize_set" v-model="item.prize" :key="index" placeholder="请输入奖品名称" style="width: 15rem;margin-left: 3rem;margin-top: 0.5rem;"></el-input>
					<!-- <img  src="../../assets/teacher/icon_sy_bxsz_sc.png" style="width: 15rem;height: 2.5rem;margin-left: 3rem;" /> -->
					<el-button class="add_treasureChestPrize_btn" @click="add_turnTablePrize()" >+</el-button>
				</div>
				<div class="ack_treasureChestPrize">确认</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import navHead3 from '../../components/nav_head3.vue'
	export default {
		components: {
		  navHead3
		}, 
		data() {
			return {
				formData:{
					treasureChestPrize_set:[{
						prize:''
					}],
					scratchOffPrize_set:[{
						prize:''
					}],
					turnTablePrize_set:[{
						prize:''
					}]
				},
				
				}
		},
		methods: {
			//添加宝箱奖项
			add_treasureChestPrize(){
				this.formData.treasureChestPrize_set.push({
					prize:''
				})
			},
			add_scratchOffPrize(){
				this.formData.scratchOffPrize_set.push({
					prize:''
				})
			},
			add_turnTablePrize(){
				this.formData.turnTablePrize_set.push({
					prize:''
				})
			}
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
		padding: 1rem;
	}
	.treasureChestPrize_set{
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
		min-height: 11.8rem;
		margin-top: 0.5rem;
		flex-wrap: wrap;
		padding: 1rem;
	}
	.add_treasureChestPrize_btn{
		width: 15rem;height: 2.5rem;margin-left: 3rem;font-weight: bold;font-size: 25px;line-height: 1rem;margin-top: 0.5rem;
	}
	.ack_treasureChestPrize{
		width: 8rem;
		height: 2.5rem;
		color: #FFFFFF;
		background-color: #2C58AB;
		border-radius: 0.3rem;
		line-height: 2.5rem;
		text-align: center;
		margin-left: 80%;
		margin-top: 1rem;
		cursor: pointer;
	}
</style>
