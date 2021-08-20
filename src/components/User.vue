<template>
  <div class="user-container">
    <div class="names-container">
      <p>{{user.name}}</p>
      <p>{{user.id}}</p>
    </div>
    <p><span class="identifier">Username: </span> {{user.username}}</p>
    <p><span class="identifier">Email: </span>{{user.email}}</p>
    <div class="btns-container">
      <button @click="editUser">Edit</button>
      <button v-on:click="deleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "User",
  props: {
    user: Object,
  },
  methods: {
    ...mapMutations(['updateUserToEdit', 'updateFormStatus']),
    editUser() {
      this.updateUserToEdit(this.user);
      this.updateFormStatus("editingUser");
      this.$router.push({ path: "/form" });
    },
    deleteUser() {
      this.$store.dispatch('deleteUser', this.user.id);
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
.user-container {
  border: 2px solid black;
  border-radius: 1rem;
  padding: .5rem 0;
  margin: .25rem 0;
  width: 40rem;
  background-color: #e7f7fd;
}
.user-container:hover {
  background-color: #d0effb;
}
.names-container {
  display: flex;
  justify-content: center;
}
.identifier {
  font-weight: 700;
}
.btns-container {
  display: flex;
  justify-content: center;
  margin-top: .25rem;
}
button {
  border: 2px solid black;
  border-radius: .5rem;
  padding: .5rem;
  font-weight: bold;
  margin: .25rem;
  width: 5rem;
  cursor: pointer;
  text-transform: uppercase;
}
button:hover {
  background-color: #bfbfbf;
}
</style>
