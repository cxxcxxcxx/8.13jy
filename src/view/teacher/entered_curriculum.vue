<template>
	<div>
		<navHead2></navHead2>
		<div class="entered_curriculum_head">
			<img class="entered_curriculum_head_img" src="../../assets/teacher/tp_sy_img11.png" />
			
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
			</div>
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
				<el-collapse-item name="3">
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
				<el-collapse-item name="4">
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
		
		
		
		
		
		
		
		
		<div class="entered_curriculum_con" v-if="entered_curriculum_head == 1">
			<div class="flex_x">
				<div class="add_courses_btn" @click="upload_homework">上传作业</div>
				<div class="add_directory_btn" @click="add_directory">添加目录</div>
			</div>
			<el-collapse accordion >
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
				upload_homework_title:'',
				upload_homework_content:'',
				References_view:0,	//资料
				questionBank_data:2,//资料-题库资料数据
				New_announcement_btn:false,//	发布新公告
				New_announcement_content:'',
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
				]
				}
		},
		 methods: {
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



