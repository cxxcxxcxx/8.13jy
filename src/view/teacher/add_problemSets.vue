<template>
	<div>
		<div class="nav flex_x">
			<div class="nav_l flex_x">
				<div class="">
					添加习题
				</div>
			</div>
			<navHead3></navHead3>
		</div>
		<div class="fg"></div>
		<div class="courses_content">
			<!-- 总form -->
			<el-form :model="formData3" :inline="true" ref="formData3" label-width="65px" size="medium">
				<!-- 判断题目 -->
				<el-row v-for="(item,index) in formData3.add_trueFalse" :key="index">
					
					<el-form-item 
						class="question_block"
						label=""
						:rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 50, message: '不超过50个字符', trigger: 'change'}]">
						<!-- 右边的选择章节与删除按钮 -->
						<div style="position: absolute;margin-left: 45rem;">
							<div class="flex_x" style="min-width: 5rem;">
								<el-popover
								  placement="left"
								  width="100"
								  trigger="click">
								  <div class="flex_y">
									  <el-popover
									    placement="left-end"
									    width="100"
									    trigger="click">
										<div>
											<div class="" >语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">+</div>
										</div>
									    <div slot="reference" class="">目录一</div>
									  </el-popover>
								    
								    <div class="" >目录二</div>
								    <div class="">目录三</div>
								    <div class="">目录四</div>
								    <div class="">目录五</div>
									<div class="">+</div>
								  </div>
								  <div slot="reference" class="select_chapterBtn" >第一章</div>
								</el-popover>
								
								<img class="del_questions" src="../../assets/teacher/icon_sy_sc.png"  />
							</div>
						</div>
						<!-- 题目部分 -->
						<div class="flex_x">
							<div>
								{{index+1}}.判断题 分值
								<input v-model="item.score" placeholder="请输入分值"/>
							</div>
						</div>
					  <el-input v-model="item.title" placeholder="请输入题干....."/>
					    <el-radio-group v-model="item.answer">
					        <el-radio label="对"></el-radio>
					        <el-radio label="错"></el-radio>
					    </el-radio-group>
					</el-form-item>
				</el-row>
				<!-- 单选题目 -->
				<el-row v-for="(item0,index0) in formData3.add_singleChoice" :key="'singleChoice'+index0">
					
					<el-form-item 
						class="question_block"
						label=""
						:rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 50, message: '不超过50个字符', trigger: 'change'}]">
						<!-- 右边的选择章节与删除按钮 -->
						<div style="position: absolute;margin-left: 45rem;">
							<div class="flex_x" style="min-width: 5rem;">
								<el-popover
								  placement="left"
								  width="100"
								  trigger="click">
								  <div class="flex_y">
									  <el-popover
									    placement="left-end"
									    width="100"
									    trigger="click">
										<div>
											<div class="" >语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">+</div>
										</div>
									    <div slot="reference" class="">目录一</div>
									  </el-popover>
								    
								    <div class="" >目录二</div>
								    <div class="">目录三</div>
								    <div class="">目录四</div>
								    <div class="">目录五</div>
									<div class="">+</div>
								  </div>
								  <div slot="reference" class="select_chapterBtn" >第一章</div>
								</el-popover>
								
								<img class="del_questions" src="../../assets/teacher/icon_sy_sc.png"  />
							</div>
						</div>
						<!-- 题目部分 -->
						<div>
							{{index0+1}}.单选题 分值
							<input v-model="item0.score" placeholder="请输入分值"/>
						</div>
					  <el-input v-model="item0.title" placeholder="请输入题干....."/>
					    <el-radio-group class="singleChoice_radioGroup flex_x" v-model="item0.answer" v-for="(item,index) in item0.options" :key="index">
					       <el-radio class="singleChoice_radio" :label="item0.options[index].options" ></el-radio>
							<el-input  v-model="item0.options[index].options" placeholder="请输入选项"/>
							<!-- v-if="item0.options.length > 1" -->
							<el-button size="mini" @click="add_oneSingleChoiceOptions_btn(index0)" style="margin-left: 0.5rem;">+</el-button>
							<el-button size="mini" @click="del_oneSingleChoiceOptions_btn(index0,index)">x</el-button>
					    </el-radio-group>
					</el-form-item>
				</el-row>
				<!-- 多选题目 -->
				<el-row v-for="(multipleChoice,multipleChoiceid) in formData3.add_multipleChoice" :key="'multipleChoice'+multipleChoiceid">
					<el-form-item 
						class="question_block"
						label=""
						:rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 50, message: '不超过50个字符', trigger: 'change'}]">
						<!-- 右边的选择章节与删除按钮 -->
						<div style="position: absolute;margin-left: 45rem;">
							<div class="flex_x" style="min-width: 5rem;">
								<el-popover
								  placement="left"
								  width="100"
								  trigger="click">
								  <div class="flex_y">
									  <el-popover
									    placement="left-end"
									    width="100"
									    trigger="click">
										<div>
											<div class="" >语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">+</div>
										</div>
									    <div slot="reference" class="">目录一</div>
									  </el-popover>
								    
								    <div class="" >目录二</div>
								    <div class="">目录三</div>
								    <div class="">目录四</div>
								    <div class="">目录五</div>
									<div class="">+</div>
								  </div>
								  <div slot="reference" class="select_chapterBtn" >第一章</div>
								</el-popover>
								
								<img class="del_questions" src="../../assets/teacher/icon_sy_sc.png"  />
							</div>
						</div>
						<!-- 题目部分 -->
						<div>
							{{multipleChoiceid+1}}.多选题 分值
							<input v-model="multipleChoice.score" placeholder="请输入分值"/>
						</div>
					  <el-input v-model="multipleChoice.title" placeholder="请输入题干....."/>
					    <el-radio-group class="singleChoice_radioGroup flex_x" v-model="multipleChoice.answer" v-for="(multipleChoiceoptions,multipleChoiceoptionsid) in multipleChoice.options" :key="multipleChoiceoptionsid">
					       <el-checkbox class="multipleChoice_radio" :label="multipleChoice.options[multipleChoiceoptionsid].options" ></el-checkbox>
							<el-input style="margin-left: 0.5rem;" v-model="multipleChoice.options[multipleChoiceoptionsid].options" placeholder="请输入选项"/>
							<!-- v-if="item0.options.length > 1" -->
							<el-button size="mini"  @click="add_multipleChoiceOptions_btn(multipleChoiceid)" style="margin-left: 0.5rem;">+</el-button>
							<el-button size="mini"  @click="del_multipleChoiceOptions_btn(multipleChoiceid,multipleChoiceoptionsid)">x</el-button>
					    </el-radio-group>
					</el-form-item>
				</el-row>
				<!-- 填空题目 -->
				<el-row v-for="(add_gapFilling,add_gapFillingid) in formData3.add_gapFilling" :key="'add_gapFilling'+add_gapFillingid">
					<el-form-item 
						class="question_block"
						label=""
						:rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 50, message: '不超过50个字符', trigger: 'change'}]">
						<!-- 右边的选择章节与删除按钮 -->
						<div style="position: absolute;margin-left: 45rem;">
							<div class="flex_x" style="min-width: 5rem;">
								<el-popover
								  placement="left"
								  width="100"
								  trigger="click">
								  <div class="flex_y">
									  <el-popover
									    placement="left-end"
									    width="100"
									    trigger="click">
										<div>
											<div class="" >语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">+</div>
										</div>
									    <div slot="reference" class="">目录一</div>
									  </el-popover>
								    
								    <div class="" >目录二</div>
								    <div class="">目录三</div>
								    <div class="">目录四</div>
								    <div class="">目录五</div>
									<div class="">+</div>
								  </div>
								  <div slot="reference" class="select_chapterBtn" >第一章</div>
								</el-popover>
								
								<img class="del_questions" src="../../assets/teacher/icon_sy_sc.png"  />
							</div>
						</div>
						<!-- 题目部分 -->
						<div>
							{{add_gapFillingid+1}}.填空题 分值
							<input v-model="add_gapFilling.score" placeholder="请输入分值"/>
						</div>
					  <el-input type="textarea" v-model="add_gapFilling.title" placeholder="请输入题干..." style="width: 50rem;"/>
					    <el-input type="textarea" v-model="add_gapFilling.answer" placeholder="请输入参考答案..." style="width: 40rem;margin-top: 1rem;"/>
					</el-form-item>
				</el-row>
				<!-- 简答题目 -->
				<el-row v-for="(shortAnswer,shortAnswerid) in formData3.add_shortAnswer" :key="'shortAnswer'+shortAnswer">
					<el-form-item 
						class="question_block"
						label=""
						:rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 50, message: '不超过50个字符', trigger: 'change'}]">
						<!-- 右边的选择章节与删除按钮 -->
						<div style="position: absolute;margin-left: 45rem;">
							<div class="flex_x" style="min-width: 5rem;">
								<el-popover
								  placement="left"
								  width="100"
								  trigger="click">
								  <div class="flex_y">
									  <el-popover
									    placement="left-end"
									    width="100"
									    trigger="click">
										<div>
											<div class="" >语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">语文</div>
											<div class="">+</div>
										</div>
									    <div slot="reference" class="">目录一</div>
									  </el-popover>
								    
								    <div class="" >目录二</div>
								    <div class="">目录三</div>
								    <div class="">目录四</div>
								    <div class="">目录五</div>
									<div class="">+</div>
								  </div>
								  <div slot="reference" class="select_chapterBtn" >第一章</div>
								</el-popover>
								
								<img class="del_questions" src="../../assets/teacher/icon_sy_sc.png"  />
							</div>
						</div>
						<!-- 题目部分 -->
						<div>
							{{shortAnswerid+1}}.简答题 分值
							<input v-model="shortAnswer.score" placeholder="请输入分值"/>
						</div>
					    <el-input type="textarea" v-model="shortAnswer.title" placeholder="请输入题干..." style="width: 50rem;"/>
					    <el-input type="textarea" v-model="shortAnswer.answer" placeholder="请输入参考答案..." style="width: 40rem;margin-top: 1rem;"/>
					</el-form-item>
				</el-row>
			          <!-- 
			            <el-form-item label="参数名"
			                          :prop="'powerAttrList.' + index + '.fieldDesc'"
			                          :rules="[{ required: true, message: '参数名不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]">
			              <el-input v-model="item.fieldDesc" placeholder="请输入参数名"/>
			            </el-form-item>
			            <el-form-item label="描述"
			                          :prop="'powerAttrList.' + index + '.fieldName'"
			                          :rules="[{ required: true, message: '描述不能为空',trigger: 'change'},{max: 32, message: '不超过32个字符', trigger: 'change'}]">
			              <el-input v-model="item.fieldName" placeholder="请输入描述"/>
			            </el-form-item>
			            <el-form-item label="排序"
			                          :prop="'powerAttrList.' + index + '.fieldSort'"
			                          :rules="moreRules.fieldSort">
			              <el-input type="number" v-model="item.fieldSort" autocomplete="off" placeholder="请输入排序"/>
			            </el-form-item>
			            <el-button type="danger" v-if="formData3.powerAttrList.length > 1" size="medium" @click="removeRow(index)">
			              删除
			            </el-button>
			          </el-row>
			          <el-row>
			            <el-button type="primary" size="medium" @click="addRow">新增属性</el-button>
			          </el-row> -->
			</el-form>
			<el-row>
			   <el-col :span="4" style="margin-left: 5.6rem;"><div :span="4" class="add_trueFalse" @click="add_trueFalse_btn">+判断题</div></el-col>
			    <el-col :span="4"><div :span="4" class="add_singleChoice" @click="add_singleChoice_btn">+单选题</div></el-col>
			    <el-col :span="4"><div :span="4" class="add_multipleChoice" @click="add_multipleChoice_btn">+多选题</div></el-col>
			    <el-col :span="4"><div :span="4" class="add_completion" @click="add_gapFilling_btn" >+填空题</div></el-col>
			    <el-col :span="4"><div :span="4" class="add_shortAnswer" @click="add_shortAnswer_btn" >+简答题</div></el-col>
			</el-row>
		</div>
		<div style="margin: 4rem auto;justify-content: center;align-items: center;" class="flex_y">
			<div class="add_shortAnswer" @click="getFormData()" >保存</div>
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
				formData3: {
				   add_trueFalse: [{
					    sentence_type:'',//命题(加减乘除等类型)
						score:'',	//题目分值
						title:'',	//题目内容
						answer:'',	//正确答案
						classify:0,//题目归类(0-判断,1-单选,2-多选,3-填空,4-简答)
				   }],
				   add_singleChoice:[{
					    sentence:'',//命题
						score:'',	//题目分值
						title:'',	//题目内容
						options:[{//可选择的选项
							options:''
						}], 
						answer:'',	//正确答案
						classify:1,//题目归类
				   }],
				   add_multipleChoice:[{
					   sentence:'',//命题
					   score:'',	//题目分值
					   title:'',	//题目内容
					   options:[{//可选择的选项
					   	options:''
					   }], 
					   answer:'',	//正确答案
					   classify:2,//题目归类
				   }],
				   add_gapFilling:[{
					   sentence:'',//命题
					   score:'',	//题目分值
					   title:'',	//题目内容
					   answer:'',	//正确答案
					   classify:3,//题目归类
				   }],
				   add_shortAnswer:[{
					   sentence:'',//命题
					   score:'',	//题目分值
					   title:'',	//题目内容
					   answer:'',	//正确答案
					   classify:4,//题目归类
				   }]
				 },
				 moreRules: {
				           fieldSort: [{required: true, message: '请输入排序', trigger: 'change'},
				             {
				               validator: (rule, value, callback) => {
				                 if (value < 0) {
				                   callback(new Error('必须大于0'));
				                 } else if (value.length > 5) {
				                   callback(new Error('不超过5位数字'));
				                 } else if (!value) {
				                   callback(new Error('排序不能为空'));
				                 } else {
				                   callback();
				                 }
				               },
				               trigger: 'change',
				             },
				           ],
				         },

				}
		},
		 methods: {
			 //添加判断题目
		      add_trueFalse_btn() {
		         this.formData3.add_trueFalse.push({
					  sentence_type:'',//命题(加减乘除等类型)
					  score:'',	//题目分值
					  title:'',	//题目内容
					  answer:'',	//正确答案
					  classify:0,//题目归类(单选,判断多选等)
		         });
				
		       },
			   //添加单选题目
			   add_singleChoice_btn() {
			      this.formData3.add_singleChoice.push({
			        sentence:'',//命题
			        score:'',	//题目分值
			        title:'',	//题目内容
			        options:[{//可选择的选项
			        	options:''
			        }], 
			        answer:'',	//正确答案
			        classify:1,//题目归类
			      });	
			    },
				//添加多选题
				add_multipleChoice_btn(){
					this.formData3.add_multipleChoice.push({
					  sentence:'',//命题
					  score:'',	//题目分值
					  title:'',	//题目内容
					  options:[{//可选择的选项
					  	options:''
					  }], 
					  answer:'',	//正确答案
					  classify:1,//题目归类
					});
				},
				add_gapFilling_btn(){
					this.formData3.add_gapFilling.push({
					 sentence:'',//命题
					 score:'',	//题目分值
					 title:'',	//题目内容
					 answer:'',	//正确答案
					 classify:3,//题目归类
					});
				},
				add_shortAnswer_btn(){
					this.formData3.add_shortAnswer.push({
					 sentence:'',//命题
					 score:'',	//题目分值
					 title:'',	//题目内容
					 answer:'',	//正确答案
					 classify:3,//题目归类
					});
				},
				//添加一个单选选项
				add_oneSingleChoiceOptions_btn(index){
					console.log("index:::",index);
					this.formData3.add_singleChoice[index].options.push({
						options:''
					});
					  // console.log(this.formData3.add_singleChoice[index].options);
				},
				//删除一个单选选项
				del_oneSingleChoiceOptions_btn(singleChoiceId,singleChoiceOptionsid){
					console.log("*********************************",singleChoiceId);
					console.log(this.formData3.add_singleChoice[singleChoiceId]);
					if(this.formData3.add_singleChoice[singleChoiceId].options.length == 1){
						this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						          confirmButtonText: '确定',
						          cancelButtonText: '取消',
						          type: 'warning'
						        }).then(() => {
						          
						        }).catch(() => {
						                
						        });
						      
					}else{
						this.formData3.add_singleChoice[singleChoiceId].options.splice(singleChoiceOptionsid, 1);
					}
				},
				//添加一个多选选项
				add_multipleChoiceOptions_btn(index){
					console.log("index:::",index);
					this.formData3.add_multipleChoice[index].options.push({
						options:''
					});
					  // console.log(this.formData3.add_singleChoice[index].options);
				},
				//删除一个多选选项
				del_multipleChoiceOptions_btn(multipleChoiceid,multipleChoiceoptionsid){
					console.log("*********************************",multipleChoiceid);
					console.log(this.formData3.add_multipleChoice[multipleChoiceid]);
					if(this.formData3.add_multipleChoice[multipleChoiceid].options.length == 1){
						this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
						          confirmButtonText: '确定',
						          cancelButtonText: '取消',
						          type: 'warning'
						        }).then(() => {
						          
						        }).catch(() => {
						                
						        });
					}else{
						this.formData3.add_multipleChoice[multipleChoiceid].options.splice(multipleChoiceoptionsid, 1);
					}
				},
				//删除
		      // removeRow(index) {
		      //         this.formData3.powerAttrList.splice(index, 1);
		      // },
			  //获取所有表单信息
				getFormData(){
					 console.log(this.formData3)
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
	}
	.question_block{
		width: 94.3%;
		margin:0.5rem 1%;
		border: 1.5px solid #E9E9E9;
		border-radius: 0.3rem;
		padding: 1rem;
	}
	.add_trueFalse,.add_multipleChoice,.add_completion,.add_shortAnswer,.add_singleChoice{
		width: 7.5rem;
		height: 2.5rem;
		border-radius: 0.3rem;
		line-height: 2.5rem;
		text-align: center;
		margin: 0.5rem;
		color: #FFFFFF;
		cursor: pointer;
	}
	.add_trueFalse{
		background-color: #199ED8;
	}
	.add_singleChoice{
		background-color: #6699FF;
	}
	.add_multipleChoice{
		background-color: #FF9900;
	}
	.add_completion{
		background-color: #99CC00;
	}
	.add_shortAnswer{
		background-color: #2C58AB;
	}
	.singleChoice_input{
		border: 1.5px solid #E5E5E5;
		padding: 0.5rem;
		border-radius: 0.3rem;
	}
	.singleChoice_radio{
		margin-top: 0.8rem;
	}
	.singleChoice_radioGroup{
		margin-top: 0.5rem;
	}
	.multipleChoice_radio{
		margin-top: 0.5rem;
	}
	.select_chapterBtn{
		width: 5.5rem;
		height: 1.3rem;
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
		text-align: center;
		line-height: 1.3rem;
		cursor: pointer;
	}
	.del_questions{
		width: 1.25rem;
		height: 1.25rem;
		margin-left: 1.5rem;
		cursor: pointer;
	}
</style>
