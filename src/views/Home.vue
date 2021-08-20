<template>
  <div class="home">
    <img alt="cloud logo" class="cloud-img" src="../assets/cloud.jpeg" />
    <UsersPanel :users="users" />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersPanel from "@/components/UsersPanel.vue";

import { mapState } from 'vuex';

export default {
  name: "Home",
  components: {
    UsersPanel
  },
  created() {
    if (!this.users) {
      this.$store.dispatch('getUsers');
    }
    // TODO: Potentially delete 
    // api.getById(5)
    //   .then(res => {
    //     console.log("%c res.data from axios.getById: ", "color: fuchsia;", res.data);
    //     this.users =  [res.data];
    //   });
  },
  computed: {
    ...mapState(['users'])
  }
};

</script>

<style scoped>
.cloud-img {
  margin-bottom: 2rem;
  height: 200px;
}
</style>
