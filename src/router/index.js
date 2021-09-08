import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/local/Dashboard.vue";
import Eleves from "../components/local/Eleves.vue";
import Classes from "../components/local/Classes.vue";
import AdminProfile from "../components/local/AdminProfile.vue";
import AjoutClasse from "../components/local/AjoutClasse.vue";
import AjoutEleve from "../components/local/AjoutEleve.vue";
import AjoutEmploi from "../components/local/AjoutEmploi.vue";
import AjoutMoyenne from "../components/local/AjoutMoyenne.vue";
import AjoutParent from "../components/local/AjoutParent.vue";
import AjoutProfe from "../components/local/AjoutProfe.vue";
import ChangePassword from "../components/local/ChangePassword.vue";
import ClasseProfile from "../components/local/ClasseProfile.vue";
import EditProfile from "../components/local/EditProfile.vue";
import Emploi from "../components/local/Emploi.vue";
import Moyennes from "../components/local/Moyennes.vue";
import Parents from "../components/local/Parents.vue";
import Profes from "../components/local/Profes.vue";
//import Settings from "../components/local/Settings.vue";
import ThemeSettings from "../components/local/ThemeSettings.vue";
import SettingsV from "../views/Settings.vue";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/eleves",
    name: "Eleves",
    component: Eleves,
  },
  {
    path: "/classes",
    name: "Classes",
    component: Classes,
  },
  {
    path: "/adminProfile",
    name: "AdminProfile",
    component: AdminProfile,
  },
  {
    path: "/classes/ajout",
    name: "AjoutClasse",
    component: AjoutClasse,
  },
  {
    path: "/eleves/ajout",
    name: "AjoutEleve",
    component: AjoutEleve,
  },
  {
    path: "/emploi/ajout",
    name: "AjoutEmploi",
    component: AjoutEmploi,
  },
  {
    path: "/Moyennes/ajout",
    name: "AjoutMoyenne",
    component: AjoutMoyenne,
  },
  {
    path: "/parents/ajout",
    name: "AjoutParent",
    component: AjoutParent,
  },
  {
    path: "/profes/ajout",
    name: "AjoutProfe",
    component: AjoutProfe,
  },
  {
    path: "/settings/changepassword",
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/classe/profile",
    name: "ClasseProfile",
    component: ClasseProfile,
  },
  {
    path: "/profile/edit",
    name: "EditProfile",
    component: EditProfile,
  },

  {
    path: "/emploi",
    name: "Emploi",
    component: Emploi,
  },
  {
    path: "/moyennes",
    name: "Moyennes",
    component: Moyennes,
  },
  {
    path: "/parents",
    name: "Parents",
    component: Parents,
  },
  {
    path: "/profes",
    name: "Profes",
    component: Profes,
  },
  {
    path: "/settings",
    name: "SettingsV",
    component: SettingsV,
  },
  {
    path: "/settings/theme",
    name: "ThemeSettings",
    component: ThemeSettings,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
