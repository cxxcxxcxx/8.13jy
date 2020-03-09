
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
	</div>
</template>

<script>
	import navHead3 from '../../components/nav_head3.vue'
	export default {
		components:{
			navHead3
		},
		data() {
			return {
				add_directory_btn:false,
				add_courses_btn:false,
				edit_Catalog_btn:false,
				insert_Catalog_btn:false,
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
				console.log("123");
				this.edit_Catalog_btn = true
			},
			insert_Catalog(){
				this.insert_Catalog_btn = true
			},
			del_Catalog(){
				this.$confirm('确定删除此课件?', '提示', {
				          confirmButtonText: '确定',
				          type: 'warning'
				        }).then(() => {
				          
				        }).catch(() => {
				                 
				        });
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
</style>
