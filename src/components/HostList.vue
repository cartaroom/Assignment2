<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Host List   
      </h2>
      <b-btn href="#/add-host">ADD HOST</b-btn>
      <b-table striped hover :items="hosts" :fields="fields">
          <div v-for="host in hosts">{{host.companyName }}</div>
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'HostList',
  data () {
    return {
      fields: {
        companyName: { label: 'Comapny', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      hosts: [],
      errors: [],
      ref: firebase.firestore().collection('host'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.hosts = [];
      querySnapshot.forEach((doc) => {
        this.hosts.push({
          key: doc.id,
          title: doc.data().title
        });
      });
    });
  },
  methods: {
    details (host) {
      router.push({ name: 'ShowHost', params: { id: host.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>