<template>
	<div>
		<div class="content">
			<!-- 头部导航 -->
			<navHead></navHead>
			<!-- 全部课程 内容 -->
			<div class="curriculum_content">
				<!-- 课程 导航栏 -->
				<div class="curriculum_content_nav">
					<div class="curriculum_content_nav_classification flex_x">
						<div class="classification_title">年级分类</div>
						<div class="classification_allcon flex_x">
							<div v-for="(item_grade,index_grade) in grade_classification" :key="index_grade" @click="selection(index_grade)"   :class="active == index_grade ? 'classification_con2' : 'classification_con' ">{{item_grade.grade}}</div>
						</div>
					</div>
					<div class="curriculum_content_nav_classification flex_x">
						<div class="classification_title">课程分类</div>
						<div class="classification_allcon flex_x">
							<div v-for="(item_curriculum,index_curriculum) in curriculum_classification" :key="index_curriculum"  @click="selection1(index_curriculum)"  :class="active1 == index_curriculum ? 'classification_con2' : 'classification_con' " class="classification_con">{{item_curriculum.grade}}</div>
						</div>
					</div>
					<div class="curriculum_content_nav_classification flex_x">
						<div class="classification_title">年级选择</div>
						<div class="classification_allcon flex_x">
							<div v-for="(item_sgrade,index_sgrade) in grade_selection" :key="index_sgrade"  @click="selection2(index_sgrade)" :class="active2 == index_sgrade ? 'classification_con2' : 'classification_con' " class="classification_con">{{item_sgrade.grade}}</div>
						</div>
					</div>
				</div>
				
				<!-- 加盟课程 -->
				<div class="joining_courses">
					<!-- 加盟课程 头部 -->
					<div class="joining_courses_head flex_x">
						<div style="margin-left: 1.875rem;">加盟课程</div>
						<div style="margin-left: 3.9375rem;">免费</div>
						<div class="input flex_x" style="margin-left: 7rem;">
							<span>￥</span>
							<input type="text"  style="width: 4.5rem;" />
						</div>
						<div>---</div>
						<div class="input flex_x">
							<span>￥</span>
							<input type="text"  style="width: 4.5rem;" />
						</div>
						<div class="price_search">确定</div>
						<div class="Keyword_search flex_x">
							<input type="text" placeholder="搜索课程关键字"  style="width: 10rem;" />
							<img style="width: 1.125rem;height: 1.125rem;padding-right: 0.5rem;margin-top: 0.7rem;" src="../../assets/teacher/icon_sy_sous.png" />
						</div>
					</div>
					<!-- 加盟课程 内容 -->
					<div class="courses_content flex_x">
						<div class="courses_block" v-for="(item,index) in courses_block" :key="index">
							<img src="../../assets/teacher/bf_sy_img2.png" style="height: 9.5rem;width: 100%;" />
							<div class="Label" >已加盟</div>
							<div class="title">{{item.title}}</div>
							<div class="courses_content_bottom flex_x">
								<div class="" style="color: red;">￥{{item.pice}}</div>
								<div class=""  @click="dialogVisible_btn(index)" style="width: 5rem;height: 2rem;color: #FFFFFF;background-color: #2C58AB;line-height: 2rem;text-align: center;border-radius: 0.35rem;font-size: 13px;">立即加盟</div>
							</div>
						</div>
					</div>
					<!-- 加盟课程 分页 -->
					<div style="margin-left: 55%;margin-bottom: 1rem;">
						<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="1000">
						</el-pagination>
						
					</div>
				</div>
				<!-- 我的课程 -->
				<div class="my_curriculum">
					<div class="my_curriculum_head">
						<div style="margin-left: 1.875rem;">我的课程</div>
					</div>
					<div class="courses_content flex_x">
						<div class="courses_block" v-for="(item,index) in 2" :key="index">
							<img src="../../assets/teacher/bf_sy_img2.png" style="height: 9.5rem;width: 100%;" />
							<div class="Label">自建课程</div>
							<div class="title">高二综合物理物理究极物理习题之做不对</div>
						</div>
						<div class="courses_block" >
							<div style="line-height: 15.5rem;text-align: center;" @click="all_curriculum" >查看全部</div>
						</div>
					</div>
					
				</div>
				
				
				<!-- 立即加盟 课程 -->
				<el-container>
				    <el-dialog :visible.sync="dialogVisible" width="40%" style=" text-align: center;" >
				      <!-- <repassword></repassword> -->
				      <span>
						  <img src="../../assets/teacher/bf_sy_img2.png" style="width: 18rem;height: 9.2rem;" />
						  <div class="popup_title" style="width: 18rem;text-align: left;margin: 0.5rem auto;">{{popup_title}}</div>
						  <div class="popup_pice" style="width: 18rem;text-align: left;margin: 0.5rem auto;color: red;">￥{{popup_pice}}</div>
					  </span>
					  <el-row :gutter="20" style="margin-top: 5rem;">
						<el-button :span="6" @click="dialogVisible_wx = true">微信付款</el-button>
						<el-button :span="6" :offset="6" type="primary" @click="dialogVisible_zfb = true">支付宝付款</el-button>
					  </el-row>
				    </el-dialog>
					
					<!-- 微信支付 -->
					<el-dialog :visible.sync="dialogVisible_wx" width="40%" style=" text-align: center;" >
					  <!-- <repassword></repassword> -->
					  <span>
						  <img :src="popup_wx_src" style="width: 9rem;height: 9rem;" />
						  <div class="popup_title" style="margin-top: 2rem;">请使用微信扫码支付</div>
						  
					  </span>
					  
					</el-dialog>
					<!-- 支付宝支付 -->
					<el-dialog :visible.sync="dialogVisible_zfb" width="40%" style=" text-align: center;" >
					  <!-- <repassword></repassword> -->
					  <span>
						  <img :src="popup_zfb_src" style="width: 9rem;height: 9rem;" />
						  <div class="popup_title" style="margin-top: 2rem;">请使用支付宝扫码支付</div>
					  </span>
					 
					</el-dialog>
				</el-container>
				
				
				
			</div>
		</div>
	</div>
</template>

<script>
	import navHead from '../../components/nav_head.vue'
	export default {
		components: {
		  navHead
		},
		data() {
			return {
				contact_us_wxUrl:'../../assets/teacher/icon_sy_ewm.png',
				popup_wx_src:'',
				popup_zfb_src:'',
				popup_title:'',
				popup_pice:'',
				dialogVisible: false,
				dialogVisible_wx: false,
				dialogVisible_zfb: false,
				active:0,
				active1:0,
				active2:0,
				courses_block:[
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"qweqwe",pice:"99.9",},
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"asdasd",pice:"99.9",},
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"zxczxc",pice:"99.9",},
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"vbnvbn",pice:"99.9",},
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"fghfgh",pice:"99.9",},
					{wx_src:"../../assets/teacher/icon_sy_ewm.png",zfb_src:"../../assets/teacher/icon_sy_ewm.png",title:"rtyrty",pice:"99.9",},
				],
				grade_classification:[
					{grade:"不限"},
					{grade:"幼儿"},
					{grade:"小学"},
					{grade:"初中"},
					{grade:"高中"},
					{grade:"大学"},
					{grade:"不限"},
					{grade:"幼儿"},
					{grade:"小学"},
					{grade:"初中"},
					{grade:"高中"},
					{grade:"大学"},
					{grade:"不限"},
					{grade:"幼儿"},
					{grade:"小学"},
					{grade:"初中"},
					{grade:"高中"},
					{grade:"大学"},
					{grade:"不限"},
					{grade:"幼儿"},
					{grade:"小学"},
					{grade:"初中"},
					{grade:"高中"},
					{grade:"大学"}
				],
				curriculum_classification:[
					{grade:"不限"},
					{grade:"语文"},
					{grade:"数学"},
					{grade:"英语"},
					{grade:"生物"},
					{grade:"体育"},
				],
				grade_selection:[
					{grade:"不限"},
					{grade:"一年级"},
					{grade:"二年级"},
					{grade:"三年级"},
					{grade:"四年级"},
					{grade:"五年级"},
				]
				
			}
		},
		 methods: {
				dialogVisible_btn(id){
					this.dialogVisible = true
					this.popup_wx_src = this.courses_block[id].wx_src
					this.popup_zfb_src = this.courses_block[id].zfb_src
					this.popup_title = this.courses_block[id].title
					this.popup_pice = this.courses_block[id].pice
				},
		        selection(id){
					this.active = id
		        },
				selection1(id){
					this.active1 = id
				},
				selection2(id){
					this.active2 = id
				},
				handleClose(done) {
				  this.$confirm('确认关闭？')
				    .then(_ => {
				      done();
				    })
				    .catch(_ => {});
				},
				all_curriculum(){
					this.$router.push({path:'/curriculumAll'});
				}
				
		        
		    }
	
	}
</script>

<style scoped>
	
	body{
		min-width: 1200px;
	}
.content{
	/* width: 63%; */
	/* border: 1px solid #151515; */
}
.flex_x{
	display: flex;
	flex-direction: row;
}
.flex_y{
	display: flex;
	flex-direction: column;
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
.curriculum_content{
	width: 63%;
	margin: 0 auto;
}
.curriculum_content_nav_classification{
	/* height: 4.2rem; */
	min-width: 60rem;
	line-height: 4.2rem;
	border-bottom: 1px solid #E9E9E9;
}
.classification_allcon{
	flex-wrap:wrap
}
.classification_con,.classification_con2{
	min-width: 4.375rem;
	text-align: center;
	cursor: pointer;
}
.classification_con2{
	color: #2C58AB;
}
.classification_title{
	min-width: 4.375rem;
	color: #151515;
}
.joining_courses,.my_curriculum{
	/* height: 43.5rem; */
	min-width: 60rem;
	border: 1.5px solid #E5E5E5;
	margin: 0.5rem auto;
	border-radius: 0.3rem;
}
.joining_courses_head,.my_curriculum_head{
	height: 5rem;
	line-height: 5rem;
	border-bottom: 1px solid #E5E5E5;
}
.input,.Keyword_search{
	width: 6rem;
	height: 2.5rem;
	line-height: 2.5rem;
	border: 1px solid #E2E6ED;
	border-radius: 0.5rem;
	padding-left: 0.5rem;
	margin-top: 0.9rem;
}
.price_search{
	width: 6rem;
	height: 2.5rem;
	line-height: 2.5rem;
	text-align: center;
	color: #FFFFFF;
	background-color: #2C58AB;
	border-radius: 0.5rem;
	margin-top: 0.9rem;
	margin-left: 2rem;
	cursor: pointer;
}
.Keyword_search{
	width:12rem;
	height: 2.5rem;
	line-height: 2.5rem;
	justify-content: space-between;
	margin-left: 2rem;
	cursor: pointer;
}
.courses_content{
	flex-flow: wrap;
}
.courses_block{
	width: 18rem;
	height: 15.5rem;
	border: 1.5px solid #E5E5E5;
	margin: 1.25rem 0.85rem;
	border-radius: 0.5rem;
	cursor: pointer;
}
.my_curriculum{
	height: 28.75rem;
}
.Label{
	/* width: 4rem; */
	padding: 0 0.7rem;
	height: 1.875rem;
	line-height: 1.875rem;
	text-align: center;
	position: absolute;
	margin-top: -9rem;
	color: #FFFFFF;
	background-color: #FF0000;
	border-top-right-radius: 0.4rem;
	border-bottom-right-radius: 0.4rem;
}
.title{
	padding: 0.5rem;
}
.courses_content_bottom{
	padding: 0 0.5rem;
	justify-content: space-between;
	align-content: space-between;
}
</style>
