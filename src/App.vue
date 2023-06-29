<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import axios from 'axios'; 
  import { store } from './store.js';

  export default {
    components: {
      AppHeader,
      AppMain,
    },
    mounted(){
      this.getFilm();
    },
    methods: {
      getFilm(){
        
        /* CREO VARIABILE PER API */
        let myUrl = store.apiUrl;

        /* CONTROLLO BARRA DI RICERCA */
        if (store.search !== '') {
          myUrl += `&query=${store.search}`;
        }

        /* FACCIO CHIAMATA */
        axios.get(myUrl).then((response) => {
          store.list = response.data.results;
        });
      }
    }}
</script>

<template>
    <AppHeader @search="getFilm"/> <!-- CLICK BOTTONE -->
    <AppMain />
</template>

<style lang="scss">
  @use '../src/styles/generals.scss' as *;

</style>