<template>
  <div class="main-content">
    <div class="header-contain">
      <div class="address-text-details">Person Details</div>
      <div class="search">
        <input type="text" v-model= "search" placeholder="Search Here" />
      </div>
      <div>
        <router-link class="add-button" to="/addContact"
          >
            <img src="../assets/add-24px.svg" class="plus-button" alt="" />Add
            User
          </router-link
        >
      </div>
    </div>
    <div class="table-main">
      <table class="table" id="display">
        <tr>
          <th>Full Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>Phone Number</th>
          <th>Actions</th>
        </tr>
        <tr v-for="contact in filteredContact" :key="contact.contactId">
          <td>{{ contact.fullName }}</td>
          <td>{{ contact.address }}</td>
          <td>{{ contact.city }}</td>
          <td>{{ contact.state }}</td>
          <td>{{ contact.zip }}</td>
          <td>{{ contact.phoneNumber }}</td>
          <td>
            <img
              :id="contact.contactId"
              src="../assets/delete-black-18dp.svg"
              alt="delete"
              class="actions"
              @click="remove(contact.contactId)"
            />
            <img
              :id="contact.contactId"
              src="../assets/create-black-18dp.svg"
              alt="edit"
              class="actions"
              @click="update(contact)"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      Contacts: [],
      search: "",
    };
  },
  mounted() {
    this.getContacts();
  },
  computed: {
      filteredContact :function()
      {
          return this.Contacts.filter((contact)=>{
              return contact.fullName.match(this.search)
          });
      }
  },
  methods: {
    getContacts() {
      axios.get("http://localhost:8080/addressbook")
        .then((result) => {
          this.Contacts = result.data.data;
          console.log(result.data.data);
          this.totalContact = this.Contacts.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    remove(id) {
      axios.delete("http://localhost:8080/addressbook/delete/" + id)
        .then((result) => {
          console.log(result);
          this.getContacts();
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update(data) {
      this.$router.push({
        name: "MainForm",
        params: {
          data: {
            result: data,
            type: "update",
          },
        },
      });
    },
  },
};
</script>
<style>
.main-content {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  min-height: calc(100vh-80px);
  background-color: #f7f7f7;
  padding: 30px 0 10px;
  box-sizing: border-box;
}
.header-contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 83%;
  margin: 0 auto;
  padding-bottom: 25px;
}
.address-text-details {
  font: normal normal bold 28px/25px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  opacity: 1;
}

/* #searchBox:hover {
  width: 170px;
  height: 55px;
  background-image: none;
} */
.search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background: #ffffff 0% 0% no-repeat padding-box; */
  padding: 20px;
  /* box-shadow: 0px 1px 3px #00000029; */
  /* border-radius: 28px; */
  opacity: 1;
  border-radius: 15px;
  width: 400px;
  height: 5px;

  margin-left: 450px;
}
#search-icon {
  width: 27px;
  height: 27px;
}

.plus-button {
  margin-right: 5px;
}
.add-button {
  text-align: center;
  font: normal normal normal 22px/29px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: #008cff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 10px 18px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
/* Table Content */
.table-main {
  width: 80%;
  margin: 0 auto;
  overflow: auto;
}
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  min-width: 800px;
}
td,
th {
  text-align: left;
  padding: 5px 8px;
}
th {
  background: #2c81d1 0% 0% no-repeat padding-box;
  border-radius: 3px 3px 0px 0px;
  text-align: left;
  font: normal normal medium 18px/24px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  /* border: 0px solid #dddddd; */
  padding: 20px;
  opacity: 1;
}
tr:not(:first-child) {
  font: normal normal normal 14px/21px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}
tr {
  border: 2px solid #000000;
  background-color: white;
  padding: 12px 12px 12px 12px;
  height: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px black;
}
td {
  text-align: left;
  font: normal normal 600 16px/19px Lato;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}
td:first-child {
  display: flex;
  align-items: center;
}
td img {
  margin-left: 10px;
}
.actions {
  margin-left: 20px;
  cursor: pointer;
}
</style>