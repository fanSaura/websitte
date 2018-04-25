<template>
	<div>
	    <r-header :text='text' :headShow='headShow' :buttonShow='buttonShow'></r-header>
		<div class="login">
			<img src="static/images/login-banner.png">
			<div class="login-form">
				<h2>登录LOGIN</h2>
				<el-form ref="form" :model="form" :rules="rules">
				    <el-form-item prop="name">
				        <el-input v-model="form.name" placeholder="用户名" prefix-icon="el-icon-date"></el-input>
				    </el-form-item>
				    <el-form-item class="pwd" prop="psd">
				        <el-input v-model="form.psd" placeholder="密码" prefix-icon="el-icon-date" type="password"></el-input>
				    </el-form-item>
				    <el-form-item>
				     	<el-checkbox v-model="check">自动登录</el-checkbox>
				     	<router-link to="/ForgetPwd" class="pwdButton">忘记密码？</router-link>
				    </el-form-item>
				    <el-form-item>
					    <el-button type="primary" @click="submitForm('form')">
					    	登 录
					    </el-button>			    
					  </el-form-item>
				</el-form>
				<p>没有账户怎么办，<router-link to="/Register" class="registerButton">点击注册</router-link></p>	
			</div>
		</div>
	    <r-footer></r-footer>
	</div>
</template>
<script>
import rHeader from '../../components/Header.vue'
import rFooter from '../../components/Footer.vue'
export default {
		  data () {
		    return {
			    headShow:false,
		        buttonShow:false,
		        text:"欢迎登录",
		        check:'',
		        form:{
		        	name:'',
		        	psd:"",
		        	
		        },
		        rules: {
		          name: [
		            { required: true, message: '请输入用户名', trigger: 'blur' }
		          ],
		          psd: [
		            { required: true, message: '请输入密码', trigger: 'blur' }
		          ]
		        }
		      
		    }
		},
	  	components:{
				rHeader,
				rFooter
			},
		methods:{
			// submitForm(){
				
			// this.$router.push({path:'/'})		
			// 	sessionStorage.setItem('key',this.form.name)
			// },
			submitForm(formName) {
	        	this.$refs[formName].validate((valid) => {
		          if (valid) {
					alert('submit!');
					window.sessionStorage.setItem("key",this.form.name)
		            this.$router.push({path:'/index'})
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
.login{
	position: relative;
	.login-form{
		position: absolute;
		width: 330px;
		right: 18%;
	    top: 15%;
	    padding: 20px;
	    background-color: #fff;
	    h2{
	    	text-align: center;
	    	margin-bottom: 20px;
	    }
	    p{
	    	text-align: center;
	    	font-size: 12px;
	    }
	    .registerButton{
	    	color: $gcolor;
	    }
	    .el-form-item{
	    	margin-bottom: 18px;
	    	.pwdButton{
	    		float: right;
	    		color: $gcolor;
	    	}
	    	button{
	    		width: 100%;
	    		background:$gcolor;
 				border-color: $gcolor;
 				font-size: 22px;
				padding:8px;
	    	}
	    } 
	    .pwd{
	    	margin-bottom: 4px;
	    }
	}
}
.footer{
	background-color: #fff;
	color:#999;
	margin-top:20px;
	border-top:none;
}
</style>