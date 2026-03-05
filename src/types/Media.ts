import type {Genre} from "@/types/Genre.ts";

export interface Media {
    id: number;
    title: string;
    overview: string;
    genres?: Genre[];
}