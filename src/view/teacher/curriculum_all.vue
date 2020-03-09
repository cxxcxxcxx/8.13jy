<template>
	<div>
		<navHead></navHead>
		<div class="courses_content flex_x">
			<div class="courses_block" >
				<div style="line-height: 15.5rem;text-align: center;"  @click="addcurriculum">添加课程</div>
			</div>
			<div class="courses_block" v-for="(item,index) in 5" :key="index" @click="entered(index)">
				<img src="../../assets/teacher/bf_sy_img2.png" style="height: 9.5rem;width: 100%;" />
				<div class="Label">自建课程</div>
				<div class="Label2">加课码:123465789</div>
				<div class="title">高二综合物理物理究极物理习题之做不对</div>
				<el-footer style="border-top:1.5px solid #E5E5E5;">
					<div class="courses_block_footer flex_x">
						<div class="" style="margin-right: 1rem;" :style="active" @mouseover="mouseOver" @mouseleave="mouseLeave">置顶</div>
						<div class="" :style="active_del" @mouseover="mouseOver_del" @mouseleave="mouseLeave_del" @click.stop="delbtn_courses">删除</div>
					</div>
				</el-footer>
			</div>
			
		</div>
		<div style="margin-left: 36.2%;margin-bottom: 1rem;">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
			
		</div>
		<!-- 添加课程 -->
		<el-container>
		    <el-dialog title="添加课程" :visible.sync="addcurriculum_dialogVisible" width="52%" style="" >
		      <!-- <span> -->
				  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
				  	<!-- <el-header>新建课程</el-header> -->
						<div class="class_name">
							<span>课程名称 :</span>
							<input type="text" style="margin-left: 0.5rem;width: 33rem;" />
						</div>
						<div class="curriculum_content_nav">
							<div class="curriculum_content_nav_classification flex_x">
								<div class="classification_title">年级分类 :</div>
								<div class="classification_allcon flex_x">
									<div v-for="(item_grade,index_grade) in grade_classification" :key="index_grade" @click="selection(index_grade)"   :class="selection_id == index_grade ? 'classification_con2' : 'classification_con' ">{{item_grade.grade}}</div>
								</div>
							</div>
							<div class="curriculum_content_nav_classification flex_x">
								<div class="classification_title">年级分类 :</div>
								<div class="classification_allcon flex_x">
									<div v-for="(item_grade,index_grade) in grade_classification" :key="index_grade" @click="selection(index_grade)"   :class="selection_id == index_grade ? 'classification_con2' : 'classification_con' ">{{item_grade.grade}}</div>
								</div>
							</div>
							<div class="curriculum_content_nav_classification flex_x">
								<div class="classification_title">年级分类 :</div>
								<div class="classification_allcon flex_x">
									<div v-for="(item_grade,index_grade) in grade_classification" :key="index_grade" @click="selection(index_grade)"   :class="selection_id == index_grade ? 'classification_con2' : 'classification_con' ">{{item_grade.grade}}</div>
								</div>
							</div>
						</div>
						<div class="flex_y">
							<img src="../../assets/teacher/icon_sy_tjtp.png" style="width: 5.3rem;height: 5.3rem;margin-top: 1rem;" />
							<div style="width: 6rem;text-align: center;">添加图片</div>
						</div>
						<el-footer>
							<div class="courses_block_footer flex_x">
								<div class="add_btn" @click="addcurriculum_dialogVisible = false">取消</div>
								<div class="cancel_btn" @click="addcurriculum_dialogVisible = false">确认</div>
							</div>
						</el-footer>
					
				  </div>
			  <!-- </span> -->
		    </el-dialog>
		</el-container>
		
	</div>
</template>

<script scoped>
	import navHead from '../../components/nav_head.vue'
	export default {
		components: {
		  navHead
		},
		data() {
			return {
				selection_id:-1,
				active:'',
				active_del:'',
				addcurriculum_dialogVisible:false,
				grade_classification:[
					{grade:"不限"},
					{grade:"语文"},
					{grade:"数学"},
					{grade:"英语"},
					{grade:"生物"},
					{grade:"体育"},
				],
			}
		},
		 methods: {
			mouseOver: function(){
				this.active = 'color:#2C58AB';
			},
			mouseLeave: function () {
				this.active = '';
			},
			mouseOver_del: function(){
				this.active_del = 'color:#2C58AB';
			},
			mouseLeave_del: function () {
				this.active_del = '';
			},
		    addcurriculum(){
				this.addcurriculum_dialogVisible = true
			},
			selection(id){
				this.selection_id = id
			},
			delbtn_courses(){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            type: 'success',
				            message: '删除成功!'
				          });
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消删除'
				          });          
				        });
			},
			entered(id){
				this.$router.push({path:'/enteredCurriculum'});
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
	.courses_content{
		width: 63%;
		min-width: 60rem;
		flex-flow: wrap;
		margin: 0.5rem auto;
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
	.class_name{
		height: 3.2rem;
		line-height: 3.2rem;
		border-bottom: 1.5px solid #E5E5E5;
	}
	.Label,.Label2{
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
	.Label2{
		color: #FFFFFF;
		background-color: #BBBDB7;
		margin-top: -7rem;
		opacity:0.9;
	}
	.title{
		padding: 0.5rem;
	}
	.courses_block_footer{
		margin-top: 0.3rem;
		float: right;
	}
	.curriculum_content_nav{
		margin-top: 0.5rem;
	}
	.curriculum_content_nav_classification{
		
	}
	.classification_allcon{
		flex-wrap:wrap;
		
	}
	.classification_con,.classification_con2{
		width: 6rem;
		height: 2.3rem;
		text-align: center;
		cursor: pointer;
		line-height: 2.3rem;
		text-align: center;
		border-radius: 0.3rem;
		border: 1.5px solid #E5E5E5;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.classification_con2{
		border: 1.5px solid #2C58AB;
		color: #2C58AB;
		
	}
	.classification_title{
		/* min-width: 4.375rem; */
		/* border: 1.5px solid #E5E5E5; */
		/* color: #E5E5E5; */
		width: 6rem;
		height: 2.3rem;
		line-height: 2.3rem;
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
