<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Patron
      </h2>
      <b-btn href="#/patron-list">PATRON LIST</b-btn>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Name">
            <b-form-input id="name" v-model.trim="patron.name"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Address">
              <b-form-input id="address" v-model.trim="patron.address"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Email">
            <b-form-input id="email" v-model.trim="patron.email"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Phone Number">
            <b-form-input id="phone" v-model.trim="patron.phoneNumber"></b-form-input>
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
  name: 'AddPatron',
  data () {
    return {
      ref: firebase.firestore().collection('patron'),
      patron: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.patron).then((docRef) => {
        this.patron.name = ''
        this.patron.address = ''
        this.patron.email = ''
        this.patron.phoneNumber = ''
        router.push({
          name: 'PatronList'
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