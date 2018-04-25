<template>
	<div class="common-imglist community">
		<p class="head">您的位置 : <router-link to="">首页</router-link> > <span>兴趣培训</span> > <span class="active">网上展厅</span></p>
		<div class="main-box">
			<div class="item-content" v-for="item in dataList">
				<div class="item-img">
					<img :src="item.img" alt="" class="hover-scale">
				</div>  
					<a href="" class="img-date ">
						<p>{{item.title}}</p>
					    <p>View More></p>
					</a>
			</div>					
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				dataList:[]
			}
		},
		created(){
			this.$http.get('static/data/community.json').then(res=>{
				this.dataList=res.data
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>
<style lang="scss">
.common-imglist{
	 .main-box{
		 margin-right:-10px;
		 overflow: hidden;
		 .item-content{
			 float: left;
			 margin-right:10px;
			 margin-bottom:10px;
			 padding:0;
			 position: relative;
			 &:hover .img-date{
				 background:#cf261f;
			 }
			.img-date{
					height:42px;
			}
			.item-img{
				overflow: hidden;
			}
		 }
		 
	 }
 }
</style>