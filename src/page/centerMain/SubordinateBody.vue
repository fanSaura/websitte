<template>
	<div class="subordinate">
		<div class="main-title">下属机构</div>
		<div class="main-line fl">
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
			<span class="line"></span>
		</div>
		<div class="main-content fl">
              <div class="subordinate-info" >
				  <div v-for="item in data" class="info-item"> 
					    <img :src="item.image" class="fl" alt="">
						<div class="fl subordinate-main">
							<h3>{{item.title}}</h3>
							<p class="detail">
								{{item.content}}
							</p>
						</div>
				  </div>
					
				</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
                data:[]
			}
		},
		created(){
			this.$http.get('static/data/subordinate.json').then(res=>{
				this.data=res.data
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>
<style lang="scss">
@import '../../assets/style/variable.scss';
    .subordinate{
		padding-top:60px;
		.main-title{
			padding:95px 0;
			text-align:center;
			line-height: 24px;
			width:30px;
			background:#dedede;
			float: left;
			position: absolute;
			top:44%;
		
		}
		.main-content{
			padding:0;
			.subordinate-info{
					position: relative;
					top:-50px;
					.info-item{
						
						position: relative;
						overflow: hidden;
						margin-bottom:20px;
						&:nth-child(odd){
							right:100px;
						}
					}
					.subordinate-main{
						h3{
							line-height:30px;
							font-weight: 400;
							color:#3d3d3d;
							font-size:16px;
							padding-left:10px;
						}
						padding-top:10px;
						font-size:12px;
						color:#666;
						background:#f1f1f1;
						width:300px;
						height:129px;
						line-height:20px;
						.detail{
							padding:0 10px;
							 position:relative;
							  line-height:18px;
                              max-height:54px;
							 overflow:hidden;
							 &:after{
								 content:"...";
								font-weight:bold;
								position:absolute;	
								bottom:2px;
								right:12px;
								color:rgba(0,0,0,0.4);
								padding-left:45px;
								background: -webkit-linear-gradient(left, transparent, #F5F5F5 80%);

								background: -o-linear-gradient(right, transparent, #F5F5F5 80%);

								background: -moz-linear-gradient(right, transparent, #F5F5F5 80%);

								background: linear-gradient(to right, transparent,#F5F5F5 80%);

							 }
						}
					}
				}
			}
			.main-line{
				border-left:2px solid #dedede;;
				border-bottom:2px solid #dedede;
				margin-left:50px;
                 .line{
					display: block;
					border-top:2px solid #dedede;
					width:250px;
					margin-bottom:150px;
					&:nth-child(6){
						position: relative;
						left:-20px;
					}
				}
			}
			
		
	}
</style>
