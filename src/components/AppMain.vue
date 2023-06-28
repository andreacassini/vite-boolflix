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
            <div class="col-2 cards" v-for="(film, index) in store.list" :key="index">
                <AppCard :film="film"/>
            </div> 
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
    .row{
        .cards{
            border: 1px solid white;
            padding: 5em 1em;
            text-align: center;
        }
    }
}
</style>