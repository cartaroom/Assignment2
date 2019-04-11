<!--HTML code that shows individual host detail row by row-->
<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Host
      </h2>
      <b-btn href="#/host-list">HOST LIST</b-btn>
      <b-jumbotron>
        <template slot="header">
          {{host.companyName}}
        </template>
         <!--The list contains information for Company, Address, Email, Phone-->
        <template slot="lead">
          Company: {{host.companyName}}<br>
          Address: {{host.address}}<br>
          Email: {{host.email}}<br>
          Phone: {{host.phoneNumber}}<br>
        <!--There are two buttons, Edit and Delete, for user to edit/delete host info-->  
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
        data() {
            return {
                key: '',
                host: {}
            }

  },
  
  //this goes to firebase with table named "host"
  //if exists id exists, it will update the host info in firebase with the current id. 
  created () {
    const ref = firebase.firestore().collection('host').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.host = doc.data();
      } else {
         //if id does not exists, it will say "No such document!"
        alert("No such document!");
      }
    });
  },

  //method that edits host info based on id in firebasee
  //page will be refreshed after edit
  methods: {
    edithost (id) {
      router.push({
        name: 'EditHost',
        params: { id: id }
      })
    },

    //method that deletes host info based on id in firebase
    //After host is deleted, page will be redirected back to HostList page
    deletehost (id) {
      firebase.firestore().collection('host').doc(id).delete().then(() => {
        router.push({
          name: 'HostList'
        })
      }).catch((error) => {
        //if id not found, it will give an error "Error removing document"
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
