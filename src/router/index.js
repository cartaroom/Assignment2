import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import HostList from '@/components/HostList'
import ShowHost from '@/components/ShowHost'
import AddHost from '@/components/AddHost'
import EditHost from '@/components/EditHost'

import PatronList from '@/components/PatronList'
import ShowPatron from '@/components/ShowPatron'
import AddPatron from '@/components/AddPatron'
import EditPatron from '@/components/EditPatron'

import RoomList from '@/components/RoomList'
import ShowRoom from '@/components/ShowRoom'
import AddRoom from '@/components/AddRoom'
import EditRoom from '@/components/EditRoom'

export default new VueRouter({
    routes: [
     {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/host-list',
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
      },
      {
        path: '/patron-list',
        name: 'PatronList',
        component: PatronList
      },
      {
        path: '/show-patron/:id',
        name: 'ShowPatron',
        component: ShowPatron
      },
      {
        path: '/add-patron',
        name: 'AddPatron',
        component: AddPatron
      },
      {
        path: '/edit-patron/:id',
        name: 'EditPatron',
        component: EditPatron
      },
      {
        path: '/room-list',
        name: 'RoomList',
        component: RoomList
      },
      {
        path: '/show-room/:id',
        name: 'ShowRoom',
        component: ShowRoom
      },
      {
        path: '/add-room',
        name: 'AddRoom',
        component: AddRoom
      },
      {
        path: '/edit-room/:id',
        name: 'EditRoom',
        component: EditRoom
      }
    ]
  })