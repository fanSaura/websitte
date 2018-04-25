<template>
	<div class="common-imglist">
		<p class="head">您的位置 : <router-link to="">首页</router-link> > <span>兴趣培训</span> > <span class="active">网上展厅</span></p>
		<div class="main-box">
			<router-link to="/training/onlineExhibition/exhibitionMain" class="item-content" v-for="item in dataList">
				<div class="item-img">
					<img :src="item.img" alt="" class="hover-scale">
				</div>  
					<a href="" class="img-date ">
						<p>{{item.title}}</p>
					    <p>View More></p>
					</a>
			</router-link>					
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
			this.$http.get('static/data/onlineExh.json').then(res=>{
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
		 margin-bottom:-200px;
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
			 &:last-child{
				top:-236px;	
			 }
		 }
		 
	 }
 }
</style>
