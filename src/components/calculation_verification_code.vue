<template>
	<div>
		<div class="top">
		    <div class="North"></div>
		    <div class="Northeast">
		        <div class="spjz">
		            <div id="ComputationalVerificationCode"></div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		name: 'verify',
		 data(){
		        return {
		            
		        }
		    },
		mounted:function() {
			let that = this;
			$(function(){
				$('#ComputationalVerificationCode').codeVerify({
					type: 2,
					figure: 100, //位数，仅在type=2时生效
					arith: 0, //算法，支持加减乘，不填为随机，仅在type=2时生效
					width: '130px',
					height: '50px',
					fontSize: '20px',
					btnId: 'check-btn2',
					ready: function() {
						
					},
					success: function() {
						alert('验证匹配！');
					},
					error: function() {
						alert('验证码不匹配！');
						that.verification_code()
					}
				});
			});
			
		 
		},
		methods:{
			verification_code(){
				this.$emit("verification_code","123")
			}
		}
		
	}
	
</script>

<style scoped>
	@import '../../static/css/verification_code.css';
</style>
