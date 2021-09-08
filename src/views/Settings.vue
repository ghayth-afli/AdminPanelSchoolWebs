<template>
  <div>
    <Header />
    <SidebarSettings/>
    <Settings/>
  </div>
  <router-view />
</template>
<script>
// @ is an alias to /src
import SidebarSettings from "@/components/global/SidebarSettings.vue";
import Header from "@/components/global/Header.vue";
import Settings from "../components/local/Settings.vue";
export default {
  name: "SettingsV",
  components: {
    SidebarSettings,
    Header,
    Settings,
  },
};
</script>
