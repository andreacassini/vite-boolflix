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
        <div class="row justify-content-between mt-4">
            <div class="col">
                logo
            </div>
            <div class="col input-group">
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

</style>