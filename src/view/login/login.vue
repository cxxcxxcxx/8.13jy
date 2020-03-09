<template>
	<div class="building">
		<div class="content">
			<el-row>
				<!-- 左边 logo 注册按钮 -->
			  <el-col :span="12">
				  <div class="grid-content bg-purple left">
					  <div class="logo">
					  	<img class="" src="../../assets/btn_hrrz.png" >
					  </div>
					  <div class="register_btn" @click="register">
					  	{{register_btn_text}}
					  </div> 
				  </div>
			  </el-col>
			  <!-- 右边 3登录 -->
			  <el-col :span="12">
				  <div  class="grid-content bg-purple-light">
					  <div  class="right">
						  <div v-if="login_view">
						  <el-row>
						    <el-col :span="8"><div @click="login_type(0)" class="title grid-content bg-purple">账号登录</div></el-col>
						    <el-col :span="8"><div @click="login_type(1)" class="title grid-content bg-purple-light">手机短信登录</div></el-col>
						    <el-col :span="8"><div @click="login_type(2)" class="title grid-content bg-purple">微信登陆</div></el-col>
						  </el-row>
						  <!-- 账号登录 -->
						  <div v-if="login_type_pwd" class="right_con">
							<div class="input">
								<span>账号：</span>
								<input type="text"  />
							</div>
							<div class="input">
								<span>密码：</span>
								<input type="password" />
							</div>
							<div class="flex_x">
								<div>
									<el-checkbox v-model="checked">下次自动登录</el-checkbox>
								</div>
								<div>
									忘记密码？
								</div>
							</div>
							<div class="login_btn" @click="account_login('Tindex')">登录</div>
						  </div>
						  <!-- 手机短信登录 -->
						  <div v-if="login_type_pho" class="">
						  		<div class="input">
						  			<span>账号：</span>
						  			<input type="text"   />
						  		</div>
						  		
						  		<div class="flex_x">
						  			<div class="input">
						  				<span>密码：</span>
						  				<input type="password"   />
						  			</div>
						  			<div>
						  				<div class="countDown_btn" @click="countDown">
						  				 {{content}}
						  				</div>
						  			</div>
						  		</div>
						  		<div class="login_btn">登录</div>					  
						  </div>
						  <!-- 微信登陆 -->
						  <div v-if="login_type_wx" class="">
								<div class="login_type_wx"></div>
						  </div>
					  	
					  </div>
					  <!-- 注册 view -->
					  <div v-if="register_view" class="register_view">
						  <div class="register_view_text1">注册账号</div>
						  <div class="register_view_text2">请选择您在日常教学中的实际身份</div>
						  <div class="teacher_register_btn flex_x" >
						  		<img src="../../assets/login/icon_dlzc_ls.png" style="width: 3.125rem;height: 3.125rem;" />
						  		<div class="register_view_btn" @click="teacher_register">我是老师/助教</div>
						  </div>
						  <div class="student_register_btn flex_x" >
								<img src="../../assets/login/icon_dlzc_ls.png" style="width: 3.125rem;height: 3.125rem;" />
								<div class="register_view_btn" @click="student_register">我是学生</div>
						  </div>
					  </div>
					  <!-- 老师注册页面 teacher_register_view -->
					  <div v-if="teacher_register_view" class="right" style="height: 30rem;">
							<div class="flex_x" style="justify-content: flex-start;">
									<img class="back" src="../../assets/login/icon_dlzc_fh.png" @click="back(0)" />
									<div class="register_view_text1" style="margin-left: 1rem;">老师/助教注册</div>
							</div>
							<div class="input">
								<span>邮箱/手机：</span>
								<input type="password"   />
							</div>
							<div class="input">
								<span>密码：</span>
								<input type="password"   />
							</div>
							<div class="input">
								<span>姓名：</span>
								<input type="password"   />
							</div>
							<div class="input">
								<span>学校：</span>
								<input type="password"   />
							</div>
							<div class="flex_x">
								<div class="input">
									<span>验证码：</span>
									<input type="password"   />
								</div>
								<div>
									<div class="countDown_btn" @click="countDown">
									 {{content}}
									</div>
								</div>
							</div>
							<div class="login_btn">注册</div>
							
					  </div>
					  <!-- 学生注册页面 student_register_view -->
					  <div v-if="student_register_view" class="right" style="height: 35rem;">
					  		<div class="flex_x" style="justify-content: flex-start;">
					  				<img class="back" src="../../assets/login/icon_dlzc_fh.png" @click="back(1)" />
					  				<div class="register_view_text1" style="margin-left: 1rem;">老师/助教注册</div>
					  		</div>
					  		<div class="input">
					  			<span>邮箱/手机：</span>
					  			<input type="password" v-model="student_phone"  />
					  		</div>
					  		<div class="input">
					  			<span>密码：</span>
					  			<input type="password"   />
					  		</div>
					  		<div class="input">
					  			<span>姓名：</span>
					  			<input type="password"   />
					  		</div>
							<div class="input">
								<span>学号：</span>
								<input type="password"   />
							</div>
					  		<div class="input">
					  			<span>学校：</span>
					  			<input type="password"   />
					  		</div>
					  		<!-- <div class="flex_x">
					  			<div class="input">
					  				<span>验证码：</span>
					  				<input type="password"   />
					  			</div>
					  			<div>
					  				<div class="countDown_btn" @click="countDown">
					  				 {{content}}
					  				</div>
									
					  			</div>								
					  		</div> -->
							<verify style="margin-top: -0.5rem;margin-left: 1.5rem;" @verification_code="verification"></verify>
							<div id="check-btn2" class="login_btn"  @click="student_register_btn">注册</div>
					  </div>
					  
					  
					  </div>
					  
				  </div>
				  
			  </el-col>
			</el-row>
			
		
		</div>
		
	</div>
	
</template>
<script>
	import verify from '../../components/calculation_verification_code.vue'
	export default{
		components: {
		  verify
		},
		data() {
			return{
				login_type_pwd:true,
				login_type_pho:false,
				login_type_wx:false,
				register_btn_text:'还没有账号?去注册',
				teacher_register_view:false,
				student_register_view:false,
				login_view:true,			//注册页面默认显示
				register_view:false,	//注册页面默认不显示
				checked:'',				//自动登录按钮
				content: '发送验证码',  // 按钮里显示的内容
				totalTime: 60,			//记录具体倒计时时间
				canClick: true,			//验证码倒计时是否禁用
				student_phone:""
			}
		},
		onload:{
			
		},
		
		methods:{
			// 登录方式 显示 隐藏
			login_type(type){
				if(type == 0){
					this.login_type_pwd=true;
					this.login_type_pho=false;
					this.login_type_wx=false;
				}else if(type == 1){
					this.login_type_pwd=false;
					this.login_type_pho=true;
					this.login_type_wx=false;
				}else if(type == 2){
					this.login_type_pwd=false;
					this.login_type_pho=false;
					this.login_type_wx=true;
				}
			},
			// 倒计时
			countDown () {
			 if (!this.canClick) return  //改动的是这两行代码
			 this.canClick = false
			 this.content = this.totalTime + 's后重发'
			 let clock = window.setInterval(() => {
			  this.totalTime--
			  this.content = this.totalTime + 's后重发'
			  if (this.totalTime < 0) {
			   window.clearInterval(clock)
			   this.content = '重新发送'
			   this.totalTime = 10
			   this.canClick = true  //这里重新开启
			  }
			 },1000)
			},
			// 注册 页面 显示
			register(){
				if (this.login_view == true) {
					this.register_view = true
					this.login_view = false
					this.register_btn_text = '已有账号?去登录'
					this.student_register_view = false
					this.teacher_register_view = false
				} else{
					this.register_view = false
					this.login_view = true
					this.register_btn_text = '还没有账号?去注册'
					this.student_register_view = false
					this.teacher_register_view = false
				}
			},
			student_register(){
				this.student_register_view = true
				this.register_view = false
			},
			teacher_register(){
				this.teacher_register_view = true
				this.register_view = false
			},
			back(id){
				if(id == 0){
					this.teacher_register_view = false
					this.register_view = true
				}else{
					this.student_register_view = false
					this.register_view = true
				}
				
			},
			//登录
			account_login(name){
				this.$router.push({path:'/Tindex'});
				console.log(name);
			},
			// ***********通过验证码返回值去判断注册信息,现在没有连接起来,弹窗数量2********
			//验证码返回值
			verification(data){
				
				console.log(data)
			},
			//学生注册按钮
			student_register_btn(){
				if(this.student_phone == ""){
					this.$confirm('请认真填写!', '提示', {
					          confirmButtonText: '确定',
					          type: 'error'
					        }).then(() => {
					          
					        }).catch(() => {
					                 
					        });
				}else{
					alert("123")
				}
			},
			
			
		}
	}
</script>

<style scoped>
	@import '../../../static/css/verification_code.css';
	body{
		min-width: 1200px;
	}
	input{
		border:0px;outline:none;cursor:pointer;
	}
	.building{
		background:url(../../assets/login/bg_dlzc_img1.png) top left;
		width:100%;
		height:100%;
		position:fixed;
		background-size:100% 100%;
	}
	.content{
		/* border: 1px solid #fff; */
		width: 60%;
		height: 28.125rem;
		margin-top: 5rem;
		margin-left: 20%;
	}
	
	.logo img{
		width: 11.25rem;
		height: 7.5rem;
	}
	.register_btn{
		width: 11.25rem;
		height: 2.5rem;
		color: #FFFFFF;
		border: 1px solid #FFFFFF;
		border-radius: 0.5rem;
		text-align: center;
		line-height: 2.5rem;
		cursor: pointer;
	}
	.left{
		height: 27.625rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-content: space-around;
		/* border: 1px solid #ffccff; */
	}
	.right{
		width: 27rem;
		height: 27.625rem;
		background-color: #FFFFFF;
		border-radius:0.5rem;
		padding-top: 1rem;
	}
	.title{
		height: 2.1875rem;
		text-align: center;
		line-height: 2.1875rem;
		cursor: pointer;
		border-right: 1px solid #EDEFF3;
	}
	.right_con{
		width: 100%;
		
	}
	.input,.input2{
		width: 23.125rem;
		height: 3.125rem;
		line-height: 3.125rem;
		border: 1px solid #E2E6ED;
		border-radius: 0.5rem;
		margin: 0.5rem auto;
		padding-left: 0.5rem;
	}
	
	.flex_x{
		margin: 0.5rem auto;
		height: 3.125rem;
		line-height: 3.125rem;
		width: 23.125rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: space-between;
	}
	.login_btn{
		width: 23.125rem;
		height: 3.125rem;
		border-radius: 0.5rem;
		background-color: #FFD400;
		color: #FFFFFF;
		text-align: center;
		line-height: 3.125rem;
		margin: 1.5rem auto;
		cursor: pointer;
	}
	.countDown_btn{
		width: 6.25rem;
		height: 3.125rem;
		border-radius: 0.5rem;
		border: 1px solid #E2E6ED;
		background-color: #F4F4F4;
		color: #8F8F8F;
		text-align: center;
		line-height: 3.125rem;
		cursor: pointer;
		margin: 0.5rem;
	}
	.login_type_wx{
		width: 21.25rem;
		height: 20.625rem;
		background-image: url(../../assets/login/icon_dlzc_ewm.png);
		background-size: 100% 100%;
		margin: 1.5rem auto;
		padding-top: 0.5rem;
	}
	.register_view_btn{
		width: 21.6875rem;
		height: 3.625rem;
		line-height: 3.625rem;
		text-align: center;
		color: #FFFFFF;
		background-color: #FFC10D;
		border-radius: 0.5rem;
		margin-left: 1.5625rem;
		cursor: pointer;
	}
	.register_view{
		margin-top: 4.6875rem;
	}
	.student_register_btn,.teacher_register_btn{
		margin-top: 1.5625rem;
	}
	.register_view_text1{
		margin-left: 2.3125rem;
		color: #151515;
		font-size: 20px;
	}
	.register_view_text2{
		color: #969696;
		margin-left: 2.3125rem;
	}
	.back{
		width: 0.8125rem;
		height: 1.4375rem;
		margin-top: 0.8rem;
		cursor: pointer;
	}
</style>