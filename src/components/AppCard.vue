<script>
import { store } from '../store.js';
export default {
    data() {
            return {
                store,
            }
        },
        props:{    /* RICHIAMO PROPS */
            film: Object,
        }
}
</script>
<template>
    <img :src="store.url_image + film.poster_path"> 
    <h2 class="mb-3">{{ film.title || film.original_name }}</h2>
    <h4 class="mb-3">{{ film.original_title || film.original_name}}</h4>
    <h6 class="mb-3">Lang: <img :src="'../../public/' + film.original_language + '_16.png'" :alt="film.original_language"></h6>
    <p><strong>{{ film.vote_average }}</strong></p>
    <p>Category: {{ film.media_type }}</p>

</template>

<style lang="scss">

</style>