import VueRouter from 'vue-router'
import HostList from '@/components/HostList'
import ShowHost from '@/components/ShowHost'
import AddHost from '@/components/AddHost'
import EditHost from '@/components/EditHost'

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