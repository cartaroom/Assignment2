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
  //returns the data from the database
  data () {
    return {
      fields: {

        //Room owner name column
        owner: { label: 'Room Owner', sortable: true, 'class': 'text-left' },

        //room number column
        roomNumber: { label: 'Room Number', sortable: true, 'class': 'text-left' },


        //action column
        actions: { label: 'Action', 'class': 'text-center' }
      },

      //array of room data that will populate
      rooms: [],
      errors: [],

      //gets the room table from the firebase database
      ref: firebase.firestore().collection('room'),
    }
  },

  //pulls the data from the firebase database
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

  //function that shows the room finding the the specific id
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
