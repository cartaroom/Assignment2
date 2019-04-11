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
        <template slot="lead">
          Name: {{patron.name}}<br>
          Address: {{patron.address}}<br>
          Email: {{patron.email}}<br>
          Phone: {{patron.phoneNumber}}<br>
        </template>
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
  methods: {
    //finds patron by id in database
    editpatron (id) {
      router.push({
        name: 'EditPatron',
        params: { id: id }
      })
    },
    //deletes patron by id in database
    deletepatron (id) {
      firebase.firestore().collection('patron').doc(id).delete().then(() => {
        router.push({
          name: 'PatronList'
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
