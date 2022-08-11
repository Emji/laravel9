<template>
  <div class="row">
    <div class="col-10">
    
      <div class="afterscreen">
        <!-- <router-view></router-view> -->
      </div>
    </div>

    <div class="col-2 d-flex justify-content-end" style="height: 100vh">
      <div class="sidemenu bg-light" @mouseenter="cons" @mouseleave="uncons">
        <div class="signet"></div>
        <ul class="d-flex flex-column" style="position: relative; top: 40%">
          <li>
            <h5>
              <!-- <router-link to="/">Accueil</router-link> -->
            </h5>
          </li>

          <dropdown :dropmenu="dropmenu" />
          <li>
            <h5>
              <!-- <router-link to="/contact">Contact</router-link> -->
            </h5>
          </li>
          <li>
            <h5>
              <a href="">Random</a>
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import store from './store/store'
import dropdown from './components/dropdown.vue'

export default {
      components: 
    {
        dropdown
    },
  
    data(){

        return {
           dropmenu: [
        {
          id: 1,
          title: "azerbaidjan",
        },
        { id: 2, title: "Canary" },
        {
          id: 3,
          title: "azerbaidjan",
        },
      ],
   
    };
  },
  methods: {
    cons() {
      store.cons();
    },
    uncons() {
    store.uncons();

      store.state.show = false;
    },
  },
    
    mounted(){
        console.log(store.state.tweak)
    }
    
}
</script>
<style >

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.afterscreen {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.sidemenu {
  padding-left: 50px;
  position: relative;
  right: -210px;
  transition: all 0.5s;
  width: 110%;
  font-family: "Special Elite", cursive !important;
  box-shadow: -7px 1px 18px -10px rgba(0, 0, 0, 0.4);
}

.sidemenu:hover {
  padding-left: 50px;
  position: relative;
  right: -15px;
  transition: all 0.5s;
}

.signet {
  border-radius: 40% 0% 0% 40%;
  height: 50px;
  width: 25px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: -25px;
}
ul {
  list-style-type: none;
  padding-right: 2rem !important;
  padding-left: 0 !important;
}
li {
  display: block;
  padding: 10px;
}
a {
  text-decoration: none;
  color: black;
}
h6 {
  margin-left: 10px;
}

</style>