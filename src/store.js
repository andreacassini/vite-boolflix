import { reactive } from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/multi?api_key=0cfb28bbc7ccb0a51f114539b56f21c7',
    list: [],
    search: ''
});
