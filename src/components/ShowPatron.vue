<!--HTML code that shows individual patron info row by row-->
<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Patron
      </h2>
      <b-btn href="#/patron-list">PATRON LIST</b-btn>
      <b-jumbotron>
        <template slot="header">
          {{patron.name}}
        </template>
        <!--The list contains information for Name, Address, Email and Phone-->
        <template slot="lead">
          Name: {{patron.name}}<br>
          Address: {{patron.address}}<br>
          Email: {{patron.email}}<br>
          Phone: {{patron.phoneNumber}}<br>
        </template>
        <!--There are two buttons, Edit and Delete, for user to edit/delete patron info-->
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editpatron(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletepatron(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>


<script>
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowPatron',
  data () {
    return {
      key: '',
      patron: {}
    }
  },

  //this goes to firebase with table named "patron"
  //if exists id exists, it will update the patron in firebase with the current id. 
  created () {
    const ref = firebase.firestore().collection('patron').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.patron = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },

  //method that edits patrons info based on id in firebasee
  //page will be refreshed after edit
  methods: {
    editpatron (id) {
      router.push({
        name: 'EditPatron',
        params: { id: id }
      })
    },

    //method that deletes patrons based on id in firebase
    //After patron is deleted, page will be redirected back to PatronList page
    deletepatron (id) {
      firebase.firestore().collection('patron').doc(id).delete().then(() => {
        router.push({
          name: 'PatronList'
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