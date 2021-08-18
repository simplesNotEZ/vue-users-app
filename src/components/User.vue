<template>
  <div class="user-container">
    <div class="names-container">
      <p>{{user.name}}</p>
      <p>{{user.id}}</p>
    </div>
    <p>Username: {{user.username}}</p>
    <p>Email: {{user.email}}</p>
    <div class="btns-container">
      <button @click="editUser">Edit</button>
      <button v-on:click="deleteUser">Delete</button>
    </div>
  </div>
</template>

<script>
import api from "@/api.js";
import { eventBus } from "@/main.js";
import { mapMutations } from 'vuex';

export default {
  name: "User",
  props: {
    user: Object,
  },
  methods: {
    ...mapMutations(['updateUserToEdit', 'updateFormStatus']),
    editUser() {
      console.log("editUser exectued and this.user: ", this.user);
      this.updateUserToEdit(this.user);
      this.updateFormStatus("editingUser");
      this.$router.push({ path: "/form" });
    },
    deleteUser() {
      console.log("in deleteUser this.user.id is: ", this.user.id);
      api.delete(this.user.id)
        .then((res) => {
          console.log("deleteUser executed", res.data);
          eventBus.$emit('userDeleted');
        })
        .catch((error) => {
          console.log("DELETE error: ", error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.btns-container {
  display: flex;
  justify-content: center;
}
button {
  border: 2px solid black;
  border-radius: .5rem;
  padding: .5rem;
  font-weight: bold;
  margin: .25rem;
  width: 5rem;
  cursor: pointer;
}
button:hover {
  background-color: #bfbfbf;
}
</style>
