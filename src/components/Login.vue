<template>
  <div>
    <div class="flex_wrap login">
      <div class="container-fluid isLogin">
        <div class="col-lg-6">
          <h4 class="m-1 p-2 border-bottom">Login</h4>
          <div class="form-group form-row">
            <label class="col-lg-6">Email:</label>
            <div class="col-lg-6">
              <input type="email" v-model="email" class="form-control" />
            </div>
          </div>
          <div class="form-group form-row" v-if="isCheck">
            <label class="col-lg-6">OTP:</label>
            <div class="col-lg-6">
              <input type="password" v-model="password" class="form-control" />
            </div>
          </div>
          <div>
            <button class="btn btn-secondary mt-2" v-on:click="loginUser"> Login </button>
            <span style="padding-left: 15px" v-bind:class="(message == 'Please enter a valid email address') ? 'text-danger' : 'text-success'">{{ message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {eventBus} from '../main';
export default {
  name: "Login_component",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      isCheck: false,
    };
  },
  methods: {
    loginUser: function(event) {
      if(this.isCheck){
        localStorage.setItem("isLogin",this.email);
      }
      else{
        event.preventDefault();

        let res =  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email));

        if(res){
            this.message = '';
            this.isCheck = true;
        }        
        else 
            this.message = 'Please enter a valid email address';
      }
    },
  },
};
</script>
