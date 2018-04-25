<template>
	<div class="step-box">
        <ol :default_active="active" id="ol">
            <li><i></i>验证身份</li>
            <li><i></i>设置新密码</li>
            <li><i></i>完成</li>
        </ol>
    </div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		mounted(){
			this.dd();
		},
		 methods:{
		 	dd(){
		 		var i;
		 		var ULa = document.getElementById("ol");
　　			var lia = ULa.getElementsByTagName("li");
		 		console.log(lia.length)
		 		for(i=0;i<lia.length;i++){
		 			 // i = this.active;
		 			// console.log(i)
		 			if(i == this.active){
		 			console.log(lia[i].setAttribute('class','active'))
		 			}
		 		}			 		
		 	}
		 	
		 },
		 props:['active']
	}
</script>
<style lang="scss" rel="stylesheet/scss"> 
@import '../assets/style/variable.scss';
.step-box {
    overflow: hidden;
    padding: 20px 0 5px;
    margin-bottom: 50px;
    ol{
    	height: 32px;
    	padding-top: 15px;
    	li{
    		float: left;
		    display: inline;
		    font: 12px/20px Arial;
		    border-top: #d7d7d7 6px solid;
		    width: 33.3%;
		    text-align: center;
		    color: #999;
		    padding-top: 10px;
		    position: relative;
		    i{
		    	position: absolute;
			    top: -10px;
			    right: 48%;
			    height: 14px;
			    width: 14px;
			    background-color: #d7d7d7;
			    border-radius: 22px
		    }

    	}
    }
}
.step-box li.active {
    border-top-color: #ff9813;
    color: #ff9813;
    i{
    	background-color: #ff9813;
    }
}
</style>