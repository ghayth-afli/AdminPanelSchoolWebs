<template>
  <div>
    <Header />
    <sidebar />
  </div>
  <router-view />
</template>
<script>
// @ is an alias to /src
import Sidebar from "@/components/global/Sidebar.vue";
import Header from "@/components/global/Header.vue";
export default {
  name: "app",
  components: {
    Sidebar,
    Header,
  },
};
</script>
