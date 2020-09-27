import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  redirect: '/users/list',
  name: 'Users',
  meta: {
    title: 'Users',
    icon: 'el-icon-user',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      name: 'UsersList',
      component: () => import('@/views/users/list'),
      meta: { title: 'List', icon: 'user', roles: ['admin'] }
    },
    {
      path: 'create',
      name: 'AddUserRecord',
      component: () => import('@/views/users/create.vue'),
      meta: { title: 'Add User', icon: 'form' }
    },
    {
      path: 'edit/:uid',
      name: 'EditUserRecord',
      component: () => import('@/views/users/edit.vue'),
      meta: { title: 'Edit User', icon: 'form' },
      hidden: true
    }

  ]
}

export default usersRouter
