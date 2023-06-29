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
    <div class="card-personal">
        <img :src="store.url_image + film.poster_path" id="img-card">
       <!-- CONTENT -->
       <div class="content">
            <h2 class="mb-3">{{ film.title || film.original_name }}</h2>
            <h4 class="mb-3">{{ film.original_title || film.original_name}}</h4>
            <h6 class="mb-3">Lang: <img :src="'../../public/' + film.original_language + '_16.png'" :alt=" film.original_language"></h6>
            <p><strong>Rating: {{ film.vote_average }}</strong></p>
            <p>Category: {{ film.media_type }}</p>
            <p><strong>Overview: </strong>{{ film.overview }}</p>
       </div>
       
    </div> 
   
</template>

<style lang="scss">
.card-personal{
    position: relative;
    margin: 1em;
    #img-card{
        aspect-ratio: 2/3;
        width: 376px
    }
}

.card-personal:hover .content{
    display: block;
    background-color: rgba(0, 0, 0, 0.842);
}

.content{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    padding: 1.5em;
    overflow-y: auto;
}

</style>