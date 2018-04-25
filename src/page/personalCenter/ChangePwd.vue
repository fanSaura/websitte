<template>
	<div class="ChangePwd">
		<div class="title">
			<span class="left">修改密码</span>
		</div>
		<el-form ref="form" :model="form" :rules="rules" label-width="100px">
			<el-form-item label="旧密码:" prop="oldPwd">
			    <el-input type="password" v-model="form.oldPwd"></el-input>			    
			</el-form-item>
			<el-form-item label="新密码:" prop="newPwd">
			    <el-input type="password" v-model="form.newPwd"></el-input>
<!-- 			    <span class="prompt">5~20个字符，字母开头，包括数字、下划线、字母区分大小写。</span>
 -->			</el-form-item>
			<el-form-item label="确认密码:" prop="checkPwd">
			    <el-input type="password" v-model="form.checkPwd"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('form')">
			    	确认修改
			    </el-button>			    
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
  name: '',
  data () {
  	var validatePass = (rule, value, callback) => {            
        if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.form.newPwd) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
  	};
  	var validateOld = (rule, value, callback) => { 
  		  if (value === '') {
            callback(new Error('请输入旧密码'));
          } else if (value !== this.olded) {
            callback(new Error('旧密码输入错误!'));
          } else {
            callback();
          }
  	}

    return {
    	olded:'123456hy',
        form:{
        	oldPwd:'',
        	newPwd:'',
        	checkPwd:''
        },
        rules:{
		        oldPwd: [
		            { required: true, validator: validateOld, trigger: 'blur' }		            
		        ],
		        newPwd: [
		            { required: true, message: '请输入密码', trigger: 'blur' },
		            {pattern: /^[a-zA-Z0-9]{6,12}$/,message: '请输入正确的密码',trigger: 'blur' }
		        ],
		        checkPwd: [
		            {required: true, validator: validatePass, trigger: 'blur' }
		           
				]
		    }
    	}
	},
	watch:{
		'$route' (to,form){
			console.log(to)
		}
	},
	mounted(){
		console.log(333);
		console.log($(document.body).height());
		console.log($(window).height())
		$('.footer').removeClass('posi');
		       var flag=($(document.body).height()<$(window).height());
		       $('.footer')[0].className='footer '+ (flag?'posi':'')
		},
	methods:{
		submitForm(formName){
        this.$refs[formName].validate((valid) => {
          	if (valid) {
            	alert('submit!');           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
		}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped> 
@import '../../assets/style/variable.scss';
.title{
	border-bottom: 1px solid #ddd;
   	padding:6px;
   	margin-bottom: 20px;
   	overflow: hidden;
   	.left{
   		float:left;
   		font-size: 16px;
   		color:#333;
   	}
   }
.el-button{
	 background:$gcolor;
	 border-color: $gcolor;
}
.el-input{
	width: 30%;
}
.el-form-item{
	padding-left:20px;
	.prompt{
		font-size: 12px;
		padding-left: 20px;
		color:#afafaf;
	}
}
</style>