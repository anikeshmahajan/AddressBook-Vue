<template>
  <div>
    <Header/>
    <div id="main">
      <Contact />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Contact from "../components/Contact.vue";
export default {
  name: "AddressBookMain",
  components: {
    Header,
    Contact,
  },
};
</script>
<style>
#main {
  background-color: #f7f7f7;
}
</style>