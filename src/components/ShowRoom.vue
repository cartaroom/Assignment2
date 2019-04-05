<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Host
      </h2>
      <b-btn href="#/">HOST LIST</b-btn>
      <b-jumbotron>
        <template slot="header">
          {{host.companyName}}
        </template>
        <template slot="lead">
          Company: {{host.companyName}}<br>
          Address: {{host.address}}<br>
          Email: {{host.email}}<br>
          Phone: {{host.phoneNumber}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="edithost(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletehost(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowHost',
  data () {
    return {
      key: '',
      host: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('host').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.host = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    edithost (id) {
      router.push({
        name: 'EditHost',
        params: { id: id }
      })
    },
    deletehost (id) {
      firebase.firestore().collection('host').doc(id).delete().then(() => {
        router.push({
          name: 'HostList'
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