<template>
	<div>
		<el-collapse v-model="activeName" v-for="(subList,index) in navLists" :key='index' accordion>
		  	<el-collapse-item :title="subList.title">
			    <div class="imgMain" v-for="item in subList.content">
			    	<router-link to="/training/teachers/teacherMain">
				    	<img :src="item.img">
				    	<p class="img-date">
				    		<span class="name">{{item.name}}</span>
				    		<span>{{item.post}}</span>
				    	</p>
				    </router-link>
			    </div>
		  </el-collapse-item>		 
		</el-collapse>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				"navLists":[],
				"activeName": [],
			}
		},
		created(){   
		this.navList();
		},
		methods:{
			navList(){
				this.$http.get( "static/data/teachers.json").then((res)=>{
					this.navLists = res.data.list;
					console.log(this.navLists)
			})
		}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped> 
@import '../../assets/style/variable.scss';
  .imgMain{
  	float: left;
  	position: relative;
  	margin: 4px 9px;
  	img{
  		width: 160px;
  	}
  	.img-date{
  		text-align: center;
  		padding:0 10px;
  		overflow: hidden;
    	text-overflow: ellipsis;
        white-space: nowrap;
  		.name{
  			display: block;
  			
  		}
  	}
  	&:hover .img-date{
		 background:#cf261f;
	 }

  }
  .imgMain:last-child{
  	margin-bottom: 20px;
  }
  .el-collapse-item__header{
	  	background: url(../../../static/images/nav-bar2.png);
		width: 304px;
	    height: 32px;
	    line-height: 32px;
	    color: #fff;
	   
  }
  .el-collapse-item__wrap{
  		width:100%;
  }
  	
  .el-collapse, .el-collapse-item__header,.el-collapse-item__wrap{
  	 	border: none;
        background-color: #e7e7e7;

  }
  .el-collapse{
  	position: relative;
  }
  .bgimg{
	  	background: url(../../../static/images/nav-bar2.png);
	  	width: 304px;
  }

  
	

</style>