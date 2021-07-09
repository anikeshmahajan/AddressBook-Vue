<template>
  <div class="form-content">
    <form action="" class="form">
      <div class="form-head-container">
        <div class="form-head">PERSON ADDRESS FORM</div>
        <router-link class="close" to="/" >
            <img
              src="../assets/cancel.jpg"
              alt="../pages/address_book_home"
              
            /> 
        </router-link>
      </div>

      <div class="row-content">
        <label class="label text" for="name">Full Name</label>
        <input
          class="input"
          type="text"
          id="name"
          name="name"
          v-model="form.fullName"
          placeholder="Enter your Full Name.."
          required
        />
      </div>

      <div class="row-content">
        <label class="label text" for="number">Mobile Number</label>
        <input
          class="input"
          type="text"
          id="number"
          name="number"
          v-model="form.phoneNumber"
          placeholder="Enter your Mobile Number..."
          required
        />
      </div>

      <div class="row-content">
        <label class="label text" for="address">Address</label>
        <textarea
          name="address"
          id="address"
          cols="15"
          rows="15"
          v-model="form.address"
          style="width: 700px; height: 96px"
          placeholder="Enter your Address...!"
          required
        ></textarea>
      </div>

      <div class="row-contents sub-address">
        <div class="state">
          <label for="state" class="label text">State</label>
          <select
            name="state"
            id="state"
            class="form-control"
            v-model="form.state"
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div class="city">
          <label for="city" class="label text">City</label>
          <select
            name="city"
            id="city"
            class="form-control"
            v-model="form.city"
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
             <option value="Jammu">Jammu</option>
            <option value="Patna">Patna</option>
            <option value="Muradabad">Muradabad</option>
            <option value="Mirzapur">Mirzapur</option>
            <option value="KoylaPur">Koylapur</option>
            <option value="Madhurai">Madhurai</option>
            <option value="Agra">Agra</option>
             <option value="Delhi">PuraniDelhi</option>
            <option value="Udhampur">Udhampur</option>
            <option value="Pathankot">Pathankot</option>
            <option value="Ludiana">Ludiana</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Mohali">Mohali</option>
            <option value="Mogaa">Moga</option>
          </select>
        </div>

        <div class="zipCode">
          <label for="zip" class="label text">Zip Code</label>
          <input
            type="number"
            name="zipCode"
            id="zip"
            class="zipCode"
            v-model="form.zip"
            placeholder="Enter zip number..."
            required
          />
        </div>
      </div>

      <div class="button-parent">
        <div class="sumbit-reset">
          <button
            class="button sumbitButton"
            @click="update"
            v-if="this.data != undefined && this.data.type == 'update'"
          >
            Update
          </button>
          <button
            type="submit"
            class="button sumbitButton"
            @click="submit"
            v-else
          >
            Add
          </button>
          <button type="reset" class="resetButton button">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios  from "axios";
export default {
  name: "Form",
  props: ["data"],
  mounted() {
    if (this.data != undefined && this.data.type == "update") {
      console.log(this.data);
      this.form.fullName = this.data.result.fullName;
      this.form.phoneNumber = this.data.result.phoneNumber;
      this.form.address = this.data.result.address;
      this.form.city = this.data.result.city;
      this.form.state = this.data.result.state;
      this.form.zip = this.data.result.zip;
    }
  },
  data() {
    return {
      form: {
        fullName: "",
        phoneNumber: "",
        address: "",
        city: "none",
        state: "none",
        zip: "",
      },
    };
  },
  methods: {
    submit(event) {
      const data = {
        fullName: this.form.fullName,
        phoneNumber: this.form.phoneNumber,
        address: this.form.address,
        city: this.form.city,
        state: this.form.state,
        zip: this.form.zip,
      };
      event.preventDefault();
      console.log(data);
      axios.post("http://localhost:8080/addressbook/post/create", data)
        .then((result) => {
          console.log(result);
          this.$router.push({
            name: "MainContactList",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update(event) {
      const contactData = {
        fullName: this.form.fullName,
        phoneNumber: this.form.phoneNumber,
        address: this.form.address,
        city: this.form.city,
        state: this.form.state,
        zip: this.form.zip,
      };
      event.preventDefault();
      console.log(this.data.result);
      axios.put("http://localhost:8080/addressbook/put/update/" + this.data.result.contactId,
        contactData
      )
        .then((result) => {
          console.log("update successfully..!!! ", result);
          this.$router.push({
            name: "MainContactList",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.form-content {
  min-height: calc(100% - 180px);
  width: 100%;
  background-color: #f7f7f7;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
}
.form-head-container {
  display: flex;
  justify-content: space-between;
  /* align-items: ; */
  width: 100%;
  padding: 30px 10px;
  background: #008cff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  opacity: 1;
}
.close {
  width: 44px;
  height: 44px;
  background: 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
}
.form-head {
  display: block;
  margin-left: 30%;
  font: normal normal normal 28px/37px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
}
.form {
  margin-top: 20px;
  width: 900px;
  height: 803px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  opacity: 1;
}
.row-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 25px;
  margin-bottom: 10px;
  border: 0px solid green;
}
.label {
  min-width: 140px;
}
label {
  padding: 12px 12px 12px 50px;
  margin-left: 30px;
  display: block;
}
.text {
  font-size: 16px;
  color: #42515f;
  opacity: 1;
  font: normal normal normal 18px/24px Roboto;
}
.text-error {
  color: red;
  margin-left: 10px;
  font-size: 12px;
  font-style: italic;
}
input,
textarea {
  margin-left: 80px;
  width: 700px;
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  resize: vertical;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bdbdbd;
  box-shadow: 1px 1px gray;
  border-radius: 3px;
  opacity: 1;
}
select {
  width: 180px;
  height: 50px;
  margin-left: 80px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font: normal normal normal 16px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  background-color: transparent;
}
.sub-address {
  display: flex;
  flex-direction: row;
}
.zipCode {
  width: 180px;
  height: 50px;
}
.button-parent {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-left: 200px;
  margin-right: 50px;
  /* margin-top: 20px; */
}
.button {
  width: 100px;
  height: 40px;
  background: transparent;
  font-weight: 400;
  opacity: 1;
  min-width: 140px;
  font-size: 15px;
  padding: 7px 7px;
  font-family: Roboto;
  color: #42515f;
  border: 1px solid #969696;
  background: #e2e2e2 0% 0% no-repeat padding-box;
  cursor: pointer;
  border-radius: 5px;
}
.sumbitButton {
  margin-right: 30px;
}
.cancelButton {
  padding-top: 8px;
  text-decoration: none;
  text-align: center;
}
.cancelButton:hover,
.resetButton:hover {
  background-color: grey;
}
.sumbitButton:hover {
  background-color: #82a70c;
}
</style>