<template>
  <div class="home">
  <div class="backpannel" :class="{tweak: this.store.tweak,untweak: !this.store.tweak}">
  <div class="frontpannel" :class="{darken: this.store.tweak, clear: !this.store.tweak}" ></div>
  </div>
  </div>
  
</template>
<script>
import store from '../store/store'
export default {

    name:'home',
     
  data(){
    return {
     show:''
    }
  },
  mounted(){
   store.state.tweak=false;
   this.show = store.state.tweak;

    if ( store.state.show === false )
    {
      store.state.show = false
      this.show = store.state.tweak;

    }else{
       
   
     store.state.show = true
    this.show = store.state.tweak;
    }
    
  }
 
  }


</script>
<style>
.home {
  width: 80%;
  height: 80%;
}
.backpannel{
  width: 100%;
  height: 100vh;
 
}
.frontpannel {

  width: 100%;
  height: 100vh;
}
.clear {
    
    transition: all 0.5s;
    background-color: transparent;
}
.darken {
   
    transition: all 0.5s;
    background-color: black;
    opacity: 0.6;
}
.tweak {

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: perspective(500px) rotateY(10deg);
   transition: all 0.5s;
   overflow: hidden;
 
}
.untweak {
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   transition: all 0.5s;
};
</style>