<template>
  <div class="users-panel-container">
    <div class="addUserBtn-container">
      <button class="addUserBtn" @click="addUser">Add New User</button>
    </div>
    <h2>Current Users</h2>
    <User v-for="user in users" :user="user" :key="user.id" />
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "UsersPanel",
  components: {
    User
  },
  props: {
    users: Array
  },
  methods: {
    addUser() {
      this.$store.commit('updateFormStatus', 'addingUser');
      this.$router.push({ path: "/form" }); 
    }
  }
}
</script>

<style scoped>
.users-panel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addUserBtn {
  border: 2px solid black;
  border-radius: .5rem;
  padding: .5rem;
  font-weight: bold;
  margin-top: .25rem;
  width: 16rem;
  cursor: pointer;
  text-transform: uppercase;
}
.addUserBtn:hover {
  background-color: #bfbfbf;
}
</style>
