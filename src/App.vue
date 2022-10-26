<template>
  <div id="app">
    <div v-if="isLogin">
      jkgskjsdjksdgfksdgjksjzk
    </div>
    <div v-else>
      <Login/>
    </div>
  </div>
</template>
<script>
import Login from '../src/components/Login.vue';
// import { eventBus } from './main';
export default {
  name:'App',
  data(){
    return {
      isLogin:localStorage.getItem("isLogin")
    }
  },
  mounted(){
    // eventBus.$on("isLogin",(res)=>{
    //   console.log("isLogin",res);
    //   this.$router.push("/about");
    //   window.location.reload();
    // })
    console.log("isLogin",this.isLogin);
  },
  components:{
    Login
  }
}
</script>
