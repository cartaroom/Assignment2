<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Host 
      </h2>
      <b-btn><router-link :to="{ name: 'ShowHost', params: { id: key } }">SHOW HOST</router-link></b-btn>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Company Name">
            <b-form-input id="name" v-model.trim="host.companyName"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Address">
              <b-form-input id="address" v-model.trim="host.address"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Email">
            <b-form-input id="email" v-model.trim="host.email"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Phone Number">
            <b-form-input id="phone" v-model.trim="host.phoneNumber"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'EditHost',
  data () {
    return {
      key: this.$route.params.id,
      host: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('host').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.host = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('host').doc(this.$route.params.id);
      updateRef.set(this.host).then((docRef) => {
        this.key = ''
        this.host.companyName = ''
        this.host.address = ''
        this.host.email = ''
        this.host.phoneNumber = ''
        router.push({ name: 'ShowHost', params: { id: this.$route.params.id }})
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