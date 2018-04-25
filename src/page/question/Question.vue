<template>
	<div>
		<r-header :headShow='headShow'>
			 <img src="static/images/banner.png" alt="" class="banner">
		</r-header>
		<el-container class="container question">		    
		    <el-main>
				<div class="box d_jump" v-for="(item,index) in navLists">
					<h3>{{item.name}}</h3>
					<el-collapse v-model="activeNames" @change="handleChange"  v-for="(subList,index) in item.list" :key='index'>
						<el-collapse-item  :title="subList.title" >
						    <div>{{subList.content}}</div>
						</el-collapse-item>
						<!-- <el-collapse-item title="反馈 Feedback" name="2">
						    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
						    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
						</el-collapse-item>
						<el-collapse-item title="效率 Efficiency" name="3">
						    <div>简化流程：设计简洁直观的操作流程；</div>
						    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
						    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
						</el-collapse-item>
						<el-collapse-item title="可控 Controllability" name="4">
						    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
						    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
						</el-collapse-item> -->
					</el-collapse>
				</div>
		    </el-main>
		    <el-aside width="200px">
		    	<div class="navbar-inner" :class="{fixd:isActive}">
                        <ul class="nav">
                           <!--  <li class="active"><a href="#ee001">交通</a></li>
                            <li><a href="#ee002">安全</a></li>
                            <li><a href="#ee003">缴费</a></li>
                            <li><a href="#ee004">活动</a></li>
                            <li><a href="#ee005">预约</a></li>
                            <li><a href="#ee006">发票</a></li> -->
                            <li v-for="(item,index) in navLists" 
								:key="item.name"
								:class="{'active':active==index}"
                            	@click="jump(index)"
                            ><a>{{item.name}}</a>
                            	</li>
                        </ul>
                        
                    </div>
		    </el-aside>
		</el-container>
		<r-footer></r-footer>
	</div>
</template>
<script>
import rHeader from '../../components/Header.vue'
import rFooter from '../../components/Footer.vue'
export default {
  name: '',
  data () {
    return {
	    "headShow":true,
	    "isActive":false,
	    "activeNames": [],
	    "active":'',
	    "title":'',
	    "key":'',
	    "navLists":[]		           
    	}
	},
  	components:{
			rHeader,
			rFooter
		},
	created(){   
		this.navList();
		this.sideScroll();
		this.$nextTick(function () {
     		window.addEventListener('scroll', this.onScroll)
    		})
		},
	methods:{
		handleChange(){

		},
		navList(){
			this.$http.get( "static/data/question.json").then((res)=>{
				this.navLists = res.data;
				console.log(this.navLists)
			})
		},
		jump (index) {
			this.sideScroll();
			//console.log("123")
		    // 用 class="d_jump" 添加锚点
		    this.active = index 
	        let jump = document.querySelectorAll('.d_jump')
	        let total = jump[index].offsetTop
	        let distance = document.documentElement.scrollTop || document.body.scrollTop
	        // 平滑滚动，时长500ms，每10ms一跳，共50跳
	        let step = total / 50
	        if (total > distance) {
	          smoothDown()
	        } else {
	          let newTotal = distance - total
	          step = newTotal / 50
	          smoothUp()
	        }
	        function smoothDown () {
	          if (distance < total) {
	            distance += step
	　　　　　　　document.body.scrollTop = distance
	            document.documentElement.scrollTop = distance
	            setTimeout(smoothDown, 10)
	          } else {
	            document.body.scrollTop = total
	            document.documentElement.scrollTop = total
	          }
	        }
	        function smoothUp () {
	          if (distance > total) {
	            distance -= step
	　　　　　　　document.body.scrollTop = distance
	            document.documentElement.scrollTop = distance
	            setTimeout(smoothUp, 10)
	          } else {
	            document.body.scrollTop = total
	            document.documentElement.scrollTop = total
	          }
	       }
	    
		},
		sideScroll(){
			var scrollTo=0;   
			var aSide = $("navbar-inner");  
			    if(document.documentElement&&document.documentElement.scrollTop){     
			        scrollTo=document.documentElement.scrollTop;     
			    }else if(document.body){ 
			        scrollTo=document.body.scrollTop;  
			        //console.log(scrollTo)			        
			    } 
			    if( scrollTo >=240){			        	 
		        	//console.log("123")
		        	this.isActive = true;
		        } 
		        else{
		        	this.isActive = false;
		        } 
			    //return scrollTo;     			
		},
	    onScroll () {
	    	
	      		this.sideScroll();
		}
	}
}
</script>

<style lang="scss" rel="stylesheet/scss" > 
@import '../../assets/style/variable.scss';
.question{
	padding:10px;
	.box{
		overflow: hidden;
		margin-bottom: 20px;
		h3{
			margin-bottom: 14px;
		}
	}
	.el-aside{
		overflow: hidden;
		.fixd{
			position: fixed;
			top: 0;
		}
	}
	.el-collapse, .el-collapse-item__header, .el-collapse-item__wrap{
		border:none;    
    }
    .el-collapse-item__header{
   		height: 34px;
	    line-height: 34px;
	    .el-collapse-item__arrow{
	    	float: none;
	    }
   }
   .el-collapse-item__content{
		padding-left: 20px;
   }
   .navbar-inner{
   		ul{
   			li{
				line-height: 50px;
				margin-bottom: 20px;
   				a{
					line-height: 30px;
				    display: inline-block;
				    width: 100%;
				    font-size: 20px;
				    padding:5px 30px;
				    cursor: pointer;
   				}
   				a:hover{
   					border-left: 2px solid $gcolor;

   					padding-left: 28px;
   				}
   			}
   			li.active{
   					a{
   						border-left: 2px solid $gcolor;
   						padding-left: 28px;

   					}
   				}
   		}

   }
}

</style>