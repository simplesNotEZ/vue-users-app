<template>
  <div class="home">
    <img alt="cloud logo" class="cloudImg" src="../assets/cloud.jpeg" height="200" />
    <UsersPanel :users="users" @userDeleted="refreshUsers" />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersPanel from "@/components/UsersPanel.vue";

import api from "@/api.js";
import { eventBus } from "@/main.js";

export default {
  name: "Home",
  components: {
    UsersPanel
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    console.log("%c Users in data: ", "color: green;", this.users);
    api.getAll()
      .then((res) => {
        console.log("%c res.data from axios.get: ", "color: fuchsia;", res.data);
        this.users = res.data;
        console.log("%c this.users: ", "color: green;", this.users);
      })
      .catch((error) => {
        console.log("getAll error: ", error);
      });
    // TODO: Potentially delete 
    // api.getById(5)
    //   .then(res => {
    //     console.log("%c res.data from axios.getById: ", "color: fuchsia;", res.data);
    //     this.users =  [res.data];
    //   });
    eventBus.$on('userDeleted', () => {
      console.log("eventBus userDeleted");
      this.refreshUsers();
    });
  },
  methods: {
    refreshUsers() {
      api.getAll()
      .then((res) => {
        console.log("%c refreshUsers: ", "color: brown;", res.data);
        this.users = res.data;
      })
      .catch((error) => {
        console.log("getAll error: ", error);
      });
    }
  },

};

</script>

<style scoped>
.cloudImg {
  margin-bottom: 2rem;
}
</style>
