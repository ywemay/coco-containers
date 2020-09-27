import request from '@/utils/request'
import apitpl from '@/utils/apitpl'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

var usersAPI = apitpl.init({ url: '/users'});

console.log(usersAPI)

export { usersAPI };
