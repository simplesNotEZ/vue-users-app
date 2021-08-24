<template>
  <div>
    <div class="cloud-container">
      <img
        alt="small cloud logo"
        class="cloud-img"
        src="../assets/cloud.jpeg"
      />
    </div>
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
          <button class="button" type="submit">
            {{ addingUser ? "Save" : "Save Edit" }}
          </button>
          <input
            class="button"
            type="button"
            @click="cancelClick"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserForm",
  data() {
    return {
      newUser: {
        name: "",
        id: null,
        username: "",
        email: "",
      },
    };
  },
  created() {
    if (this.editingUser) {
      this.newUser = this.userToEdit;
    }
  },
  computed: {
    ...mapState(["userToEdit", "formStatus"]),
    addingUser() {
      return this.formStatus === "addingUser";
    },
    editingUser() {
      return this.formStatus === "editingUser";
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // for the POST/creating a new user
      if (this.addingUser) {
        this.newUser.id = Math.random() * 10;
        this.$store.dispatch("addUser", this.newUser).then(() => {
          this.$router.push({ path: "/" });
        });

        // for the PUT/editing an existing user
      } else {
        const userToEditInfo = {
          userId: this.newUser.id,
          newUser: this.newUser,
        };
        this.$store.dispatch("editUser", userToEditInfo).then(() => {
          this.$router.push({ path: "/" });
        });
      }
    },

    cancelClick() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-container {
  padding-top: 5%;
  display: flex;
  justify-content: center;
}
.cloud-container {
  display: flex;
  justify-content: flex-start;
}
.cloud-img {
  height: 100px;
}
form {
  background-color: #ffffb3;
  border: 2px solid black;
  border-radius: 1rem;
  padding: 0.75rem 2rem 2rem;
}
.form-div {
  margin: 0.5rem 1rem;
}
h3 {
  font-size: 1.25rem;
}
label {
  margin-right: 0.25rem;
  width: 6rem;
  display: inline-block;
  text-align: left;
}
input {
  width: 15rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.btns-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  margin: 0.25rem 1rem;
  width: 90%;
  cursor: pointer;
  text-transform: uppercase;
}
.button:hover {
  background-color: #bfbfbf;
}
</style>
