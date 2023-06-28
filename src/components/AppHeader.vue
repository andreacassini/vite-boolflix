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
                <input type="search" class="form-control">
                <span class="input-group-text" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
                
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>


</style>