<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Host
      </h2>
      <b-btn href="#/host-list">HOST LIST</b-btn>
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
  name: 'AddHost',
  data () {
    return {
      ref: firebase.firestore().collection('host'),
      host: {}
    }
  },
  methods: {
    //on submit, pushes data of new host to HostList in database
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.host).then((docRef) => {
        this.host.companyName = ''
        this.host.address = ''
        this.host.email = ''
        this.host.phoneNumber = ''
        router.push({
          name: 'HostList'
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
