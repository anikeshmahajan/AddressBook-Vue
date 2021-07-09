<template>
  <header class="headerContainer header">
    <div class="logoContainer">
      <a href="/pages/address_book_home.html">
        <img src="../assets/logo.jpg" alt="" class="logo" />
      </a>
      <div>
        <span class="address-text">ADDRESS</span><br />
        <span class="address-text address-book">BOOK</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style>
body {
  margin: 0;
  height: 100%;
}
.header {
  padding: 15px 0;
  background-color: #ffffff;
}
.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
}
.logoContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0px solid green;
  width: 80%;
}
.logo {
  width: 45px;
  height: 45px;
  border: solid 0px #42515f;
}
.address-text {
  font: normal normal bold 22px/25px Montserrat;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #008cff;
  text-transform: capitalize;
}
.address-book {
  font: normal normal bold 22px/25px Montserrat;
  color: #42515f;
}
* {
  box-sizing: border-box;
}
</style>