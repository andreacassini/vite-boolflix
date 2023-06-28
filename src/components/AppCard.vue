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
<h2 class="mb-3">{{ film.title }}</h2>
<h4 class="mb-3">{{ film.original_title }}</h4>
<h6 class="mb-3">{{ film.original_language }}</h6>
<p><strong>{{ film.vote_average }}</strong></p>

</template>

<style lang="scss">

</style>