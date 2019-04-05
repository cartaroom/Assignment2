import VueRouter from 'vue-router'
import BoardList from '@/components/HostList'
import ShowBoard from '@/components/ShowHost'
import AddBoard from '@/components/AddHost'
import EditBoard from '@/components/EditHost'

export default new VueRouter({
    routes: [
      {
        path: '/',
        name: 'HostList',
        component: HostList
      },
      {
        path: '/show-host/:id',
        name: 'ShowHost',
        component: ShowHost
      },
      {
        path: '/add-host',
        name: 'AddHost',
        component: AddHost
      },
      {
        path: '/edit-host/:id',
        name: 'EditHost',
        component: EditHost
      }
    ]
  })