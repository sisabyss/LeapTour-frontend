import TikTok from '../pages/home/index.vue'
import Home from '../pages/Home.vue'
// import Home from '../pages/home/index.vue'
import Test from '../pages/test/Test.vue'
import Test4 from '../pages/test/Test4.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/test', component: Test,
      meta: { requiresCustomStyle: true }},
  { path: '/test4', component: Test4,

    meta: { requiresCustomStyle: true }
  },

  { path: '/publish', component: () => import('@/pages/home/Publish.vue') },
  { path: '/tiktok', component: TikTok,    meta: { requiresCustomStyle: true } },

  { path: '/home', component: Home },
  { path: '/home/music', component: () => import('@/pages/home/Music.vue'),     meta: { requiresCustomStyle: true } },
  {
    path: '/home/music-rank-list',
    component: () => import('@/pages/home/MusicRankList.vue'), meta: { requiresCustomStyle: true }
  },
  { path: '/home/live', component: () => import('@/pages/home/LivePage.vue') ,     meta: { requiresCustomStyle: true }},


  { path: '/me', component: () => import('@/pages/me/Me.vue'), meta: { requiresCustomStyle: true } },
  {
    path: '/me/edit-userinfo',
meta: { requiresCustomStyle: true },
    component: () => import('@/pages/me/userinfo/EditUserInfo.vue')
  },
  {
    path: '/me/edit-userinfo-item',
meta: { requiresCustomStyle: true },
    component: () => import('@/pages/me/userinfo/EditUserInfoItem.vue')
  },
  {
    path: '/me/country-choose',meta: { requiresCustomStyle: true },
    component: () => import('@/pages/login/countryChoose.vue')
  },
  { path: '/me/my-card', component: () => import('@/pages/me/MyCard.vue'), meta: { requiresCustomStyle: true }},
  {
    path: '/me/add-school',
    component: () => import('@/pages/me/userinfo/AddSchool.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/choose-school',
    component: () => import('@/pages/me/userinfo/ChooseSchool.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/declare-school',
    component: () => import('@/pages/me/userinfo/DeclareSchool.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/choose-department',
    component: () => import('@/pages/me/userinfo/ChooseDepartment.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/display-type',
    component: () => import('@/pages/me/userinfo/DisplayType.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/choose-location',
    component: () => import('@/pages/me/userinfo/ChooseLocation.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/choose-province',
    component: () => import('@/pages/me/userinfo/ChooseProvince.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/choose-city',
    component: () => import('@/pages/me/userinfo/ChooseCity.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/right-menu/look-history',
    component: () => import('@/pages/me/rightMenu/LookHistory.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/right-menu/minor-protection/index',
    component: () => import('@/pages/me/rightMenu/MinorProtection/Index.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/right-menu/minor-protection/detail-setting',
    component: () => import('@/pages/me/rightMenu/MinorProtection/DetailSetting.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/right-menu/minor-protection/trigger-time',
    component: () => import('@/pages/me/rightMenu/MinorProtection/TriggerTime.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/right-menu/setting',
    component: () => import('@/pages/me/rightMenu/Setting.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/collect/music-collect',
    component: () => import('@/pages/me/collect/MusicCollect.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/collect/video-collect',
    component: () => import('@/pages/me/collect/VideoCollect.vue'),meta: { requiresCustomStyle: true }
  },
  { path: '/me/my-music', component: () => import('@/pages/me/MyMusic.vue'), meta: { requiresCustomStyle: true } },

  // {path: '/message', component: Message},
  { path: '/message', component: () => import('@/pages/message/Message.vue'),meta: { requiresCustomStyle: true } },
  {
    path: '/message/all',
    component: () => import('@/pages/message/AllMessage.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/more-search',
    component: () => import('@/pages/message/MoreSearch.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/joined-group-chat',
    component: () => import('@/pages/message/JoinedGroupChat.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/fans',
    component: () => import('@/pages/message/Fans.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/visitors',
    component: () => import('@/pages/message/Visitors.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/douyin-helper',
    component: () => import('@/pages/message/notice/DouyinHelper.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/system-notice',
    component: () => import('@/pages/message/notice/SystemNotice.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/task-notice',
    component: () => import('@/pages/message/notice/TaskNotice.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/live-notice',
    component: () => import('@/pages/message/notice/LiveNotice.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/money-notice',
    component: () => import('@/pages/message/notice/MoneyNotice.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/notice-setting',
    component: () => import('@/pages/message/notice/NoticeSetting.vue'),meta: { requiresCustomStyle: true }
  },

  {
    path: '/message/chat',
    component: () => import('@/pages/message/chat/Chat.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/chat/detail',
    component: () => import('@/pages/message/chat/ChatDetail.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/chat/red-packet-detail',
    component: () => import('@/pages/message/RedPacketDetail.vue'),meta: { requiresCustomStyle: true }
  },

  {
    path: '/people/find-acquaintance',
    component: () => import('@/pages/people/FindAcquaintance.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/people/follow-and-fans',
    component: () => import('@/pages/people/FollowAndFans.vue'),meta: { requiresCustomStyle: true }
  },

  // {path: '/service-protocol', component: ServiceProtocol},
  {
    path: '/address-list',
    component: () => import('@/pages/people/AddressList.vue'),meta: { requiresCustomStyle: true }
  },
  { path: '/scan', component: () => import('@/pages/people/Scan.vue'),meta: { requiresCustomStyle: true }},
  {
    path: '/face-to-face',
    component: () => import('@/pages/people/FaceToFace.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/set-remark',
    component: () => import('@/pages/message/SetRemark.vue'),meta: { requiresCustomStyle: true }
  },

  // {path: '/login', component: Login},
  { path: '/login', component: () => import('@/pages/login/Login.vue') ,meta: { requiresCustomStyle: true }},
  {
    path: '/login/other',
    component: () => import('@/pages/login/OtherLogin.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/login/password',
    component: () => import('@/pages/login/PasswordLogin.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/login/verification-code',
    component: () => import('@/pages/login/VerificationCode.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/login/retrieve-password',
    component: () => import('@/pages/login/RetrievePassword.vue'),meta: { requiresCustomStyle: true }
  },
  { path: '/login/help', component: () => import('@/pages/login/Help.vue'),meta: { requiresCustomStyle: true }},

  //前面的要跳到这些页面，所以放后面
  {
    path: '/me/request-update',
    component: () => import('@/pages/me/RequestUpdate.vue'),
meta: { requiresCustomStyle: true }
  },
  {
    path: '/me/my-request-update',
    component: () => import('@/pages/me/MyRequestUpdate.vue'),
meta: { requiresCustomStyle: true }
  },
  { path: '/home/report', component: () => import('@/pages/home/Report.vue'),meta: { requiresCustomStyle: true }  },
  {
    path: '/home/submit-report',
    component: () => import('@/pages/home/SubmitReport.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/message/share-to-friend',
    component: () => import('@/pages/message/Share2Friend.vue'),meta: { requiresCustomStyle: true }
  },
  {
    path: '/video-detail',
    name: 'video-detail',
    component: () => import('@/pages/other/VideoDetail.vue'),
meta: { requiresCustomStyle: true }
  },
  // {path: '/album-detail', component: () => import('@/pages/other/AlbumDetail.vue')},

  {
    path: '/home/search',
    component: () => import('@/pages/home/SearchPage.vue'),meta: { requiresCustomStyle: true }
  },

  {
    path: '/foods',
    component: () => import('@/pages/RestaurantList.vue')
  },


  {
    path: '/hotels',
    component: () => import('@/pages/HotelList.vue')
  },

  {
    path: '/sights',
    component: () => import('@/pages/AttractionList.vue')
  }
]

export default routes
