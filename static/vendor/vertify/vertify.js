(function(){
	function vertify(){};
	// 验证是否为特殊字符
	vertify.prototype.checkEsp=function(inputValue,msg){
		if(/[`~!@#\s\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]'']/im.test(inputValue)|| inputValue==""){
			this.tips(msg);
			return false
			
		}else{
			return true
		}
	};
	//验证 是否为空
	vertify.prototype.checkEmpty=function(inputValue,msg){
		if(!inputValue==''){
			return true
		}else{
			this.tips(msg);
			return false
		}
	}
	vertify.prototype.checkIdentity=function(inputValue,msg){
		if(/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(inputValue)){
			return true;
		}else{
			this.tips(msg);
			return false;
		}
	}

	vertify.prototype.checkIphone=function(inputValue, msg){
		if(/^1[34578]\d{9}$/.test(inputValue)){
			return true
		}else{
			this.tips(msg);
			return false
		}
	}
	// 验证姓名
	vertify.prototype.checkName=function(inputValue,msg){
		if(/^[\u4e00-\u9fa5]{2,4}$/.test(inputValue)){
			return true
		}else{
			this.tips(msg)
		}
	}

	vertify.prototype.checkPwd=function(inputValue,msg){
		if(/^(?![^A-Za-z]+$)(?![^0-9]+$)[\x21-x7e]{6,12}$/.test(inputValue)){
			return true
		}else{
			this.tips(msg);
			return false;
		}
	}
	vertify.prototype.checkPwd1=function(inputValue,inputValue1,msg){
		if(inputValue==inputValue1){
			return true
		}else{
			this.tips(msg);
			return false;
		}
	}
	var times=null;
	vertify.prototype.tips=function(msg){
		clearTimeout(times);
		var times=null;
		if($(".tip-box")[0]){
			$(".tip-box").remove()	
		};

		var $msg=$('<div class="tip-box"><p class="tips"></p></div>');
		$('body').append($msg);
		$('.tip-box').css({
			position:'absolute',
			top:0,
			left:0,
			bottom:0,
			right:0,
			background:'transparent',
			'z-index':100
		})
		$(".tips").text(msg).css({
			"position":"fixed",
			"background-color":"rgba(50,50,50,0.5)",
			"bottom":"45%",
			"left":"50%",
			"color":"#fff",
			"font-size":"0.37rem",
			"z-index":10000,
			"padding":"0.18rem 0.2rem",
			"border-radius":"5px",
			"text-align":"center",
			"transform":"translate(-50%,-50%)"
		})
			

			// $msg.animate({"bottom":"3.2rem"},500)
		times=setTimeout(function(){
			$msg.remove()
		},1500)
	}


 var verifyForm = new vertify;
	 
	 window["verifyForm"] = verifyForm;

})()