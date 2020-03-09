<template>
	<div>
	<div class="nav flex_x">
		<div class="nav_l flex_x">
			<div class="nav_logo">
				logo
			</div>
			<div class="nav_lx" @click="contact_us">
				联系我们
			</div>
		</div>
		<div class="nav_r flex_x">
			<img class="message_hint" src="../assets/teacher/icon_sy_xx.png" />
			<img class="head_portrait" src="../assets/teacher/tx_sy_img20.png" />
		</div>
	</div>
	<div class="all_curriculum">
		全部课程
	</div>
	<hr class="fg" />
	
	
	
	<!-- 联系我们 -->
	<el-container>
	    <el-dialog :visible.sync="contact_us_dialogVisible" width="40%" style=" text-align: center;" >
	      <!-- <repassword></repassword> -->
	      <span>
			  <div style="width: 100%;height: 12rem;" class="flex_x">
			  	<img style="width: 10rem;height: 10rem;" :src="contact_us_wxUrl" />
			  	<div class="flex_y" style="margin-left: 1rem;margin-top: 1rem;">
			  		<div>联系人:张老师</div>
			  		<div>联系方式:13777777777</div>
			  		<div style="width: 13rem;flex-wrap: wrap;word-wrap:break-word;   word-break:break-all; overflow: hidden; " >联系方式:江苏省苏州市同时什么区万达广场XXX楼</div>
			  	</div>
			  </div>
		  </span>
	    </el-dialog>
	</el-container>
	
	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contact_us_wxUrl:'../../assets/teacher/icon_sy_ewm.png',
				contact_us_dialogVisible:false,
				}
		},
		 methods: {
				
				//联系我们
				contact_us(){
					 this.contact_us_dialogVisible = true
				}
		        
		    }
	
	}
</script>

<style>
	.flex_x{
		display: flex;
		flex-direction: row;
	}
	.nav{
		width: 63%;
		height: 4.375rem;
		margin: 0.5rem auto;
		justify-content: space-between;
		align-content: space-between;
	}
	.nav_logo,.nav_lx{
		width: 6.6875rem;
		height: 4.25rem;
	}
	.nav_logo{
		color: #FFFFFF;
		background-color: #2C58AB;
	}
	.nav_lx{
		color: #2C58AB;
		line-height: 4.25rem;
		text-align: center;
		cursor: pointer;
	}
	.message_hint{
		width: 1.375rem;
		height: 1.6875rem;
		margin-top: 1.1rem;
		margin-right: 0.5rem;
	}
	.head_portrait{
		width: 3.4375rem;
		height: 3.4375rem;
	}
	.all_curriculum{
		width: 63%;
		height: 4.25rem;
		margin: 0 auto;
		line-height: 4.25rem;
	}
	.fg{
		height: 1px;
		background-color: #E9E9E9;
		border: none;
	}
</style>
