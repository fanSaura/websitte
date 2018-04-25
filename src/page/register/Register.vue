<template>
	<div>
	  <r-header :text='text' :headShow='headShow' :buttonShow='buttonShow'></r-header>
	  <div class=" container register">
	  	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm" :inline-message="true" >
		    <el-form-item label="姓名:" prop="username">
			    <el-input v-model="ruleForm.username"></el-input>
		    </el-form-item>
		    <!-- <el-form-item label="学员身份:" prop="identity">
			    <el-select v-model="ruleForm.identity" placeholder="">
			      <el-option label="非大陆籍" value="no"></el-option>
			      <el-option label="大陆籍" value="yes"></el-option>
			    </el-select>
			    <span class="prompt">大陆籍或非大陆籍</span>
		    </el-form-item> -->
			<!-- <el-form-item label="国别或地区:" prop="region">
			    <el-input v-model="ruleForm.region"></el-input>   
		    </el-form-item> -->
		    <el-form-item label="学员身份证号:" prop="idCard">
			    <el-input v-model="ruleForm.idCard"></el-input>   
		    </el-form-item>
		    <!-- <el-form-item label="联系邮箱:" prop="email">
			    <el-input v-model="ruleForm.email"></el-input>   
		    </el-form-item>
		    <el-form-item label="寄送地址:" prop="address">
			    <el-input v-model="ruleForm.address"></el-input>   
		    </el-form-item> -->
		    <el-form-item label="家长姓名:" prop="parent">
			    <el-input v-model="ruleForm.parent"></el-input>   
		    </el-form-item>
		    <el-form-item label="手机号码:" prop="phone">
			    <el-input v-model="ruleForm.phone"></el-input>   
		    </el-form-item>
		    <el-form-item label="手机验证码:" prop="jiaoYan">
			    <el-input v-model="ruleForm.jiaoYan">
			    	<el-button slot="append" @click="sendAgain()" class="again-send">获取验证码</el-button>
		    	</el-input>
		    </el-form-item>
		    <el-form-item label="在读学校:" prop="school">
			    <el-input v-model="ruleForm.school"></el-input>   
		    </el-form-item>
		    <el-form-item label="在读年级:" prop="grade">
			    <el-select v-model="ruleForm.grade" placeholder="">
			      	<el-option 
				      	v-for="item in gradeOption"
					    :key="item.value"
					    :label="item.label"
					    :value="item.value">  	
			    	</el-option>
			    </el-select>  
		    </el-form-item>
		    <el-form-item label="出生日期:" prop="birthDate">
			    <el-input v-model="ruleForm.birthDate"></el-input>   
		    </el-form-item>
		    <el-form-item label="性别:" prop="sex">
			    <el-radio-group v-model="ruleForm.sex">
			      <el-radio label="男"></el-radio>
			      <el-radio label="女"></el-radio>
			    </el-radio-group>
			</el-form-item>
			<el-form-item label="上传证件照:" prop="photo">
			    <input v-model="ruleForm.photo" class="upInput el-input__inner" type="text" id="viewfile"></input>
            <label for="unload" onclick="document.getElementById('upload').style.display='block';" class="file1">浏览...</label> 


            <input type="file" @change="uplaod()" class="file" id="upload" /> 
		    </el-form-item>
		    <el-form-item label="备注:" prop="remark">
			    <el-input type="textarea" v-model="ruleForm.remark" placeholder="最多输入50字" style="width:50%"></el-input>
		    </el-form-item>
		    <el-form-item  label="" prop="agree">
			    <el-checkbox v-model="ruleForm.agree">我同意用户协议</el-checkbox>
		    </el-form-item>
		    <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
			</el-form-item>
		</el-form>
	  </div>
	  <r-footer></r-footer>
	</div>
</template>
<script>
import rHeader from '../../components/Header.vue'
import rFooter from '../../components/Footer.vue'
import {send} from '../../libs/utils.js'
export default {
  name: '',
  data () {
  	var validateidCard = (rule, value, callback) =>{
    	if(!value){
    		 callback(new Error("请输入身份证号码！"));
    		 console.log(this.ruleForm.idCard)
    	}
    	this.IdentityCodeValid($.trim(this.ruleForm.idCard))
    	if(this.pass){
					this.$http.get('static/data/register.json').then(res=>{

					console.log(res.data)
					  if(res.data.idCard == this.ruleForm.idCard){
							this.checkCard=false;
							// verifyForm.tips('');
							callback(new Error("此身份证已被注册"));
						}else{
							//console.log("123")
							this.checkCard=true;
							this.ruleForm.sex=this.ruleForm.idCard.substr(-2,1)%2?"男":"女";
							console.log(this.ruleForm.sex)
							this.ruleForm.birthDate=this.ruleForm.idCard.substr(6,4)+'/'+this.ruleForm.idCard.substr(10,2)+'/'+this.ruleForm.idCard.substr(12,2)
               callback();
						}
												
					}).catch(err=>{
							this.checkCard=false;
							console.log(err)
					})
				}else{
					callback(new Error("请输入正确的身份证号码！"));
					this.checkCard=false
				}
    };
    var validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (this.ruleForm.jiaoYan !== this.code) {
            callback(new Error('验证码输入不正确'));
          }
          callback();
        }
      };
      
    return {
       headShow:false,
       buttonShow:true,
       text:"会员注册",
       pass:'',
       code:'',
       b:60,
       gradeOption:[],
       checkCard:false,
       
        ruleForm: {
          username:'',
          // identity:'',
          // region:'',
          idCard:'',
          email:'',
          address:'',
          parent:'',
          phone:'',
          jiaoYan:'',
          school:'',
          grade:'',
          birthDate:'',
          sex:'',        
          remark:'',
          agree:'',
          photo:'',
          
      },
      	rules: {
          username: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 1, max: 20, message: '请输入正确名称', trigger: 'blur' },
            { pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文',trigger: 'blur'}
          ],
          // identity: [
          //   { required: true, message: '请输入学员身份', trigger: 'blur' }
          // ],
          // region: [
          //   { required: true, message: '请输入国别或地区', trigger: 'blur' }
          // ],
          idCard: [
            {required:true,trigger: 'blur',validator: validateidCard }
          ],
          //  email: [
          //   { type: 'email', required: true, message: '请输入正确邮箱', trigger: 'blur' }
          // ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message: '请输入正确的手机号',trigger: 'blur' }
          ],
          jiaoYan: [
            { required: true,  trigger: 'blur',validator: validateCode }
          ],
          grade: [
            { required: true, message: '请输入在读年级', trigger: 'blur' }
          ],
          photo: [
            { required: true,  message: '请上传证件照！', trigger: 'blur' }
          ],
          remark:[
          	{min: 1, max: 50, message: '最多输入50字', trigger: 'blur' }
          ],
          agree:[
          	{required: true, message: '是否同意用户协议', trigger: 'change'}
          ]
        }
    }  
  },
  	components:{
			rHeader,
			rFooter
		},
	created(){
		this.$http.get("static/data/grade.json").then(res=>{				 
				  	console.log(res.data)
				  	this.gradeOption = res.data
				  }												
			).catch(err=>{							
					console.log(err)
			})
		},
	methods: {
    uplaod(){
      this.ruleForm.photo=$('#upload').val()
      console.log($('#upload').val()) 
    },
		sendAgain(){ 
			alert("123")
		 	var reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
		 	if(this.ruleForm.phone !=='' && reg.test(this.ruleForm.phone)){
		 		
		 		this.$http.get("static/data/register.json").then(res=>{
					  if(this.ruleForm.phone == res.data.phone){
					  	this.code=res.data.code;
					  	console.log(this.code)
					  }												
				}).catch(err=>{							
						console.log(err)
				})
				var $againSend=$(".again-send");
				send($againSend,this.b)
		 	}else{
		 		console.log('请输入手机号码');
		 	}			 	
		},
    
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
            
             //console.log(img)
          		// if (valid && this.ruleForm.photo) {
            //    console.log(this.ruleForm.photo)
            //    console.log("123")
               
          		// } else 
            //       if(!this.ruleForm.photo){
            //     console.log("请上传证件照！")
            		


          		// }
              if(valid){
                 console.log(JSON.stringify(this.ruleForm));
                 this.$http.get("static/data/register.json").then(res=>{
                    if(res.msg.code=="1"){
                     
                    }                       
                }).catch(err=>{             
                    console.log(err)
                })
              }else{
                console.log('error submit!!')

                //console.log(img)
                return false;
              }
        	});
      	},
        
      	IdentityCodeValid(code) { 
           var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};

         	this.pass=true;
           if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                /*tip = "身份证号格式错误";*/
                this.pass = false;
            } else if(!city[code.substr(0,2)]){
               /* tip = "地址编码错误";*/
                this.pass = false;
            }else{
                //18位身份证需要验证最后一位校验位
                if(code.length == 18){
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        /*tip = "校验位错误";*/
                        this.pass =false;
                    }
                }
            }
			         
		}
			 
    }
  
}
</script>


<style lang="scss" rel="stylesheet/scss" scoped> 
@import '../../assets/style/variable.scss';
.footer{
	position: inherit;
}
.el-form{
	padding:20px;
}
.el-input,.el-select{
	width:290px;
}
.el-button{
	 background:$gcolor;
	 border-color: $gcolor;
}
.el-form-item__content .el-textarea__inner{
	/*.prompt{
	padding-left: 20px;
	font-size: 12px;
	color:#afafaf;
	} */
	

}
.register .el-form-item__label{
	font-size: 16px !important;
	color: #333 !important;
}

.upInput{
	float: left;
    width: 230px;
}
.upInput input{
	border-radius: 0 4px 4px 0;

}

.file{
	position: absolute;
    top: 0;
    display: none;
    filter: alpha(opacity=0);
    opacity: 0;
    width: 60px;
    left: 228px;
    height: 40px;
    cursor: pointer;
    cursor: pointer;
}
.file1{
	width: 60px;
	text-align: center;
    display: block;
    float: left;
    background: #F5F7FA;
    color: #333;
    z-index: 1;
    margin-left: -3px;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #ddd;
    height: 38px;
    line-height: 38px;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}



</style>
