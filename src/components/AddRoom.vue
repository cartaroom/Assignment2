<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Room
      </h2>
      <b-btn href="#/room-list">ROOM LIST</b-btn>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Room Owner">
            <b-form-input id="roomOwner" v-model.trim="room.roomOwner"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Room Number">
              <b-form-input id="roomNumber" v-model.trim="room.roomNumber"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Capacity">
            <b-form-input id="capacity" v-model.trim="room.capacity"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
           <b-form-textarea id="description"
                         v-model="room.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{room.description}}</b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'AddRoom',
  data () {
    return {
      ref: firebase.firestore().collection('room'),
      room: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.room).then((docRef) => {
        this.room.roomOwner = ''
        this.room.roomNumber = ''
        this.room.capacity = ''
        this.room.description = ''
        router.push({
          name: 'RoomList'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>