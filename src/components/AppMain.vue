<script>
    import { store } from '../store.js';
    import AppCard from './AppCard.vue';

    export default {
        data() {
            return {
                store
            }
        },
        components:{
            AppCard
        }
}
</script>

<template>
  <div>
    <div class="container pt-5">
        <div class="row">
            <div class="col-4 cards" v-for="(film, index) in store.list" :key="index">
                <AppCard :film="film"/>
            </div> 
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{

    .row{     
           width: 100%;
           margin: 0 auto;
        .cards{
            text-align: center;
            background-color: rgba(0, 0, 0, 0.651);
        }
    }
}
</style>