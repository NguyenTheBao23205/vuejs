<template>
  <div id="app">
    <div class="container">
      <nav>
        <router-link to='/'> Home<br> </router-link>
        <router-link to='/register'> Register<br> </router-link>
        <router-link to='/login'> Login <br></router-link>
      </nav>
      <router-view></router-view>
      <div class="row">
        <div class="col-md-12">
        <font-awesome-icon icon="home" />
        </div>
        <div class="col-md-6">
          <HelloWorld msg1="Hello World!" />
        </div>
        <div class="col-md-6">
          <WellCome msg2="Well come VueJS" />
        </div>
        <div class="col-md-12">
            <Dem></Dem>
        </div>

        <div class="col-md-6">
          <User></User>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WellCome from "./components/LongNhau.vue";
import User from "./components/User.vue";
import Dem from "./components/Dem.vue";
import "./css/App.css";

export default {
  name: "app",

  components: {
    HelloWorld,
    WellCome,
    User,
    Dem,
  }
};
</script>