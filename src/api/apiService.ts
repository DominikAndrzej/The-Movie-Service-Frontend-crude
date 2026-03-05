import api from './axiosInstance';
import type {Movie} from "@/types/Movie.ts";
import type {Serie} from "@/types/Serie.ts";

export const apiService = {

    async getMovies(): Promise<Movie[]> {
        const response = await api.get<any>(`/movies`);

        const items: Movie[] = response.data.data;

        return items.map(item => ({
            id: item.id || 0,
            title: item.title || 'Unknown Title',
            overview: item.overview || 'Unknown Overview',
            genres: Array.isArray(item.genres) ? item.genres : []
        }));
    },

    async getSeries(): Promise<Serie[]> {
        const response = await api.get<any>(`/series`);

        const items: Serie[] = response.data.data;

        return items.map(item => ({
            id: item.id || 0,
            title: item.title || 'Unknown Title',
            overview: item.overview || 'Unknown Overview',
            genres: Array.isArray(item.genres) ? item.genres : []
        }));
    },
}