import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('../components/Main')

const register = () => import('../page/register/Register')
const login = () => import('../page/login/login')
const index = () =>import('../page/index.vue')

const studentHome = () => import('../page/personalHome/StudentHome')

const funApply = ()=> import('../page/onlineApply/interestApply/FunApply.vue')
const classInfo = () => import('../page/onlineApply/interestApply/ClassInfo.vue')
const Apply =() => import('../page/onlineApply/interestApply/Apply.vue')

const MyActivity = () => import('../page/myActivities/MyActivity.vue')

const CommonQuestion = () => import('../page/question/CommonQuestion.vue')

const userData = () => import('../page/personalCenter/userData.vue')
const ChangePwd = () => import('../page/personalCenter/ChangePwd.vue')
const Financial = () => import('../page/personalCenter/Financial.vue')
const CardLoss = () => import('../page/personalCenter/CardLoss.vue')


const applyPay = () => import('../page/reporteActivity/ApplyPay.vue')
const ApplyActivity = () => import('../page/reporteActivity/ApplyActivity.vue')
const paySuccess =() => import('../page/reporteActivity/PaySuccess.vue')

const appoint = () => import('../page/myActivities/Appoint.vue')



const forgetPwd = () => import('../page/forgetPwd/ForgetPwd')
const confirmPwd = () => import('../page/forgetPwd/ConfirmPwd')


const center = () => import('../page/centerMain/Center')
const centerHome = () => import('../page/centerMain/CenterHome')
const centerInstallation = () => import('../page/centerMain/centerInstallation')
const installationMain = () => import('../page/centerMain/installationMain')
const centerMap = () => import('../page/centerMain/CenterMap')
const centerHonor = () => import('../page/centerMain/CenterHonor')
const honorMain = () => import('../page/centerMain/honorMain')

const subordinateBody = () => import('../page/centerMain/SubordinateBody')
const legalNotice = () => import('../page/centerMain/LegalNotice')
const question = () => import('../page/question/Question')

const training = () => import('../page/trainingMain/Training')
const trainingNotice =() => import('../page/trainingMain/TrainingNotice')
const communityStyle = () => import('../page/trainingMain/CommunityStyle')
const onlineExhibition = () => import('../page/trainingMain/OnlineExhibition')
const teachers = () => import('../page/trainingMain/Teachers')
const projectIntro = () => import('../page/trainingMain/ProjectIntro')
const introMain = () => import('../page/trainingMain/introMain')


const researchTeach = () => import('../page/trainingMain/ResearchTeach')
const researchMain = () => import('../page/trainingMain/researchMain')

const noticeMain = () => import('../page/trainingMain/NoticeMain')

const news = () => import('../page/centerNews/News')
const careGuide = () => import('../page/centerNews/CareGuide')
const guideMain = () => import('../page/centerNews/guideMain')
const exchange = () => import('../page/centerNews/Exchange')
const exchangeMain = () => import('../page/centerNews/ExchangeMain')
const mediaReport = () => import('../page/centerNews/MediaReport')
const mediaMain = () => import('../page/centerNews/MediaMain')
const notice = () => import('../page/centerNews/Notice')
const noticeContent = () => import('../page/centerNews/noticeContent')
const report = () => import('../page/centerNews/Report')
const reportMain = () => import('../page/centerNews/reportMain')
const vedioClip = () => import('../page/centerNews/VedioClip')
const noticedetail = () => import('../page/centerNews/Noticedetail')

const activity = () => import('../page/activityMain/activity')
const klbActivity = () => import('../page/activityMain/klbActivity')
const sportActivity = () => import('../page/activityMain/sportActivity')
const klbMain = () => import('../page/activityMain/klbMain')

const theme = () => import('../page/themeMain/theme')
const traditionalActivities = () => import('../page/themeMain/traditionalActivities')
const educationNotice = () => import('../page/themeMain/educationNotice')

const brand = () => import('../page/brandMain/brand')
const comicGame = () => import('../page/brandMain/comicGame')
const cocialPractice = () => import('../page/brandMain/cocialPractice')
const artsFestival = () => import('../page/brandMain/artsFestival')
const artGrade = () => import('../page/brandMain/artGrade')
const creativeSpeech = () => import('../page/brandMain/creativeSpeech')
const auditorium = () => import('../page/brandMain/auditorium')
const internationalExchange = () => import('../page/brandMain/internationalExchange')
const cultureIndustry = () => import('../page/brandMain/cultureIndustry')

const team = () => import('../page/teamMain/team')
const volunteerGrace = () => import('../page/teamMain/volunteerGrace')
const volunteerService = () => import('../page/teamMain/volunteerService')
const registrationService = () => import('../page/teamMain/registrationService')
const jobs = () => import('../page/teamMain/jobs')
const jobMain = () => import('../page/teamMain/jobMain')


Vue.use(Router)

export default new Router({
  routes: [
     {  
      path:'/',
      component:index
    },
    {
      redirect:'/',
      path:'/index'
    },
    {
      path: '/main',
      component: Main,
      redirect:'/main/studentHome',
      children:[
          {
            path:'',
            component:studentHome
          },
      		{
      			path:'studentHome',
      			component:studentHome
      		},
          {
            path:'Apply',
            component:Apply
          },
          {
            path:'ApplyActivity',
            component:ApplyActivity
          },
          {
            path:'MyActivity',
            component:MyActivity
          },
          {
            path:'CommonQuestion',
            component:CommonQuestion
          },
          {
            path:'userData',
            component:userData
          },
          {
            path:'ChangePwd',
            component:ChangePwd
          },
          {
            path:'Financial',
            component:Financial
          },
          {
            path:'CardLoss',
            component:CardLoss
          },

]},
    { path:'/funApply',
      component:funApply
    },
    {
      path:'/classInfo',
      component:classInfo
    },
    {
      path:'/applyPay',
      component:applyPay
    },
    {
      path:'/appoint',
      component:appoint
    },
    {
      path:'/paySuccess',
 		component:paySuccess 
    },
    {
      path:'/news',
      component:news,
      children:[
            {
            path:'careGuide',
            component:careGuide
          },
          {
            path:'exchange',
            component:exchange
          },
           {
            path:'mediaReport',
            component:mediaReport
          },
           {
            path:'notice',
            component:notice,
          },
           {
            path:'report',
            component:report
          },
          {
            path:'vedioClip',
            component:vedioClip
          }
      ]
    },
    {
        path:'/news/careGuide/guideMain',
        component:guideMain
    },
    {
        path:'/news/mediaReport/mediaMain',
        component:mediaMain
    },
    {
        path:'/news/exchange/exchangeMain',
        component:exchangeMain
    },
    {
        path:'/news/report/reportMain',
        component:reportMain
    },
    {
        path:'/news/notice/noticeContent',
        component:noticeContent
    },
    {
      path:'/training',
      component:training,
      children:[
           {
            path:'trainingNotice',
            component:trainingNotice
          },
          {
            path:'communityStyle',
            component:communityStyle
          },
          {
            path:'onlineExhibition',
            component:onlineExhibition
          },
          {
            path:'projectIntro',
            component:projectIntro
          },
          {
            path:'researchTeach',
            component:researchTeach
          },
          {
            path:'teachers',
            component:teachers
          },
      ]
    },
    {
        path:'/training/projectIntro/introMain',
        component:introMain
    },
    {
        path:'/training/researchTeach/researchMain',
        component:researchMain
    },
    {
      path:'/center',
      component:center,
      children:[
          {
            path:'centerHome',
            component:centerHome
          },
          
          {
            path:'centerInstallation',
            component:centerInstallation
          },
          {
            path:'centerMap',
            component:centerMap
          },
          {
            path:'centerHonor',
            component:centerHonor
          },
          {
            path:'subordinateBody',
            component:subordinateBody
          },
          {
            path:'legalNotice',
            component:legalNotice
          },
      ]
    },
    {
        path:'/center/centerInstallation/installationMain',
        component:installationMain
    },
    {
        path:'/center/centerHonor/honorMain',
        component:honorMain
    },
    {
        path:'/training/trainingNotice/noticeMain',
        component:noticeMain
    },
    {
        path:'/news/notice/noticedetail',
        component:noticedetail
     },
     {
      path:'/activity',
      component:activity,
      children:[
            {
            path:'klbActivity',
            component:klbActivity
          },
          {
            path:'sportActivity',
            component:sportActivity
          }          
      ]
    },
     {
        path:'/activity/klbActivity/klbMain',
        component:klbMain
     },
    {
      path:'/theme',
      component:theme,
      children:[
            {
            path:'traditionalActivities',
            component:traditionalActivities
          },
          {
            path:'educationNotice',
            component:educationNotice
          }          
      ]
    },
    {
      path:'/brand',
      component:brand,
      children:[
            {
            path:'comicGame',
            component:comicGame
          },
          {
            path:'cocialPractice',
            component:cocialPractice
          },
          {
            path:'artsFestival',
            component:artsFestival
          },
          {
            path:'artGrade',
            component:artGrade
          },
          {
            path:'creativeSpeech',
            component:creativeSpeech
          },
          {
            path:'auditorium',
            component:auditorium
          },
          {
            path:'internationalExchange',
            component:internationalExchange
          },
          {
            path:'cultureIndustry',
            component:cultureIndustry
          }                  
      ]
    },
    {
      path:'/team',
      component:team,
      children:[
            {
            path:'volunteerGrace',
            component:volunteerGrace
          },
          {
            path:'volunteerService',
            component:volunteerService
          },
           {
            path:'registrationService',
            component:registrationService
          },
          {
            path:'jobs',
            component:jobs
          }               
      ]
    },
    {
        path: '/team/jobs/jobMain',
        component: jobMain
    },
    {
      	path: '/register',
      	name: 'register',
        component: register
    },
    {
      	path: '/forgetPwd',
      	name: 'forgetPwd',
        component: forgetPwd
    },
    {
      	path: '/confirmPwd',
      	name: 'confirmPwd',
        component: confirmPwd
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/question',
        name: 'question',
		component: question   
   }  ]
})
