<template>
	<div>
		<!-- 批阅作业 -->
		<div class="nav flex_x">
			<div class="nav_l flex_x">
				<div class="">
					学生名称
				</div>
			</div>
			<div class="flex_x">
				<div class="input_score">输入分数</div>
				<div class="back_work">打回作业</div>
				<div class="credits_reward" @click="credits_reward_btn()">唯学分奖励</div>
			</div>
		</div>
		<div class="courses_content flex_x">
			<div class="left flex_y">
				
				<div class="job_content">
					<div class="wraper" ref="wraper">
					  <div class="canvas-wraper" ref="canvas_wraper">
					    <canvas  class="canvas" style="" id="canvas" ref="canvas"></canvas>
					  </div>
					</div>
				</div>
				<div class="job_bottom">
					<div class="controlPanel">
					  <div 
					    :class="[initIdx==idx ? 'contro-item active' : 'contro-item']" 
					    v-for="(item,idx) in toolsArr" :key="idx"
					    @click="handleTools(item, idx)">
					    <i :class="'iconfont' + item.icon"></i>
					  </div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="teacher_evaluation">
					<p style="font-weight: bold;padding: 1rem;">老师评语:</p>
					<div class="teacher_evaluation_con" >
						<el-input type="textarea" v-model="teacher_evaluation" placeholder="请输入评语.." :autosize="{ minRows: 8}"></el-input>
					</div>
					<div class="flex_x">
						<div class="last_student">上一位</div>
						<div class="next_student">下一位</div>
					</div>
				</div>
				<div class="history_comments">
					<p>选择历史标语:</p>
					<div class="flex_y">
						<div class="history_comments_block"  @mousemove="history_comments_block_move(index)" @mouseout="history_comments_block_out(index)" v-for="(item,index) in history_comments_data" :key="index" :class="{'history_comments_block2': teacher_evaluation_id == index}">{{item.con}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="download">
		  <button type="button" :disabled="done" @click="downLoadImage">转换为base64并预览</button>
		  <img :src="imageBase64" v-show="imageBase64!=''" alt="">
		</div>
		
		
		<!-- 学分奖励弹窗 -->
		<el-container>
		    <el-dialog title="学分奖励" :visible.sync="credits_reward" width="52%" style="" >
		      <!-- <span> -->
				  <div style="width: 100%;margin-top: -1.875rem;padding-top: -1.875rem;" class="flex_y">
					<div class="flex_x" style="flex-wrap: wrap;">
						<div class="flex_y" v-for="(item,index) in 10" :key="index" style="margin-left: 1.5rem;margin-top: 1rem;">
							<img src="../../assets/teacher/icon_sy_jf_img5.png" style="width: 5rem;height: 5rem;" />
							<img src="../../assets/teacher/icon_sy_fxz.png" style="width: 1.25rem;height: 1.25rem;margin-top: -4.7rem;margin-left: 3.6rem;" />
							<div style="margin-top: 4rem;width: 5rem;text-align: center;">完全掌握</div>
						</div>
					</div>
					<el-footer>
						<div class="courses_block_footer flex_x">
							<div class="add_btn" @click="credits_reward = false">取消</div>
							<div class="cancel_btn" @click="credits_reward = false">确认</div>
						</div>
					</el-footer>
				  </div>
			  <!-- </span> -->
		    </el-dialog>
		</el-container>
		
		
	</div>
</template>

<script >
	import { fabric } from 'fabric'
	import navHead3 from '../../components/nav_head3.vue'
	export default{
	 components: {
	   navHead3
	 }, 
	  data() {
	    return{
		teacher_evaluation:'',	//老师评语
		teacher_evaluation_id:0,	//老师评语id
		credits_reward:false,		//学分奖励	
		history_comments_data:[
			{con:"字迹潦草",selected:false},
			{con:"是自己写的？？？",selected:false},
			{con:"答案不全面",selected:false},
			{con:"写的不准确,很不好",selected:false},
		],
	    currentTool: '',
	    done: false,
	    fabricObj: null,
	    initIdx: 0,
	    toolsArr: [
	        {
	          name: 'pencil',
	          icon: ' icon-pencil'
	        },
	        {
	          name: 'line',
	          icon: ' icon-line'
	        },
	        {
	          name: 'arrow',
	          icon: ' icon-arrow'
	        },
	        {
	          name: 'xuxian',
	          icon: ' icon-xuxian'
	        },
	        {
	          name: 'text',
	          icon: ' icon-ziti'
	        },
	        {
	          name: 'juxing',
	          icon: ' icon-juxing'
	        },
	        {
	          name: 'cricle',
	          icon: ' icon-yuanxing'
	        },
	        {
	          name: 'ellipse',
	          icon: ' icon-tuoyuanxing'
	        },
	        {
	          name: 'equilateral', //三角形
	          icon: ' icon-sanjiaoxing'
	        },
	        {
	          name: 'remove',
	          icon: ' icon-remove'
	        },
	        {
	          name: 'undo',
	          icon: ' icon-huitui'
	        },
	        {
	          name: 'redo',
	          icon: ' icon-xiangqian'
	        },
	        {
	          name: 'reset',
	          icon: ' icon-reset'
	        },
	      ],
	      mouseFrom:{},
	      mouseTo:{},
	      moveCount: 1,
	      doDrawing: false,
	      fabricHistoryJson: [],
	      mods: 0,
	      drawingObject: null, //绘制对象
	      drawColor: '#E34F51',
	      drawWidth: 2,
	      imageBase64: '',
	      zoom: window.zoom ? window.zoom : 1,
		  canvas_height:0
	    }
	  },
	  mounted() {
	    //初始化canvas 
	    this.initCanvas()
		
	  },
	  computed:{
	    canvasWidth() {
	      return 800
	    }
	  },
	  methods:{
		// 选择历史评语  
		history_comments_block_move(id){
			// this.history_comments_data[id].selected = true
			this.teacher_evaluation_id = id;
		},
		history_comments_block_out(id){
			this.teacher_evaluation_id = -1
		},
		//学分奖励弹窗
		credits_reward_btn(){
			this.credits_reward = true
		},
		
		
		//画板
	    initCanvas() {
	      let _this = this
	      this.fabricObj = new fabric.Canvas('canvas',{
	        isDrawingMode: true,
	        selectable: false,
	        selection: false,
	        devicePixelRatio:true, //Retina 高清屏 屏幕支持
	      })
		  this.canvas_height = this.$refs.canvas_wraper.offsetHeight
		  console.log(this.canvas_height);
	      this.fabricObj.freeDrawingBrush.color = '#E34F51'
	      this.fabricObj.freeDrawingBrush.width = 2
	      this.fabricObj.setWidth(this.canvasWidth)
	      this.fabricObj.setHeight(this.canvas_height)
	      this.fabricObj.add(
	        // new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
	        // new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
	        // new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'blue' }),
	      );
	      //绑定画板事件
	      this.fabricObjAddEvent()
	    },
	    //时间监听
	    fabricObjAddEvent() {
	      this.fabricObj.on({
	        'mouse:down': (o)=> {
	          this.mouseFrom.x = o.pointer.x;
	          this.mouseFrom.y = o.pointer.y;
	          this.doDrawing = true;
	          if(this.currentTool=='text') {
	            this.drawText()
	          }        
	        },
	        'mouse:up': (o)=> {
	          this.mouseTo.x = o.pointer.x;
	          this.mouseTo.y = o.pointer.y;
	          this.drawingObject = null;
	          this.moveCount = 1;
	          this.doDrawing = false;
	          this.updateModifications(true);
	        },
	        'mouse:move': (o)=> {
	          if (this.moveCount % 2 && !this.doDrawing) {
	            //减少绘制频率
	            return;
	          }
	          this.moveCount++;
	          this.mouseTo.x = o.pointer.x;
	          this.mouseTo.y = o.pointer.y;;
	          this.drawing();
	        },
	        //对象移动时间
	        'object:moving': (e)=> {
	          e.target.opacity = 0.5;
	        },
	        //增加对象
	        'object:added': (e)=>{
	          // debugger
	        },
	        'object:modified':(e)=> {
	          e.target.opacity = 1;
	          let object = e.target;
	          this.updateModifications(true)
	        },
	        'selection:created': (e)=>{
	          if (e.target._objects) {
	            //多选删除
	            var etCount = e.target._objects.length;
	            for (var etindex = 0; etindex < etCount; etindex++) {
	              this.fabricObj.remove(e.target._objects[etindex]);
	            }
	          } else {
	            //单选删除
	            this.fabricObj.remove(e.target);
	          }
	          this.fabricObj.discardActiveObject(); //清楚选中框
	          this.updateModifications(true) 
	        },
	      });
	    },
	    //储存历史记录
	    updateModifications(savehistory) {
	      if(savehistory==true) {
	        this.fabricHistoryJson.push(JSON.stringify(this.fabricObj))
	      }
	    },
	    //canvas 历史后退
	    undo() {
	      let state = this.fabricHistoryJson
	      if(this.mods < state.length) {
	        this.fabricObj.clear().renderAll();
	        this.fabricObj.loadFromJSON(state[state.length - 1 - this.mods - 1]);
	        this.fabricObj.renderAll();
	        this.mods += 1;
	      }
	    },
	    //前进
	    redo() {
	      let state = this.fabricHistoryJson
	      if (this.mods > 0) {
	        this.fabricObj.clear().renderAll();
	        this.fabricObj.loadFromJSON(state[state.length - 1 - this.mods + 1]);
	        this.fabricObj.renderAll();
	        this.mods -= 1;
	      }
	    },
	    transformMouse(mouseX, mouseY) {
	      return { x: mouseX / this.zoom, y: mouseY / this.zoom };
	    },
	    resetObj() {
	      this.fabricObj.selectable = true
	      this.fabricObj.selection = false
	      this.fabricObj.skipTargetFind = true
	      //清除文字对象
	      if(this.textboxObj) {
	        this.textboxObj.exitEditing();
	        this.textboxObj = null;
	      }
	    },
	    handleTools(tools, idx) {
	      this.initIdx = idx;
	      this.currentTool = tools.name;
	      this.fabricObj.isDrawingMode = false;
	      this.resetObj()
	      switch(tools.name) {
	        case 'pencil':
	          this.fabricObj.isDrawingMode = true;
	          break;
	        case 'remove':
	          this.fabricObj.selection = true
	          this.fabricObj.skipTargetFind = false
	          this.fabricObj.selectable = true
	          break;
	        case 'reset':
	          this.fabricObj.clear();
	          break;
	        case 'redo':
	          this.redo();
	          break;
	        case 'undo':
	          this.undo();
	          break;     
	        default:
	          break; 
	      }
	    },
	    //绘制文字对象
	    drawText() {
	      this.textboxObj = new fabric.Textbox(" ", {
	        left: this.mouseFrom.x,
	        top: this.mouseFrom.y,
	        width: 220,
	        fontSize: 18,
	        fill: this.drawColor,
	        hasControls: true
	      });
	      this.fabricObj.add(this.textboxObj);
	      this.textboxObj.enterEditing();
	      this.textboxObj.hiddenTextarea.focus();
	      this.updateModifications(true)
	    },
	    drawing() {
	      let _this = this;
	      if(this.drawingObject) {
	        this.fabricObj.remove(this.drawingObject)
	      }
	      let fabricObject = null
	      switch (this.currentTool) {
	        case 'pencil':
	          this.fabricObj.isDrawingMode = true
	          break;
	        case 'line':
	          fabricObject = new fabric.Line([this.mouseFrom.x,this.mouseFrom.y,this.mouseTo.x,this.mouseTo.y],{
	            stroke: this.drawColor,
	            strokeWidth: this.drawWidth
	          }) 
	          break;
	        case 'arrow':
	          fabricObject = new fabric.Path(this.drawArrow(this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y, 17.5, 17.5), {
	            stroke: this.drawColor,
	            fill: "rgba(255,255,255,0)",
	            strokeWidth: this.drawWidth
	          });
	          break;
	        case 'xuxian': //doshed line
	          fabricObject = new fabric.Line([this.mouseFrom.x, this.mouseFrom.y, this.mouseTo.x, this.mouseTo.y],{
	            strokeDashArray: [10, 3],
	            stroke: this.drawColor,
	            strokeWidth: this.drawWidth
	          })
	          break;
	        case 'juxing': //矩形
	          let path =  "M " +
	            this.mouseFrom.x +
	            " " +
	            this.mouseFrom.y +
	            " L " +
	            this.mouseTo.x +
	            " " +
	            this.mouseFrom.y +
	            " L " +
	            this.mouseTo.x +
	            " " +
	            this.mouseTo.y +
	            " L " +
	            this.mouseFrom.x +
	            " " +
	            this.mouseTo.y +
	            " L " +
	            this.mouseFrom.x +
	            " " +
	            this.mouseFrom.y +
	            " z";
	          fabricObject = new fabric.Path(path, {
	            left: this.mouseFrom.x,
	            top: this.mouseFrom.y,
	            stroke: this.drawColor,
	            strokeWidth: this.drawWidth,
	            fill: "rgba(255, 255, 255, 0)"
	          });
	          break;
	        case "cricle": //正圆
	          let radius = Math.sqrt((this.mouseTo.x - this.mouseFrom.x) * (this.mouseTo.x - this.mouseFrom.x) + (this.mouseTo.y - this.mouseFrom.y) * (this.mouseTo.y - this.mouseFrom.y)) / 2;
	          fabricObject = new fabric.Circle({
	            left: this.mouseFrom.x,
	            top: this.mouseFrom.y,
	            stroke: this.drawColor,
	            fill: "rgba(255, 255, 255, 0)",
	            radius: radius,
	            strokeWidth: this.drawWidth
	          });
	          break;
	        case "ellipse": //椭圆
	          let left = this.mouseFrom.x;
	          let top = this.mouseFrom.y;
	          let ellipse = Math.sqrt((this.mouseTo.x - left) * (this.mouseTo.x - left) + (this.mouseTo.y - top) * (this.mouseTo.y - top)) / 2;
	          fabricObject = new fabric.Ellipse({
	            left: left,
	            top: top,
	            stroke: this.drawColor,
	            fill: "rgba(255, 255, 255, 0)",
	            originX: "center",
	            originY: "center",
	            rx: Math.abs(left - this.mouseTo.x),
	            ry: Math.abs(top - this.mouseTo.y),
	            strokeWidth: this.drawWidth
	          });
	          break;
	        case "equilateral": //等边三角形
	          let height = this.mouseTo.y - this.mouseFrom.y;
	          fabricObject = new fabric.Triangle({
	            top: this.mouseFrom.y,
	            left: this.mouseFrom.x,
	            width: Math.sqrt(Math.pow(height, 2) + Math.pow(height / 2.0, 2)),
	            height: height,
	            stroke: this.drawColor,
	            strokeWidth: this.drawWidth,
	            fill: "rgba(255,255,255,0)"
	          });
	          break;
	        case 'remove':
	          break;   
	        default:
	          // statements_def'
	          break;
	      }
	      if(fabricObject) {
	        this.fabricObj.add(fabricObject)
	        this.drawingObject = fabricObject;
	      }
	    }, 
	    //书写箭头的方法
	    drawArrow(fromX, fromY, toX, toY, theta, headlen) {
	      theta = typeof theta != "undefined" ? theta : 30;
	      headlen = typeof theta != "undefined" ? headlen : 10;
	      // 计算各角度和对应的P2,P3坐标
	      let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
	        angle1 = (angle + theta) * Math.PI / 180,
	        angle2 = (angle - theta) * Math.PI / 180,
	        topX = headlen * Math.cos(angle1),
	        topY = headlen * Math.sin(angle1),
	        botX = headlen * Math.cos(angle2),
	        botY = headlen * Math.sin(angle2);
	      let arrowX = fromX - topX,
	        arrowY = fromY - topY;
	      let path = " M " + fromX + " " + fromY;
	      path += " L " + toX + " " + toY;
	      arrowX = toX + topX;
	      arrowY = toY + topY;
	      path += " M " + arrowX + " " + arrowY;
	      path += " L " + toX + " " + toY;
	      arrowX = toX + botX;
	      arrowY = toY + botY;
	      path += " L " + arrowX + " " + arrowY;
	      return path;
	    },
	    downLoadImage() {
	      this.done = true
	      //生成双倍像素比的图片
	      let base64URl = this.fabricObj.toDataURL({
	        formart: 'png',
	        multiplier: 2
	      })
	      this.imageBase64 = base64URl
	      this.done = false
	    },
	  },
	}
</script>

<style lang="scss" scoped>
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
		/* border: 1.5px solid #E9E9E9; */
		min-height: 60rem;
	}
	.input_score,.back_work,.credits_reward{
		width: 10rem;
		height: 3rem;
		border: 1.5px solid #2C58AB;
		color: #2C58AB;
		text-align: center;
		line-height: 3rem;
		border-radius: 0.3rem;
		cursor: pointer;
		margin-left: 0.5rem;
		margin-top: 1rem;
		font-size: 18px;
	}
	.left{
		width: 68%;
	}
	.right{
		width: 29.5%;
		margin-left: 2%;
		border-radius: 0.3rem;
		height: 50rem;
	}
	.job_content{
		border: 1.5px solid #E9E9E9;
		border-radius: 0.3rem;
		height: 100%;
		padding: 1rem;
		text-indent:26px;
	}
	.job_bottom{
		margin: 1rem 0;
		height: 2.8rem;
		border-radius: 0.3rem;
		background-color: #F4F4F4;
		margin-bottom: 3rem;
	}
	.teacher_evaluation{
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
	}
	.teacher_evaluation_con{
		margin-top: -1rem;
		padding: 1rem;
	}
	.last_student,.next_student{
		width: 5.8rem;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		border: 1.5px solid #E5E5E5;
		border-radius: 0.3rem;
		cursor: pointer;
		margin-left: 2rem;
		margin-bottom: 1rem;
	}
	.next_student{
		border: 1.5px solid #2C58AB;
		color: #FFFFFF;
		background-color: #2C58AB;
	}
	.history_comments{
		margin-top: 1rem;
	}
	.history_comments_block,.history_comments_block2{
		width: 100%;
		height: 2.5rem;
		border: 1px dashed #E5E5E5;
		border-radius: 0.3rem;
		text-align: center;
		line-height: 2.5rem;
		margin-top: 0.5rem;
		cursor: pointer;
		
	}
	.history_comments_block2{
		color: #FFFFFF;
		background-color: #2C58AB;
		border: 1px dashed #2C58AB;
	}
	.courses_block_footer{
		margin-top: 1.5rem;
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
	
	@import "../../../static/assets/initCss.css";
	@import "../../../static/font/iconfont.css";
	.wraper{
	  position: relative;
	  width: 100%;
	  height: 100%;
	  .canvas-wraper{
	    height: 100%;
	    width: 100%;
	    overflow: hidden;
		// border: 1px solid #0077AA;
	  }
	}
	.download{
	  img{
	    width: 100%;
	  }
	}
	.controlPanel{
	  width: 100%;
	  height: 3rem;
	  background: #F4F4F4;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  margin-bottom: 15px;
	  border-radius: 0.3rem;
	  .contro-item{
	    flex-basis: 4rem;
	    
	    text-align: center;
	    cursor: pointer;
		border-radius: 3px;
	    i{
	      font-size: 20px;
	      line-height: 3rem;
	    }
	    &.active{
	      // background: #e34f51;
	      color: #2C58AB;
	      border-radius: 3px;
	      i{
	        font-size: 22px;
	      }
	    }
	  }
	}
</style>
