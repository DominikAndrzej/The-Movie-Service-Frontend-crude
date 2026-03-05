import { http, HttpResponse } from 'msw'
export const handlers = [
    http.get('/api/movies', () => {
        return HttpResponse.json([
            {
                id: 1,
                title: 'Inception',
                overview: "string",
                genres: [
                    { id: 2, name: 'Drama' },
                ]
            },
            {
                id: 2,
                title: 'Interstellar',
                overview: "string",
                genres: [
                    { id: 1, name: 'Sci-Fi' },
                ]
            }
        ])
    }),

    http.get('/api/series', () => {
        return HttpResponse.json([
            {
                id: 1,
                title: 'Breaking Bad',
                overview: "string",
                genres: [
                    {
                        id: 2,
                        name: 'Drama'
                    }
                ]},
            {
                id: 2,
                title: 'Stranger Things',
                overview: "string",
                genres: [
                    {
                        id: 1,
                        name: 'Sci-Fi'
                    },
                    {
                        id: 2,
                        name: 'Drama'
                    }
                ]}
        ])
    }),

    http.get('/api/genres', () => {
        return HttpResponse.json([
            { id: 1, name: 'Sci-Fi' },
            { id: 2, name: 'Drama' }
        ])
    }),
]