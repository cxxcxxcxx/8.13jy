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
			<div class="flex_x" style="border-bottom: 1.5px solid #E9E9E9;height: 3rem;padding: 1rem;justify-content: space-between;">
				<div class="class_all_text">全部班级</div>
				<div class="class_order" @click="class_order_show = true">班级排序</div>
			</div>
			<div class="class_all flex_x" > 
				<div class="class_all_block"  v-for="(item,index) in 6" :key="index">
					<img src="../../assets/teacher/tp_sy_img11.png" class="class_all_block_img" @click="enter_class_btn()" />
					<div class="class_all_block_head" >
						<div class="class_name" >一年数学2班</div>
						<div class="joinClass_id" >加课码:123456</div>
						<div class="class_time flex_x">
							<div class="">
								<div class="suspended_btn" @click="suspended_btn()">停用</div>
								<div class="reset_btn" @click="reset_btn()">重置</div>
							</div>
							<div class="class_semester flex_y" >
								<div>2020-10-10</div>
								<div>第一学期</div>
							</div>
						</div>
					</div>
					<div class="class_all_block_middle flex_x" >
						<div>
							<div style="color: #8F8F8F;">近期作业</div>
							<div>作业题1</div>
						</div>
						<div class="end_class" >结课</div>
					</div>
					<div class="class_all_block_bottom flex_x" >
						<div class="class_member flex_x" >
							<div v-for="(item,index) in 3" :key="index" class="avatar" ><el-avatar :src="headimg" size="small"></el-avatar></div>
							<div style="margin-top: 0.3rem;">成员:10</div>
						</div>
						<div class="flex_x" style="margin-top: 0.8rem;">
							<div class="stickied_btn"  v-if="index == index">置顶</div>
							<div class="del_btn" @click="del_class_btn()">删除</div>
						</div>
					</div>
				</div>
				<div class="class_all_block2">
					<img class="add_class_btn" src="../../assets/teacher/icon_sy_cjkc.png" @click="create_class = true" />
				</div>
			</div>
		</div>
		
		
		<!-- 班级排序弹窗 -->
		<el-container>
		    <el-dialog title="班级排序" :visible.sync="class_order_show" width="52%" style="" >
				  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
						<div class="flex_x" style="border-bottom: 1.5px solid #E5E5E5;padding: 1rem;justify-content: space-between;" v-for="(item,index) in 6" :key="index">
							<div>asas</div>
							<div class="flex_x" style="width: 5rem;justify-content: space-between;color: #2C58AB;cursor: pointer;">
								<div>上移</div>
								<div>下移</div>
							</div>
						</div>
						
						<el-footer>
							<div class="courses_block_footer flex_x">
								<div class="add_btn" @click="class_order_show = false">取消</div>
								<div class="cancel_btn" @click="class_order_show = false">创建</div>
							</div>
						</el-footer>
					
				  </div>
		    </el-dialog>
		</el-container>
		
		<!-- 创建班级弹窗 -->
		<el-container>
		    <el-dialog  :visible.sync="create_class" width="52%" style="" >
				  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
						<div class="flex_x">
							<div class="" style="line-height: 2.5rem;">创建班级</div>
							<div class="educationalAdministrationSystem" >从教务系统导入</div>
						</div>
						
						<div class="input">
							<span>班级名称:</span>
							<input type="text" placeholder="请输入班级名称" style="margin-left: 0.5rem;" />
						</div>
						<div class="input flex_x" >
							<span style="margin-top: 0.5rem;">班级名称:</span>
							<el-select v-model="semester_value" placeholder="请选择" style="margin-left: 0.5rem;">
							    <el-option
							      v-for="item in semester_data"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							  </el-select>
							  
							  <el-select v-model="season_value" placeholder="请选择" style="margin-left: 0.5rem;">
							      <el-option
							        v-for="item in season_data"
							        :key="item.value"
							        :label="item.label"
							        :value="item.value">
							      </el-option>
							    </el-select>
						</div>
						
						<el-footer>
							<div class="courses_block_footer flex_x">
								<div class="add_btn" @click="create_class = false">取消</div>
								<div class="cancel_btn" @click="create_class = false">创建</div>
							</div>
						</el-footer>
					
				  </div>
		    </el-dialog>
		</el-container>
		
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
				class_order_show:false,	//班级排序弹窗
				headimg:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
				selscted_block:-1,
				create_class:false,	//创建班级弹窗
				semester_value: '',	//学期（时间日期）
				season_value:'',	//学季（春夏秋冬）
				semester_data: [{	//学期数据
				          value: '2020-2021',
				          label: '2020-2021'
				        }, {
				          value: '2020-2021',
				          label: '2020-2021'
				        }, {
				          value: '2020-2021',
				          label: '2020-2021'
				        }, {
				          value: '2020-2021',
				          label: '2020-2021'
				        }, {
				          value: '2020-2021',
				          label: '2020-2021'
				        }],
				season_data: [{		//学季数据
				          value: '春季',
				          label: '春季'
				        }, {
				          value: '夏季',
				          label: '夏季'
				        }, {
				          value: '秋季',
				          label: '秋季'
				        }, {
				          value: '冬季',
				          label: '冬季'
				        }],
				        
				}
		},
		methods: {
			//删除课程
			del_class_btn(){
				this.$confirm('您确定删除该课程？, 是否继续?', '提示', {
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
			//停用课程
			suspended_btn(){
				this.$confirm('您确定停用该课程？, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            type: 'success',
				            message: '停用成功!'
				          });
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消操作'
				          });          
				        });
			},
			//重置课程
			reset_btn(){
				this.$confirm('您确定重置该课程加课码？, 是否继续?', '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(() => {
				          this.$message({
				            type: 'success',
				            message: '重置成功!'
				          });
				        }).catch(() => {
				          this.$message({
				            type: 'info',
				            message: '已取消操作'
				          });          
				        });
			},
			//进入相应的班级
			enter_class_btn(){
				this.$router.push({path:'/enter_class'});
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
	}
	.class_all_text{
		
	}
	.class_order{
		width: 7.6rem;
		height: 2.3rem;
		background-color: #2C58AB;
		border: 1.5px solid #E9E9E9;
		color: #FFFFFF;
		border-radius: 0.3rem;
		line-height: 2.3rem;
		text-align: center;
		cursor: pointer;
	}
	.class_all{
		flex-wrap: wrap;padding: 1rem;
	}
	.class_all_block,.class_all_block2{
		border: 1.5px solid #E9E9E9;border-radius: 0.3rem;width: 17.7rem;min-height: 15.7rem;margin-left: 1.2rem;margin-top: 0.5rem;
	}
	.class_all_block2{
		border: none;
	}
	.add_class_btn{
		width: 17.7rem;min-height: 15.7rem;cursor: pointer;
	}
	.class_all_block_img{
		width: 100%;height: 9rem;
	}
	.class_all_block_head{
		margin-top: -8rem;padding: 0.7rem;
	}
	.class_name{
		color: #FFFFFF;
	}
	.joinClass_id{
		color: #FFFFFF;margin-top: 0.5rem;
	}
	.class_time{
		justify-content: space-between;margin-top: 0.1rem;
	}
	.end_class{
		margin-top: 0.5rem;width: 4.375rem;height: 1.875rem;background-color: #2C58AB;border-radius: 0.3rem;color: #FFFFFF;line-height: 1.875rem;text-align: center;cursor: pointer;
	}
	.class_all_block_middle{
		justify-content: space-between;border-bottom: 1.5px solid #E9E9E9;padding: 0.7rem;
	}
	.suspended_btn,.reset_btn{
		width: 8.75rem;
		height: 1.8rem;
		background-color: #2C58AB;
		border-radius: 0.3rem;
		line-height: 1.8rem;
		text-align: center;
		color: #FFFFFF;
		cursor: pointer;
	}
	.reset_btn{
		color: #151515;
		background-color: #FFFFFF;
		cursor: pointer;
	}
	.class_semester{
		color: #FFFFFF;justify-content: center;align-items: center;
	}
	.del_btn{
		margin-left: 0.5rem;color: #2C58AB;cursor: pointer;
	}
	.stickied_btn{
		cursor: pointer;
	}
	.class_member{
		margin-left: 1rem;margin-top: 0.5rem;
	}
	.class_all_block_bottom{
		justify-content: space-between;padding: 0.5rem;
	}
	.avatar{
		margin-left: -0.6rem;
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
	.educationalAdministrationSystem{
		width: 9rem;height: 2.5rem;background-color: #2C58AB;color: #FFFFFF;border-radius: 0.3rem;margin-left: 1.5rem;line-height: 2.5rem;text-align: center;border: 1.5px solid #E5E5E5;
	}
	.courses_block_footer{
		margin-top: 1.5rem;
	}
	.input{
		 width: 95%;border-bottom: 1.5px solid #E5E5E5;padding: 1rem;
	}
</style>
