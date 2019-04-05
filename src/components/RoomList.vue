<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Room List   
      </h2>
      <b-btn href="#/add-room">ADD ROOM</b-btn>
      <b-table striped hover :items="rooms" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'RoomList',
  data () {
    return {
      fields: {
        owner: { label: 'Room Owner', sortable: true, 'class': 'text-left' },
        roomNumber: { label: 'Room Number', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      rooms: [],
      errors: [],
      ref: firebase.firestore().collection('room'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.rooms = [];
      querySnapshot.forEach((doc) => {
        this.rooms.push({
          key: doc.id,
          owner: doc.data().roomOwner,
          roomNumber: doc.data().roomNumber
        });
      });
    });
  },
  methods: {
    details (room) {
      router.push({ name: 'ShowRoom', params: { id: room.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>