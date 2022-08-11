<template>
    <div class="container mt-5">
    <div class="row">
            <div class="col-4 galery"><img src="/img.jpg" alt=""></div>
            
            <div v-if="id != 2" class="col-4 galery"><img src="/2.jpg" alt=""></div>
            <div class="col-4 galery"><img src="/img.jpg" alt=""></div>
    </div>
    {{id}}
    </div>
</template>
<script>
export default {
    name:'galery',
    props: [''],
    data(){
        return {
            id:''
        
        }
    },

    mounted(){
         this.id = this.$route.params.id
    },

    watch: {
            '$route' (){
                this.id = this.$route.params.id
            }
    }


   

}
</script>
<style>
.galery {
    justify-content: center;
    align-items: center;
    display: flex;
}
img {
    max-height: 300px;
    margin: 10px;
}
</style>