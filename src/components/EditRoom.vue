<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Room
      </h2>
      <b-btn>
	  //Links to ShowRoom
	  <router-link className="link"  :to="{ name: 'ShowRoom', params: { id: key } }">SHOW ROOM</router-link></b-btn>
      <b-jumbotron>
	  //Form to submit Edit to the Room
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
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

// This is the links the routing and firebase files
import firebase from '../Firebase'
import router from '../router'

    export default {
        name: 'EditRoom',
        data() {
            return {
                key: this.$route.params.id,
                room: {}
            }
  },
  created () {
    const ref = firebase.firestore().collection('room').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.room = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
  //Events that happen onSubmit
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('room').doc(this.$route.params.id);
      updateRef.set(this.room).then((docRef) => {
        this.key = ''
        this.room.roomOwner = ''
        this.room.roomNumber = ''
        this.room.capacity = ''
        this.room.description = ''
        router.push({ name: 'ShowRoom', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>
//This is CSS for the grey background
<style>
    .jumbotron {
        padding: 2rem;
    }

    .link {
        color: #FFF;
    }
</style>
