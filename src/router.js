import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import login from '@/view/login/login.vue'  						//登录
import Tindex from '@/view/teacher/index.vue'						//首页
import curriculumAll from '@/view/teacher/curriculum_all.vue'		//所有课程
import enteredCurriculum from '@/view/teacher/entered_curriculum.vue'	//进入课程
import markSetup from '@/view/teacher/mark_setup.vue'				//分数设置
import add_problemSets from '@/view/teacher/add_problemSets.vue'	//添加习题
import checkHomework from '@/view/teacher/checkHomework.vue'		//查看作业
import TreasureBox_set from '@/view/teacher/treasureBox_set.vue'	//宝箱设置
import seeClass from '@/view/teacher/seeClass.vue'	//查看班级
import gradingAssignment from '@/view/teacher/gradingAssignment.vue'	//批阅作业
import enter_class from '@/view/teacher/enter_class.vue'	//进入教室
import student_work from '@/view/teacher/student_work.vue'	//批阅作业

import asdasd from '@/view/teacher/asdasd.vue'	//**测试 - 批阅作业

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'login', component: login },
	{ path: '/login', name: 'login', component: login },
    { path: '/Tindex',  name: 'Tindex', component: Tindex},
	{ path: '/curriculumAll',  name: 'curriculumAll', component: curriculumAll},
    { path: '/enteredCurriculum',  name: 'enteredCurriculum', component: enteredCurriculum},
	{ path: '/markSetup',  name: 'markSetup', component: markSetup},
	{ path: '/add_problemSets',  name: 'add_problemSets', component: add_problemSets},
	{ path: '/checkHomework',  name: 'checkHomework', component: checkHomework},
	{ path: '/TreasureBox_set',  name: 'TreasureBox_set', component: TreasureBox_set},
	{ path: '/seeClass',  name: 'seeClass', component: seeClass},
	{ path: '/gradingAssignment',  name: 'gradingAssignment', component: gradingAssignment},
	{ path: '/enter_class',  name: 'enter_class', component: enter_class},
	{ path: '/student_work',  name: 'student_work', component: student_work},
	{ path: '/asdasd',  name: 'asdasd', component: asdasd},
  ]
})
