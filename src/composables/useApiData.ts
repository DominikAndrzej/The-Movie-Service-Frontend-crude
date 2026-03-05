import {ref} from 'vue';
import type {Movie} from "@/types/Movie.ts";
import type {Serie} from "@/types/Serie.ts";
import type {Genre} from "@/types/Genre.ts";
import {apiService} from "@/api/apiService.ts";

const movies = ref<Movie[]>([]);
const series = ref<Serie[]>([]);
const genres = ref<Genre[]>([]);
const loading = ref({
    movies: false,
    series: false,
    genres: false
});

export function useApiData() {
    const loadMovies = async () => {
        loading.value.movies = true;
        try {
            movies.value = await apiService.getMovies();
        } finally {
            loading.value.movies = false;
        }
    };

    const loadSeries = async () => {
        loading.value.series = true;
        try {
            series.value = await apiService.getSeries();
        } finally {
            loading.value.series = false;
        }
    };

    const loadGenres = async () => {
        loading.value.genres = true;
        try {
            genres.value = await apiService.getGenres();
        } finally {
            loading.value.genres = false;
        }
    };

    const loadAllData = async () => {
        return Promise.allSettled([
            loadMovies(),
            loadSeries(),
            loadGenres()
        ]);
    };

    return {
        movies,
        series,
        genres,
        loading,
        loadAllData
    };
}