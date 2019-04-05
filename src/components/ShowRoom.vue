<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Room
      </h2>
      <b-btn href="#/room-list">ROOM LIST</b-btn>
      <b-jumbotron>
        <template slot="header">
          {{room.roomOwner}}<br>
          Room Number: {{room.roomNumber}}
        </template>
        <template slot="lead">
          Room Owner: {{room.roomOwner}}<br>
          Room Number: {{room.roomNumber}}<br>
          Capacity: {{room.capacity}}<br>
          Description: {{room.description}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editroom(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteroom(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowRoom',
  data () {
    return {
      key: '',
      room: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('room').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.room = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editroom (id) {
      router.push({
        name: 'EditRoom',
        params: { id: id }
      })
    },
    deleteroom (id) {
      firebase.firestore().collection('room').doc(id).delete().then(() => {
        router.push({
          name: 'RoomList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>