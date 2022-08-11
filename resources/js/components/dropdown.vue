<template>
    
    <ul style="
    padding-left: 0 !important;"> <h5 @click="Leshow" class="headmenu"><a href="javascript:void(0)">Menu</a></h5>
    <transition name="appear">
        <div v-if="show" :class="{active: show,inactive: !show}">
        <li  v-for="(item,index) in dropmenu" :key="index">
            <h6>
                <a href="">{{item.title}}</a>
            </h6>
        </li>
        </div>
    </transition>
    </ul>



</template>
<script>
import store from '../store/store'
export default {
    name:'dropdown',
    props:['dropmenu'],
   
    data(){
        return {
            show:store.state.show,
        }
    },
    methods:{
        Leshow(){

            store.state.show=!store.state.show
            this.show=store.state.show
            

        }
    }
}
</script>
<style>
.headmenu {
    padding-left: 10px !important;
    padding: 10px;
    position: relative;
    
}
.headmenu:after {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    background-color: black;
    border: solid 0px;
    bottom: 0;
    left: 0%;
    
	left: 0;
    right: 0;
    transition: 1s;
}
.headmenu:hover:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 2px;
    bottom: 0;
    left: 0%;
    transition: 0.3s;
}

.active{
    max-height: 200px;
    overflow: scroll;
    overflow-y: scroll;
   
}
.inactive {
    max-height: 0px;
    overflow: hidden;
   
}
.appear-enter-from, .appear-leave-to {
    
    max-height: 0px;
    overflow: hidden;
    transition: all 0.5s ease;
}
.appear-enter-to, .appear-leave-from {
    max-height: 200px;
    overflow: scroll;
    transition: all 0.5s ease-out;
}
li {
    padding: 10px;
}
a {
   text-decoration: none !important;
   color: black !important;
}
</style>