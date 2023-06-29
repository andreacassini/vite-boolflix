<script>

import { faHardOfHearing } from '@fortawesome/free-solid-svg-icons';
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
    <link href="../assets/">
<h2 class="mb-3">{{ film.title || film.original_name }}</h2>
<h4 class="mb-3">{{ film.original_title || film.original_name}}</h4>
<h6 class="mb-3">Lang: <img :src="'../assets/flags/' + film.original_language + '_16.png'"></h6>
<p><strong>{{ film.vote_average }}</strong></p>
<p>Category: {{ film.media_type }}</p>

</template>

<style lang="scss">
img{
    width: 100%;
}
</style>