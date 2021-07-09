<template>
  <div>
    <Header />
    <Form :data="this.data" />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
export default {
  name: "MainForm",
  props: ["data"],
  components: {
    Header,
    Form,
  },
};
</script>
<style>
</style>