<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Patron 
      </h2>
      <b-btn>
	  //Links to the ShowPatron
	  <router-link className="link"  :to="{ name: 'ShowPatron', params: { id: key } }">SHOW PATRON</router-link></b-btn>
      <b-jumbotron>
	  //Form to submit Edits to Patrons
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
          <b-button type="submit" variant="primary">Update</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

//Links the firebase and router files
import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'EditPatron',
  data () {
    return {
      key: this.$route.params.id,
      patron: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('patron').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.patron = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  //Methods used on the event trigger(onSubmit)
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('patron').doc(this.$route.params.id);
      updateRef.set(this.patron).then((docRef) => {
        this.key = ''
        this.patron.name = ''
        this.patron.address = ''
        this.patron.email = ''
        this.patron.phoneNumber = ''
        router.push({ name: 'ShowPatron', params: { id: this.$route.params.id }})
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