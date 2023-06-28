<script>
  import { store } from '../store.js';

  export default {
    data() {
      return {
        store,
      }
    },
  }
</script>
<template>
  <div class="container">
      <div class="row justify-content-between align-items-center my-4">
        <div class="col-2">
          <a href="">
            <img src="../assets/logo-boolflix@4x.png">
          </a>
          
        </div>
        <div class="col-5 input-group search-bar">
          <input type="search" class="form-control" v-model="store.search" @change="$emit('search')">
          <button type="button" class="btn btn-light" @click="$emit('search')">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
button{
  padding: 0 1em;
  border: 1px solid rgba(128, 128, 128, 0.212);
}
img{
  max-width: 80%;
}
.search-bar{
  max-width: 30%;
}

</style>