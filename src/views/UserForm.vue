<template>
  <div class="form-container">
    <form @submit="onSubmit">
      <div class="form-div">
        <h3 v-if="addingUser">Create a New User</h3>
        <h3 v-if="editingUser">Editing {{ userToEdit.name }}</h3>
      </div>
      <div class="form-div names">
        <label for="first-name">First Name:</label>
        <input id="first-name" type="text" v-model="newUser.name" />
      </div>
      <div class="form-div">
        <label for="last-name">Last Name:</label>
        <input id="last-name" type="test" v-model="newUser.id" />
      </div>
      <div class="form-div username">
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="newUser.username" />
      </div>
      <div class="form-div email">
        <label for="email">Email:</label>
        <input id="email" type="text" v-model="newUser.email" />
      </div>
      <div class="btns-container">
        <button class="button" type="submit">{{ addingUser ? "Save" : "Save Edit" }}</button>
        <input  class="button" type="button" @click="cancelClick" value="Cancel">
      </div>
    </form>
  </div>
</template>

<script>
import api from '@/api.js';
import { mapState } from "vuex";

export default {
  name: "UserForm",
  data() {
    return {
      newUser: {
        name: '',
        id: null,
        username: '',
        email: ''
      }
    }
  },
  created() {
    console.log("UserForm created");
    if (this.editingUser) {
      this.newUser = this.userToEdit;
    }
  },
  computed: {
    ...mapState(['userToEdit', 'formStatus']),
    addingUser() {
      return this.formStatus === 'addingUser';
    },
    editingUser() {
      return this.formStatus === 'editingUser';
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // for the POST/creating a new user
      if (this.addingUser) {
        this.newUser.id = Math.random() * 10;
        console.log("Submitted to Add a user!", this.newUser);
        api.post(this.newUser)
          .then((res) => {
            console.log("post success!", res.data);
            this.$router.push({ path: '/' });
          })
          .catch((error) => {
            console.log("POST error: ", error);
          });
      // for the PUT/editing an existing user
      } else {
        console.log("Submitted Edits! this.newUser.id: ", this.newUser.id);
        api.put(this.newUser.id, this.newUser)
          .then((res) => {
            console.log("PUT success!", res.data);
            this.$router.push({ path: '/' });
          })
          .catch((error) => {
            console.log("PUT error: ", error);
          });
      }
    },
    
    cancelClick() {
      console.log("cancelClick ran!");
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}
form {
  background-color:  #ffffb3;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 0 0 1rem 0;
}
.form-div {
  margin: .5rem 1rem;
}
label {
  margin-right: .25rem;
  width: 6rem;
  display: inline-block;
  text-align: left;
}
input {
  width: 15rem;
}
.btns-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  border: 2px solid black;
  border-radius: .5rem;
  padding: .5rem;
  font-weight: bold;
  margin: .25rem 1rem;
  width: 90%;
  cursor: pointer;
}
.button:hover {
  background-color: #bfbfbf;
}
</style>