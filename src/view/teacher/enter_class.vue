<template>
	<div>
		<navHead2></navHead2>
		<div class="entered_curriculum_head">
			<img class="entered_curriculum_head_img" src="../../assets/teacher/tp_sy_img11.png" />
			<div style="margin-top: -10rem;margin-left: 2rem;position: absolute;color: #fff;">
				<div>一年级数学</div>
				<div style="margin-top: 1rem;">课程邀请码:123456</div>
			</div>
			<div class="entered_curriculum_head_nav">
				<div class="entered_curriculum_head_nav_title flex_x">
					<div class="entered_curriculum_head_nav_titleT" :class="head_navid == index ? 'entered_curriculum_head_nav_titleT2':'entered_curriculum_head_nav_titleT'" v-for="(item,index) in entered_curriculum_head_nav" :key="index" @click="curriculum_head_nav(index)">{{item.title}}</div>
				</div> 
			</div>
		</div>
		<div class="entered_curriculum_con" v-if="entered_curriculum_head == 0">
			<div class="flex_x">
				<div class="add_courses_btn" @click="add_courses">添加课程</div>
				<div class="add_directory_btn" @click="add_directory">添加目录</div>
				<div class="add_directory_btn" @click="Import_courseware">导入课件</div>
			</div>
			<div class="flex_x">
				<div style="width: 64%;">
					<el-collapse accordion>
					    <el-collapse-item name="1">
					        <span class="collapse-title flex_x" slot="title">
								<div class="flex_x">
									<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_kejian.png" />
									<p style="margin-left: 0.5rem;">一致性 Consistency</p>
								</div>
								<el-popover
								  placement="left"
								  popper-class="my_popper"
								  trigger="click">
								  <div class="flex_y">
									  <div class="" @click="insert_Catalog">插入目录</div>
									  <div class="" @click="edit_Catalog">编辑目录</div>
									  <div class="" @click="del_Catalog">删除</div>
									  <div class="">上移</div>
									  <div class="">下移</div>
										  <el-popover
										    placement="left-end"
										    trigger="click">
										    <div class="flex_y">
										  	  <div class="">目录一</div>
										  	  <div class="" >目录二</div>
										  	  <div class="">目录三</div>
										  	  <div class="">目录四</div>
										  	  <div class="">目录五</div>
										    </div>
										    <div slot="reference" class="">移动到</div>
										  </el-popover>
								  </div>
								  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
								</el-popover>
							</span>
					        <div class="entered_curriculum_con_bolck">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
					        <div class="entered_curriculum_con_bolck">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
							<div class="entered_curriculum_con_bolck_add">+添加</div>
					    </el-collapse-item>
						<el-collapse-item name="2">
						   <span class="collapse-title flex_x" slot="title">
						   	<div class="flex_x">
						   		<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_kejian.png" />
						   		<p style="margin-left: 0.5rem;">一致性 Consistency</p>
						   	</div>
						   	<img class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
						   </span>
						    <div class="entered_curriculum_con_bolck">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
						    <div class="entered_curriculum_con_bolck">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
						</el-collapse-item>
					</el-collapse>
				</div>
				<div class="flex_x" style="margin-left: 1.5rem;margin-top: 0.5rem;border: 1.5px solid #E5E5E5;width: 23.4rem;border-radius: 0.3rem;flex-wrap: wrap;padding: 0.5rem;">
					<div class="flex_y" style="justify-content: center;align-items: center;margin: 1.4rem;cursor: pointer;" v-for="(item,index) in right_Menu" :key="index" >
						<img :src="item.img" style="width: 5rem;height: 5rem;" />
						<div style="width: 5rem;text-align: center;color: #FFFFFF;margin-top: -2.2rem;margin-left: -0.3rem;font-size: 13px;">{{item.title}}</div>
					</div>
				</div>
			</div>
			
		</div>
		
		
		
		
		
		
		
		
		<div class="entered_curriculum_con" v-if="entered_curriculum_head == 1">
			<div class="flex_x">
				<div class="add_courses_btn"  @click="Homework_nav(0)" >作业</div>
				<div class="add_directory_btn" @click="Homework_nav(4)" >新建作业</div>
				<div class="add_directory_btn"  @click="add_directory_btn = true" >添加目录</div>
				<div class="add_directory_btn" @click="Homework_nav(2)" >作业统计</div>
				<div class="add_directory_btn" @click="Homework_nav(3)" >学生作业</div>
				<div class="add_directory_btn"  @click="Import_homework_show = true" >导入作业</div>
				
			</div>
			<el-collapse accordion v-if="Homework_nav_id == 0">
			    <el-collapse-item name="1">
			        <span class="collapse-title flex_x" slot="title">
						<div class="flex_x">
							<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_kejian.png" />
							<p style="margin-left: 0.5rem;">数学必修二</p>
						</div>
						<el-popover
						  placement="left"
						  popper-class="my_popper"
						  trigger="click">
						  <div class="flex_y">
							  <div class="" @click="insert_Catalog">插入目录</div>
							  <div class="" @click="edit_Catalog">编辑目录</div>
							  <div class="" @click="del_Catalog">删除</div>
							  <div class="">上移</div>
							  <div class="">下移</div>
								  <el-popover
								    placement="left-end"
								    trigger="click">
								    <div class="flex_y">
								  	  <div class="">目录一</div>
								  	  <div class="" >目录二</div>
								  	  <div class="">目录三</div>
								  	  <div class="">目录四</div>
								  	  <div class="">目录五</div>
								    </div>
								    <div slot="reference" class="">移动到</div>
								  </el-popover>
						  </div>
						  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
						</el-popover>
					</span>
			        <div class="entered_curriculum_con_bolck flex_x">第一题<div class="Check_btn" @click.stop="Check_homework()">查看</div></div>
			        <div class="entered_curriculum_con_bolck">第二题</div>
					<div class="entered_curriculum_con_bolck_add">+添加</div>
			    </el-collapse-item>
			</el-collapse>
			
			<div class="notics" v-if="Homework_nav_id == 2">
				<div class="notic_block" >
					<div class="block flex_x" style="width: 100%;border-bottom: 1.5px solid #E5E5E5;">
					    <span class="demonstration">作业开始时间</span>
					    <el-date-picker
					      v-model="value2"
					      type="datetimerange"
					      :picker-options="pickerOptions"
					      range-separator="至"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期"
					      align="right"
						  style="margin-left: 1rem;margin-bottom: 1rem;">
					    </el-date-picker>
						<div class="query_worktime" >查询</div>
					  </div>
					  <div class="" style="width: 100%;min-height: 9rem;">
						  <div class="flex_x">
							  <div class="statistical_name_btn" @click="statistical = 0">按姓名统计</div>
							  <div class="statistical_time_btn" @click="statistical = 1">按时间统计</div>
						  </div>
						  <div v-if="statistical == 0">
							  <div class="By_name flex_x" >
								  <div class="By_name_block flex_x" v-for="(ietm,index) in 20" :key="index">
									  <div class="flex_y">
										  <img src="../../assets/teacher/tp_sy_img1.png" class="by_name_headimg" />
										  <div style="width: 4rem;text-align: center;margin-top: 0.4rem;">一二三</div>
									  </div>
									  <div class="flex_y" style="width: 12.5rem;margin-left: 1rem;">
										<div class="flex_x"> 
											<div style="color: #FF0000;">20级</div> <img class="logo_r" src="../../assets/teacher/icon_sy_touxian.png"  />  至尊王者 总分:<div style="color: #FF0000;">100</div></div>
											<el-progress style="margin-top: 0.5rem;" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
											<div style="margin-top: 0.5rem;text-align: right;">共:20 已交:15 未交:5</div>
											<div style="margin-top: 0.5rem;color: #B5B5B5;text-align: right;">2020.20.20 11:00</div>
									  </div>
								  </div>
							  </div>
							 <!-- <div v-for="(item,index) in tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" :key="index">
									{{item.name}}{{item.date}}
							 </div> -->
							  <div style="margin-left: 30%;margin-top: 1rem;">
								   <el-pagination @size-change="handleSizeChange" 
										@current-change="handleCurrentChange" 
										:current-page="currentPage" 
										:page-sizes="pageSizes" 
										:page-size="PageSize" layout="total, prev, pager, next, jumper" 
										:total="totalCount">
									</el-pagination>
							  </div>
						  </div>
						  <div v-if="statistical == 1">
								<div class="time_statistics_block flex_x" >
									<div class="time_statistics_block_l flex_y" >
										<div>开始时间：2019/09/09</div>
										<div>数学作业1</div>
										<div>截止时间：2019/10/10</div>
									</div>
									<div class="time_statistics_block_l flex_y" >
										<div>asd asd asd</div>
										<div>123 123 123</div>
									</div>
								</div>
								
						  </div>
						  
					  </div>
				</div>
			</div>
			
			<div class="notics" v-if="Homework_nav_id == 4">
				<div class="notic_block" >
					<el-input  placeholder="请输入作业名称"></el-input>
					<span class="demonstration">作业开始/结束时间</span>
					<el-date-picker
					  v-model="value3"
					  type="datetimerange"
					  :picker-options="pickerOptions"
					  range-separator="至"
					  start-placeholder="开始日期"
					  end-placeholder="结束日期"
					  align="right"
					  style="margin-left: 1rem;margin-bottom: 1rem;margin-top: 1rem;">
					</el-date-picker>
					<div class="flex_x">
						<div style="min-width: 9.4rem;margin-top: 0.5rem;">满分值</div> 
						<el-input placeholder="请输入满分值"></el-input>
					</div>
					<el-checkbox style="margin-top: 1rem;" >20:00前自动提醒未交作业的名单</el-checkbox>
					<el-input
					  style="margin-top: 1rem;"
					  type="textarea"
					  :rows="5"
					  placeholder="请输入作业内容"
					  v-model="textarea">
					</el-input>
					<div class="flex_x" style="justify-content: space-between;margin-top: 0.5rem;">
						<img src="../../assets/teacher/icon_sy_sc_img15.png" style="width: 3.6rem;height: 3.6rem;" />
						<img src="../../assets/teacher/icon_sy_yuyin.png" style="height: 2rem;margin-top: 1.6rem;"  />
					</div>
					<el-footer>
						<div class="courses_block_footer flex_x">
							<div class="add_btn" >取消</div>
							<div class="cancel_btn" >发布作业</div>
						</div>
					</el-footer>
				</div>
			</div>
		</div>
		 
		 
		 
		 <div class="entered_curriculum_con" v-if="entered_curriculum_head == 2">
		 	<div class="flex_x">
		 		<div class="add_courses_btn"  @click="References_view_btn(0)" >文档资料</div>
		 		<div class="add_directory_btn" @click="References_view_btn(1)" >图片资料</div>
		 		<div class="add_directory_btn" @click="References_view_btn(2)" >视频资料</div>
		 		<div class="add_directory_btn" @click="References_view_btn(3)" >题库资料</div>
		 	</div>
		 	<el-collapse  style="border: 1.5px solid #E5E5E5; padding: 1rem;margin-top: 1rem;border-radius: 0.3rem;">
		 		<div class="flex_x">
		 			<div class="add_courses_btn" >添加资料</div>
		 			<div class="add_directory_btn" @click="add_directory">添加目录</div>
		 		</div>
		 	    <el-collapse  v-if="References_view == 0">
		 	        <el-collapse-item name="1">
		 	            <span class="collapse-title flex_x" slot="title">
		 	    			<div class="flex_x">
		 	    				<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_kejian.png" />
		 	    				<p style="margin-left: 0.5rem;">数学必修二</p>
		 	    			</div>
		 	    			<el-popover
		 	    			  placement="left"
		 	    			  popper-class="my_popper"
		 	    			  trigger="click">
		 	    			  <div class="flex_y">
		 	    				  <div class="" @click="insert_Catalog">插入目录</div>
		 	    				  <div class="" @click="edit_Catalog">编辑目录</div>
		 	    				  <div class="" @click="del_Catalog">删除</div>
		 	    				  <div class="">上移</div>
		 	    				  <div class="">下移</div>
		 	    					  <el-popover
		 	    					    placement="left-end"
		 	    					    trigger="click">
		 	    					    <div class="flex_y">
		 	    					  	  <div class="">目录一</div>
		 	    					  	  <div class="" >目录二</div>
		 	    					  	  <div class="">目录三</div>
		 	    					  	  <div class="">目录四</div>
		 	    					  	  <div class="">目录五</div>
		 	    					    </div>
		 	    					    <div slot="reference" class="">移动到</div>
		 	    					  </el-popover>
		 	    			  </div>
		 	    			  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
		 	    			</el-popover>
		 	    		</span>
		 	            <div class="entered_curriculum_con_bolck flex_x">第一题<div class="Check_btn" @click.stop="Check_homework()">查看</div></div>
		 	            <div class="entered_curriculum_con_bolck">第二题</div>
		 	    		<div class="entered_curriculum_con_bolck_add">+添加</div>
		 	        </el-collapse-item>
		 	    </el-collapse>
				<el-collapse  v-if="References_view == 1">
				    <el-collapse-item name="1">
				        <span class="collapse-title flex_x" slot="title">
							<div class="flex_x">
								<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_wend.png" />
								<p style="margin-left: 0.5rem;">数学必修二</p>
							</div>
							<el-popover
							  placement="left"
							  popper-class="my_popper"
							  trigger="click">
							  <div class="flex_y">
								  <div class="" @click="insert_Catalog">插入目录</div>
								  <div class="" @click="edit_Catalog">编辑目录</div>
								  <div class="" @click="del_Catalog">删除</div>
								  <div class="">上移</div>
								  <div class="">下移</div>
									  <el-popover
									    placement="left-end"
									    trigger="click">
									    <div class="flex_y">
									  	  <div class="">目录一</div>
									  	  <div class="" >目录二</div>
									  	  <div class="">目录三</div>
									  	  <div class="">目录四</div>
									  	  <div class="">目录五</div>
									    </div>
									    <div slot="reference" class="">移动到</div>
									  </el-popover>
							  </div>
							  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
							</el-popover>
						</span>
				        <div class="entered_curriculum_con_bolck flex_x">第一题<div class="Check_btn" @click.stop="Check_homework()">查看</div></div>
				        <div class="entered_curriculum_con_bolck">第二题</div>
						<div class="entered_curriculum_con_bolck_add">+添加</div>
				    </el-collapse-item>
				</el-collapse>
		 	    <el-collapse  v-if="References_view == 2">
		 	        <el-collapse-item name="1">
		 	            <span class="collapse-title flex_x" slot="title">
		 	    			<div class="flex_x">
		 	    				<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_shipin.png" />
		 	    				<p style="margin-left: 0.5rem;">数学必修二</p>
		 	    			</div>
		 	    			<el-popover
		 	    			  placement="left"
		 	    			  popper-class="my_popper"
		 	    			  trigger="click">
		 	    			  <div class="flex_y">
		 	    				  <div class="" @click="insert_Catalog">插入目录</div>
		 	    				  <div class="" @click="edit_Catalog">编辑目录</div>
		 	    				  <div class="" @click="del_Catalog">删除</div>
		 	    				  <div class="">上移</div>
		 	    				  <div class="">下移</div>
		 	    					  <el-popover
		 	    					    placement="left-end"
		 	    					    trigger="click">
		 	    					    <div class="flex_y">
		 	    					  	  <div class="">目录一</div>
		 	    					  	  <div class="" >目录二</div>
		 	    					  	  <div class="">目录三</div>
		 	    					  	  <div class="">目录四</div>
		 	    					  	  <div class="">目录五</div>
		 	    					    </div>
		 	    					    <div slot="reference" class="">移动到</div>
		 	    					  </el-popover>
		 	    			  </div>
		 	    			  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
		 	    			</el-popover>
		 	    		</span>
		 	            <div class="entered_curriculum_con_bolck flex_x">第一题<div class="Check_btn" @click.stop="Check_homework()">查看</div></div>
		 	            <div class="entered_curriculum_con_bolck">第二题</div>
		 	    		<div class="entered_curriculum_con_bolck_add">+添加</div>
		 	        </el-collapse-item>
		 	    </el-collapse>
		 	    <el-collapse  v-if="References_view == 3">
		 	        <el-collapse-item name="1">
		 	            <span class="collapse-title flex_x" slot="title">
		 	    			<div class="flex_x">
		 	    				<img class="entered_curriculum_con_logoL" src="../../assets/teacher/icon_sy_kejian.png" />
		 	    				<p style="margin-left: 0.5rem;">数学必修二</p>
		 	    			</div>
		 	    			<el-popover
		 	    			  placement="left"
		 	    			  popper-class="my_popper"
		 	    			  trigger="click">
		 	    			  <div class="flex_y">
		 	    				  <div class="" @click="insert_Catalog">插入目录</div>
		 	    				  <div class="" @click="edit_Catalog">编辑目录</div>
		 	    				  <div class="" @click="del_Catalog">删除</div>
		 	    				  <div class="">上移</div>
		 	    				  <div class="">下移</div>
		 	    					  <el-popover
		 	    					    placement="left-end"
		 	    					    trigger="click">
		 	    					    <div class="flex_y">
		 	    					  	  <div class="">目录一</div>
		 	    					  	  <div class="" >目录二</div>
		 	    					  	  <div class="">目录三</div>
		 	    					  	  <div class="">目录四</div>
		 	    					  	  <div class="">目录五</div>
		 	    					    </div>
		 	    					    <div slot="reference" class="">移动到</div>
		 	    					  </el-popover>
		 	    			  </div>
		 	    			  <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
		 	    			</el-popover>
		 	    		</span>
		 	            <!-- <div class="entered_curriculum_con_bolck flex_x">第一题<div class="Check_btn" @click.stop="Check_homework()">查看</div></div>
		 	            <div class="entered_curriculum_con_bolck">第二题</div> -->
		 	    		<div style="width: 96.5%;margin-left: 3%;margin-top: -1rem;">
							<el-collapse-item  name="5">
							   <span class="collapse-title flex_x" slot="title" >
							   	<div class="flex_x">
							   		<p style="margin-left: 0.5rem;">数学必修二</p>
							   	</div>
								 <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png" @click.stop="Ellipsis()" />
							   </span>
							   <div style="width: 98%;border: 1.5px solid #E5E5E5;border-top: none;margin-left: 1%;">
								   <div>1.单选题  分值___   * *</div>
								   <div>
									   马丁·塞利格曼(Martin E.P. Seligman 1942- )()心理学家，著名的学者和临床咨询与治疗专家，积极心理学的创始人之一， [1]  主要从事习得性无助、抑郁、乐观主义、悲观主义等方面的研究。曾获美国应用与预防心理学会的荣誉奖章，并由于他在精神病理学方面的研究而获得该学会的终身成就奖。1998年当选为美国心理学会主席。
								   </div>
								   <div>
									   <el-radio-group v-model="questionBank_data" >
									         <el-radio :label="0">美国</el-radio>
									         <el-radio :label="1">法国</el-radio>
											 <el-radio :label="2">德国</el-radio>
											 <el-radio :label="3">英国</el-radio>
									       </el-radio-group>
								   </div>
							   </div>
							  </el-collapse-item>
						</div>
						
		 	        </el-collapse-item>
		 	    </el-collapse>
		 	</el-collapse>
		 </div>
		 
		 <!-- 测试 模块 -->
		 <div class="entered_curriculum_con" v-if="entered_curriculum_head == 3">
		 	<div class="flex_x">
		 		<div class="add_courses_btn" >新建测试</div>
		 		<!-- <div class="add_directory_btn" @click="add_directory">添加目录</div> -->
		 	</div>
		 	<div class="test_block" v-for="(test_item,test_index) in test_data" :key="test_index" @mousemove="test_item.test_delBtn_show = true" @mouseout="test_item.test_delBtn_show = false" >
				<div class="flex_x" style="align-items: center;">
					<div class="flex_y" style="margin: 0.5rem;">
						<div class="" style="color: #151515;">{{test_item.title}}</div>
						<div class="" style="color: #8F8F8F;font-size: 13px;margin-top: 0.3rem;">创建时间:{{test_item.time}}</div>
					</div>
					<div class="test_lookBtn" >查看</div>
					<div class="test_del"  v-if="test_item.test_delBtn_show == true" @mousemove="test_item.test_delBtn_show = true" @click="test_delBtn()">删除</div>
					<!-- <img slot="reference" class="entered_curriculum_con_logoR" src="../../assets/teacher/ellipsis_icon.png"  /> -->
				</div>
			</div>
		 </div>
		 
		 
		 <!-- 公告 模块 -->
		 <div class="entered_curriculum_con" v-if="entered_curriculum_head == 4">
		 	<div class="flex_x">
		 		<div class="add_notice_btn" @click="New_announcement()">发布新公告</div>
		 	</div>
		 	<div class="notics">
				<div class="notic_block" >
					<div class="notic_title" style="font-weight: bold;">文章标题-文章标题-文章标题-文章标题</div>
					<div class="notic_subheading" >发布人：XXX 发行时间：2020.00.00</div>
					<div class="contentAnnouncement" >奥术大师多阿萨德按时大打算打打算打酷暑难当，。按什么侃大山。，dm.as打
					什么d.m,a.smd接口 萨德按时大打算打打算打酷暑难当，。按什么侃大山。，dm.as打什么d.m,a.smd接口萨德按时大打
					萨德按时大打算打打算打酷暑难当，。按什么侃大山。，dm.as打什么d.m,a.smd接口算打打算打酷暑难当，。按什么侃
					萨德按时大打算打打算打酷暑难当，。按什么侃大山。，dm.as打什么d.m,a.smd接口大山。，dm.as打什么d.m,a.smd接口</div>
					<div class="flex_x notic_bottom_btn">
						<div class="notic_edit">编辑</div>
						<div class="notic_del" >删除</div>
					</div>
				</div>
			</div>
		 </div>
		 
		 
		 
		 <!-- 弹窗↓ -->
		 <!-- 添加课件 -->
		 <el-container>
		     <el-dialog title="添加课件" :visible.sync="add_courses_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="class_name">
		 					<span>课程名称 :</span>
		 					<input type="text" style="margin-left: 0.5rem;width: 33rem;" />
		 				</div>
		 				
		 				<div class="flex_y">
		 					<img src="../../assets/teacher/icon_sy_tjtp.png" style="width: 5.3rem;height: 5.3rem;margin-top: 1rem;" />
		 					<div style="width: 6rem;text-align: center;">添加图片</div>
		 				</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 						<div class="add_btn" @click="add_courses_btn = false">取消</div>
		 						<div class="cancel_btn" @click="add_courses_btn = false">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 <!-- 添加目录 -->
		 <el-container>
		     <el-dialog title="添加目录" :visible.sync="add_directory_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;margin-bottom: 2rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="class_name">
		 					<span>课程名称 :</span>
		 					<input type="text" style="margin-left: 0.5rem;width: 33rem;" />
		 				</div>
		 		  </div>
				  <el-footer>
				  	<div class="courses_block_footer flex_x" style="">
				  		<div class="add_btn" @click="add_directory_btn = false">取消</div>
				  		<div class="cancel_btn" @click="add_directory_btn = false">确认</div>
				  	</div>
				  </el-footer>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 
		 <!-- 编辑目录 -->
		 <el-container>
		     <el-dialog title="编辑目录" :visible.sync="edit_Catalog_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="class_name">
		 					<span>目录名称 :</span>
		 					<input type="text" style="margin-left: 0.5rem;width: 33rem;" />
		 				</div>
		 				
		 				<div class="flex_y">
		 					<img src="../../assets/teacher/icon_sy_tjtp.png" style="width: 5.3rem;height: 5.3rem;margin-top: 1rem;" />
		 					<div style="width: 6rem;text-align: center;">添加图片</div>
		 				</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 						<div class="add_btn" @click="edit_Catalog_btn = false">取消</div>
		 						<div class="cancel_btn" @click="edit_Catalog_btn = false">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 <!-- 插入目录 -->
		 <el-container>
		     <el-dialog title="插入目录" :visible.sync="insert_Catalog_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="class_name">
		 					<span>目录名称 :</span>
		 					<input type="text" style="margin-left: 0.5rem;width: 33rem;" />
		 				</div>
		 				
		 				<div class="flex_y">
		 					<img src="../../assets/teacher/icon_sy_tjtp.png" style="width: 5.3rem;height: 5.3rem;margin-top: 1rem;" />
		 					<div style="width: 6rem;text-align: center;">添加图片</div>
		 				</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 						<div class="add_btn" @click="insert_Catalog_btn = false">取消</div>
		 						<div class="cancel_btn" @click="insert_Catalog_btn = false">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 <!-- 上传作业 -->
		 <el-container>
		     <el-dialog title="上传作业" :visible.sync="upload_homework_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="input">
		 					<input type="text"  placeholder="请输入作业名称" />
		 				</div>
		 				<el-input
							style="margin-top: 0.5rem;"
		 					type="textarea"
		 					:rows="5"
		 					placeholder="请输入作业内容"
		 					v-model="upload_homework_content">
		 				</el-input>
						<div class="flex_x" style="justify-content: space-between;margin-top: 0.5rem;"> 
							<img src="../../assets/teacher/icon_sy_sc_img15.png" style="width: 3.6rem;height: 3.6rem;" />
							<img src="../../assets/teacher/icon_sy_yuyin.png" style="height: 2rem;margin-top: 1.6rem;"  />
						</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 						<div class="add_btn" @click="upload_homework_btn = false">取消</div>
		 						<div class="cancel_btn" @click="upload_homework_btn = false">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 
		 <!-- 发布新公告 -->
		 <el-container>
		     <el-dialog title="发布新公告" :visible.sync="New_announcement_btn" width="52%" style="" >
		       <!-- <span> -->
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 		  	<!-- <el-header>新建课程</el-header> -->
		 				<div class="input">
		 					<input type="text"  placeholder="请输入作公告标题" />
		 				</div>
		 				<el-input
		 							style="margin-top: 0.5rem;"
		 					type="textarea"
		 					:rows="5"
		 					placeholder="请输入公告内容"
		 					v-model="New_announcement_content">
		 				</el-input>
		 						<div class="flex_x" style="justify-content: space-between;margin-top: 0.5rem;"> 
		 							<img src="../../assets/teacher/icon_sy_sc_img15.png" style="width: 3.6rem;height: 3.6rem;" />
		 						</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 						<div class="add_btn" @click="New_announcement_btn = false">取消</div>
		 						<div class="cancel_btn" @click="New_announcement_btn = false">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		 	  <!-- </span> -->
		     </el-dialog>
		 </el-container>
		 
		 <!-- 导入课件 -->
		 <el-container>
		     <el-dialog title="导入课件" :visible.sync="Import_courseware_show" width="52%" style="" >
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 				<div style="height: 2rem;border-bottom: 1.5px solid #E5E5E5;padding-left: 1rem;" >从课程导入</div>
						<div class="flex_x" style="border-bottom:1.5px solid #E5E5E5;">
							<div class="flex_y" >
								<div class="class_left_navigation" :class="class_left_navigation_id == index ? 'class_left_navigation':'class_left_navigation2'" v-for="(item,index) in class_left_navigation_data" :key="index" @click="class_left_navigation(index)">{{item.title}}</div>
							</div>
							<div class="" v-if="class_left_navigation_id == 0">
								<el-tree
								  :data="data"
								  show-checkbox
								  node-key="id"
								  ref="tree"
								  highlight-current
								  :props="defaultProps">
								</el-tree>
							</div>
						</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
								<div class="add_btn" @click="Import_courseware_show = false">取消</div>
								<div class="cancel_btn" @click="getCheckedKeys">全部导入</div>
		 						<div class="cancel_btn" @click="getCheckedKeys">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		     </el-dialog>
		 </el-container>
		 
		 <!-- 导入作业 -->
		 <el-container>
		     <el-dialog title="导入课件" :visible.sync="Import_homework_show" width="52%" style="" >
		 		  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
		 				<div style="height: 2rem;border-bottom: 1.5px solid #E5E5E5;padding-left: 1rem;" >从课程导入</div>
		 						<div class="flex_x" style="border-bottom:1.5px solid #E5E5E5;">
		 							<div class="flex_y" >
		 								<div class="class_left_navigation" :class="class_left_navigation_id == index ? 'class_left_navigation':'class_left_navigation2'" v-for="(item,index) in class_left_navigation_data" :key="index" @click="class_left_navigation(index)">{{item.title}}</div>
		 							</div>
		 							<div class="" v-if="class_left_navigation_id == 0">
		 								<el-tree
		 								  :data="data"
		 								  show-checkbox
		 								  node-key="id"
		 								  ref="tree"
		 								  highlight-current
		 								  :props="defaultProps">
		 								</el-tree>
		 							</div>
		 						</div>
		 				<el-footer>
		 					<div class="courses_block_footer flex_x">
		 								<div class="add_btn" @click="Import_homework_show = false">取消</div>
		 								<div class="cancel_btn" @click="getCheckedKeys">全部导入</div>
		 						<div class="cancel_btn" @click="getCheckedKeys">确认</div>
		 					</div>
		 				</el-footer>
		 			
		 		  </div>
		     </el-dialog>
		 </el-container>
		
	</div>
</template>

<script >
	import navHead2 from '../../components/nav_head2.vue'
	export default {
		components:{
			navHead2
		},
		data() {
			return {
				add_directory_btn:false,
				add_courses_btn:false,
				edit_Catalog_btn:false,
				insert_Catalog_btn:false,
				upload_homework_btn:false,//上传作业
				Import_homework_show:false,//导入作业弹窗
				upload_homework_title:'',
				upload_homework_content:'',
				References_view:0,	//资料
				questionBank_data:2,//资料-题库资料数据
				New_announcement_btn:false,//	发布新公告
				Import_courseware_show:false,
				New_announcement_content:'',
				Homework_nav_id:0,
				// 测试 数据
				test_data:[
					{test_delBtn_show:false,title:"体育测试一",time:"2020.13.13"},
					{test_delBtn_show:false,title:"体育测试一",time:"2020.13.13"},
				],
				head_navid:'',
				entered_curriculum_head:0,
				entered_curriculum_head_nav:[
					{title:'课件互动'},
					{title:'作业'},
					{title:'资料'},
					{title:'测试'},
					{title:'公告'},
					{title:'宝箱设置'},
					{title:'加分设置'},
					{title:'查看班级'}
				],
				right_Menu:[
					{title:'加分',img:require('../../assets/teacher/icon_sy_jf.png')},
					{title:'考勤',img:require('../../assets/teacher/icon_sy_kq.png')},
					{title:'评价',img:require('../../assets/teacher/icon_sy_pj.png')},
					{title:'黑板',img:require('../../assets/teacher/icon_sy_hb.png')},
					{title:'作业表现',img:require('../../assets/teacher/icon_sy_zybx.png')},
				],
				//课件数据
				data: [{
				          id: 1,
				          label: '一级 1',
				          children: [{
				            id: 4,
				            label: '二级 1-1',
				            children: [{
				              id: 9,
				              label: '三级 1-1-1'
				            }, {
				              id: 10,
				              label: '三级 1-1-2'
				            }]
				          }]
				        }, {
				          id: 2,
				          label: '一级 2',
				          children: [{
				            id: 5,
				            label: '二级 2-1'
				          }, {
				            id: 6,
				            label: '二级 2-2'
				          }]
				        }, {
				          id: 3,
				          label: '一级 3',
				          children: [{
				            id: 7,
				            label: '二级 3-1'
				          }, {
				            id: 8,
				            label: '二级 3-2'
				          }]
				        }],
				        defaultProps: {
				          children: 'children',
				          label: 'label'
				        },
						//导入课件弹窗左侧课件名称
						class_left_navigation_id: 0,
						class_left_navigation_data:[
							{title:"一年级数学第一章啊"},
							{title:"一年级数学第二章啊"},
							{title:"一年级数学第三章啊"},
						],
						//时间日期选择器
						pickerOptions: {
						          shortcuts: [{
						            text: '最近一周',
						            onClick(picker) {
						              const end = new Date();
						              const start = new Date();
						              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						              picker.$emit('pick', [start, end]);
						            }
						          }, {
						            text: '最近一个月',
						            onClick(picker) {
						              const end = new Date();
						              const start = new Date();
						              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						              picker.$emit('pick', [start, end]);
						            }
						          }, {
						            text: '最近三个月',
						            onClick(picker) {
						              const end = new Date();
						              const start = new Date();
						              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						              picker.$emit('pick', [start, end]);
						            }
						          }]
						        },
						        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
						        value2: '',		//作业统计-用户选择的日期时间
								value3:'',		//新建作业-用户选择的日期时间
								statistical:0,	//按学生统计/时间统计显示隐藏
								
								 tableData: [{
								            date: '2016-05-02',
								            name: 'asd',
								            address: '上海市普陀区金沙江路 1518 弄'
								          }, {
								            date: '2016-05-04',
								            name: 'ad阿萨德',
								            address: '上海市普陀区金沙江路 1517 弄'
								          }, {
								            date: '2016-05-01',
								            name: '自行车',
								            address: '上海市普陀区金沙江路 1519 弄'
								          }, {
								            date: '2016-05-03',
								            name: '当初VB',
								            address: '上海市普陀区金沙江路 1516 弄'
								          }],
										  // 默认显示第几页
										   currentPage:1,
										   // 总条数，根据接口获取数据长度(注意：这里不能为空)
										   totalCount:4,
										   // 个数选择器（可修改）
										   pageSizes:[1,2,3,4],
										   // 默认每页显示的条数（可修改）
										   PageSize:2,
										  
						     
				}
		},
		 methods: {
			  // 每页显示的条数
			        handleSizeChange(val) {
			            // 改变每页显示的条数 
			            this.PageSize=val
			            // 注意：在改变每页显示的条数时，要将页码显示到第一页
			            this.currentPage=1
			        },
			          // 显示第几页
			        handleCurrentChange(val) {
			            // 改变默认的页数
			            this.currentPage=val
			        },
			curriculum_head_nav(id){
				console.log(id);
				this.head_navid = id
				this.entered_curriculum_head = id
				if(id == 6){
					this.$router.push({path:'/markSetup'});
				}
				if(id == 5){
					this.$router.push({path:'/TreasureBox_set'});
				}
				if(id == 7){
					this.$router.push({path:'/seeClass'});
				}
			},
			Ellipsis(){
				console.log(123);
			},
			add_courses(){
				this.add_courses_btn = true
			},
			add_directory(){
				this.add_directory_btn = true
			},
			edit_Catalog(){
				// console.log("123");
				this.edit_Catalog_btn = true
			},
			insert_Catalog(){
				this.insert_Catalog_btn = true
			},
			upload_homework(){
				this.upload_homework_btn = true
			},
			del_Catalog(){
				this.$confirm('确定删除此课件?', '提示', {
				          confirmButtonText: '确定',
				          type: 'warning'
				        }).then(() => {
				          
				        }).catch(() => {
				                 
				        });
			},
			//查看作业
			Check_homework(){
				this.$router.push({path:'/checkHomework'});
			},
			References_view_btn(id){
				this.References_view = id
			},
			test_delBtn(){
				this.$confirm('确定删除此测试?', '提示', {
				          confirmButtonText: '确定',
				          type: 'warning'
				        }).then(() => {
				          
				        }).catch(() => {
				                 
				        });
			},
			//发布新公告
			New_announcement(){
				this.New_announcement_btn = true
			},
			//导入课件
			Import_courseware(){
				this.Import_courseware_show = true
			},
			//获取树形结构数据
			handleNodeClick(data, checked, indeterminate) {
			        console.log(data, checked, indeterminate);
			},
			//
			getCheckedKeys(){
				this.Import_courseware_show = false
				 console.log(this.$refs.tree.getCheckedKeys());
			},
			//选择树形结构数据左侧
			class_left_navigation(id){
				this.class_left_navigation_id = id
			},
			//作业头部导航
			Homework_nav(id){
				this.Homework_nav_id = id
				if(id == 3){
					this.$router.push({path:'/student_work'});
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
	.entered_curriculum_head{
		min-width: 1200px;
		width: 63%;
		margin: 0.5rem auto;
		height: 16.5rem;
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
	}
	.entered_curriculum_head_img{
		width: 100%;
		height: 12.4rem;
	}
	.add_courses_btn,.add_directory_btn,.add_notice_btn{
		width: 7.8rem;
		height: 2.3rem;
		border-radius: 0.3rem;
		text-align: center;
		line-height: 2.3rem;
		cursor: pointer;
		color: #2C58AB;
		border: 1.5px solid #2C58AB;
	}
	.add_directory_btn{
		margin-left: 0.5rem;
		color: #151515;
		border: 1.5px solid #E5E5E5;
	}
	.entered_curriculum_head_nav{
		width: 100%;
	}
	.entered_curriculum_head_nav_title{
		margin-top: 1rem;
		margin-left: 1rem;
	}
	.entered_curriculum_head_nav_titleT,.entered_curriculum_head_nav_titleT2{
		width: 6rem;
		cursor: pointer;
	}
	.entered_curriculum_head_nav_titleT2{
		color: #2C58AB;
	}
	.entered_curriculum_con{
		min-width: 1200px;
		width: 63%;
		margin: 0.5rem auto;
	}
	.entered_curriculum_con_logoL{
		width: 2rem;
		height: 1.8rem;
		padding-top: 0.6rem;
		/* margin-top: 1.2rem; */
	}
	.entered_curriculum_con_logoR{
		float: right;
		margin-top: 0.9rem;
		margin-right: 1rem;
		height: 0.3rem;
		width: 1.3rem;
	}
	.entered_curriculum_con_bolck,.entered_curriculum_con_bolck_add{
		height: 2.5rem;
		line-height: 2.5rem;
		border: 1.5px solid #E5E5E5;
		margin-top: -0.15rem;
		width: 94%;
		margin-left: 3%;
		border-radius: 0.1rem;
		border-top-color: transparent ;
		padding-left: 1rem;
		cursor: pointer;
	}
	.questionBank_black{
		
	}
	.entered_curriculum_con_bolck{
		justify-content: space-between;
	}
	.entered_curriculum_con_bolck_add{
		width: 7%;
		margin-left: 3%;
		border-bottom-right-radius: 0.4rem;
		border-bottom-left-radius: 0.4rem;
	}
	.collapse-title {
		flex: 1 0 80%;
	    order: 1;
		justify-content: space-between;
	}
	.my_popper{
		background-color: #000000;
		border: 1px solid #000000;
	}
	.class_name{
		height: 3.2rem;
		line-height: 3.2rem;
		border-bottom: 1.5px solid #E5E5E5;
	}
	.courses_block_footer{
		margin-top: 1rem;
		float: right;
	}
	.add_btn,.cancel_btn{
		width: 6rem;
		height: 2.3rem;
		line-height: 2.3rem;
		text-align: center;
		border-radius: 0.3rem;
		cursor: pointer;
		margin-right: 1.5rem;
	}
	.add_btn{
		border: 1.5px solid #E5E5E5;
		
	}
	.cancel_btn{
		background-color: #2C58AB;
		border: 1.5px solid #2C58AB;
		color: #FFFFFF;
	}
	.Check_btn{
		background-color: #2C58AB;
		color: #FFFFFF;
		width: 4rem;
		height: 2.1rem;
		line-height: 2.1rem;
		border-radius: 0.3rem;
		text-align: center;
		margin-top: 0.25rem;
		margin-right: 1rem;
	}
	.input{
		width: 23.125rem;
		height: 3.125rem;
		line-height: 3.125rem;
		border: 1px solid #E2E6ED;
		border-radius: 0.5rem;
		padding-left: 0.5rem;
	}
	.test_lookBtn,.test_del{
		margin-left: 40rem;width: 4rem;height: 2rem;border-radius: 0.3rem;background-color: #2C58AB;color: #FFFFFF;text-align: center;line-height: 2rem;cursor: pointer;
	}
	.test_del{
		margin-left: 1rem;
	}
	.test_block{
		border: 1.5px solid #E5E5E5;min-height: 3.8rem;margin-top: 0.5rem;border-radius: 0.3rem;
	}
	.notic_block{
		border: 1.5px solid #E5E5E5;min-height: 7rem;margin-top: 0.5rem;border-radius: 0.3rem;padding: 1rem;
	}
	.notic_subheading{
		margin-top: 0.5rem;
	}
	.contentAnnouncement{
		margin-top: 0.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-all;
		
	}
	.notic_bottom_btn{
		margin-top: 0.8rem;margin-left: 85%;
	}
	.notic_edit{
		cursor: pointer;
	}
	.notic_del{
		margin-left: 3rem; color: #FF0000;cursor: pointer;
	}
	.class_left_navigation,.class_left_navigation2{
		width: 9rem;height: 3.8rem;background-color: #2C58AB;border: 1.5px solid #E5E5E5;color: #FFFFFF;text-align: center;line-height: 3.8rem;cursor: pointer;
	}
	.class_left_navigation2{
		color: #151515;
		background-color: #FFFFFF;
	}
	.demonstration{
		margin-top: 0.5rem;
	}
	.query_worktime{
		margin-left: 1.5rem;width: 6rem;height: 3rem;background-color: #2C58AB;color: #FFFFFF;border-radius: 0.3rem;line-height: 3rem;text-align: center;cursor: pointer;margin-top: -0.25rem;
	}
	.statistical_name_btn,.statistical_time_btn{
		width: 7rem;
		height: 2.4rem;
		border-radius: 0.3rem;
		border: 1.5px solid #2C58AB;
		margin: 1rem;
		color: #2C58AB;
		line-height: 2.4rem;
		text-align: center;
		cursor: pointer;
	}
	.statistical_time_btn{
		color: #151515;
		border: 1.5px solid #E5E5E5;
	}
	.By_name{
		flex-wrap: wrap;width: 97%;border: 1.5px solid #E5E5E5;margin-left: 1.5%;min-height: 20rem;bottom: 1rem;
	}
	.By_name_block{
		margin-left: 4.5rem;margin-top: 1rem;margin-bottom: 1rem;
	}
	.by_name_headimg{
		width: 4rem;height: 4rem;
	}
	.logo_r{
		width: 0.85rem;height: 1rem;margin-top: 0.2rem;margin-left: 0.3rem;
	}
	.time_statistics_block{
		width: 97%;border: 1.5px solid #E5E5E5;min-height: 9.9rem;padding: 1rem;justify-content: space-between;
	}
	.time_statistics_block_l,.time_statistics_block_r{
		justify-content: space-between;height: 8rem;
	}
	.time_statistics_block_r{
		right: 2rem;
	}
	
	
	/deep/.el-collapse{
		border: none;
	}
	/deep/.el-collapse-item{
		margin-top: 0.5rem;
	}
	/deep/.el-collapse-item__header {
	    flex: 1 0 auto;
	    order: -1;
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
		padding-left: 0.5rem;
	}
	/deep/.el-collapse-item__header.is-active{
		    border-bottom-color: #E5E5E5;
			padding-left: 0.5rem;
	}
	/deep/.el-collapse-item__wrap{
		border: none;
	}
	
</style>



