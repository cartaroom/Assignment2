<!--HTML code that shows individual room info row by row-->
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
         <!--The list contains information for Room Owner, Room Number, Capacity, Description-->
          Room Owner: {{room.roomOwner}}<br>
          Room Number: {{room.roomNumber}}<br>
          Capacity: {{room.capacity}}<br>
          Description: {{room.description}}<br>
        </template>
        <!--There are two buttons, Edit and Delete, for user to edit/delete room info-->
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
        data() {
            return {
                key: '',
                room: {}
            }
  },

  //this goes to firebase with table named "room"
  //if exists id exists, it will update the room in firebase with the current id.
  created () {
    const ref = firebase.firestore().collection('room').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.room = doc.data();
  //if id does not exists, it will say "No such document!"
      } else {
        alert("No such document!");
      }
    });
  },

  //method that edits room info based on id in firebasee
  //page will be refreshed after edit
  methods: {
    editroom (id) {
      router.push({
        name: 'EditRoom',
        params: { id: id }
      })
    },

    //method that deletes rooms based on id in firebase
    //After room is deleted, page will be redirected back to RoomList page
    deleteroom (id) {
      firebase.firestore().collection('room').doc(id).delete().then(() => {
        router.push({
          name: 'RoomList'
        })
    //if id not found, it will give an error "Error removing document"
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<!--CSS for button and grey background -->
<style>
    .jumbotron {
        padding: 2rem;
    }

    .edit-btn {
        margin-right: 20px;
        width: 70px;
    }
</style>
