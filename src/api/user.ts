import { request } from '@/utils/request'
import axios from 'axios'

export function userinfo(params?: any, data?: any) {
  return request({ url: '/user/userinfo', method: 'get', params, data })
}

export function userVideoList(params?: any, data?: any) {
  return request({ url: '/user/video_list', method: 'get', params, data })
}

export function panel(params?: any, data?: any) {
  return request({ url: '/user/panel', method: 'get', params, data })
}

export function friends(params?: any, data?: any) {
  return request({ url: '/user/friends', method: 'get', params, data })
}

export function userCollect(params?: any, data?: any) {
  return request({ url: '/user/collect', method: 'get', params, data })
}

export function recommendedPost(params?: any, data?: any) {
  return request({ url: '/post/recommended', method: 'get', params, data })
}

export function recommendedShop(params?: any, data?: any) {
  return request({ url: '/shop/recommended', method: 'get', params, data })
}
export const fetchEmail = async () => {
  try {
    const response = await axios.get('http://192.168.1.145:8080/check/tokenInfo')
    const message = response.data
    if (message.code === 200) {
      const loginId = message.data.loginId
      console.log('调用fetchEmail成功', loginId)
      return loginId
    } else {
      console.error('调用fetchEmail失败:', message.msg)
      return null
    }
  } catch (error) {
    console.error('调用fetchEmail成功', error)
    return null
  }
}

export const fetchAvatar = async (email) => {
  try {
    const response = await axios.get('http://192.168.1.145:8080/user/getUserInfo', {
      params: { email: email }
    })
    const avatar = response.data.data.avatar
    console.log('调用fetchAvatar成功:', avatar)
    return avatar
  } catch (error) {
    console.error('调用fetchAvatar失败', error)
    return null
  }
}
