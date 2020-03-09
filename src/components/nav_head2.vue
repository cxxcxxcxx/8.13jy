<template>
	<div>
	<div class="nav flex_x">
		<div class="nav_l flex_x">
			<div class="">
				课堂 > 一年级数学
			</div>
			<!-- <div class="nav_lx" @click="contact_us">
				联系我们
			</div> -->
		</div>
		<div class="nav_r flex_x">
			<img class="message_hint" src="../assets/teacher/icon_sy_xx.png" />
			<img class="head_portrait" src="../assets/teacher/tx_sy_img20.png" />
		</div>
	</div>
	
	
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
