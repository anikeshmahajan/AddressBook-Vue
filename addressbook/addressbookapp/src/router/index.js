import Vue from "vue";
import VueRouter from "vue-router";
import MainForm from "../components/MainForm.vue";
import MainAddress from "../components/MainAddress.vue";

Vue.use(VueRouter);

const routes = [
   {
      name: "MainContactList",
      component: MainAddress,
      path: "/",
      props: true,
      params: true
   },
   {
      name: "MainForm",
      component: MainForm,
      path: "/addContact",
      props: true,
      params: true
   }
];

const router = new VueRouter({
   mode: "history",
   routes
});

export default router;