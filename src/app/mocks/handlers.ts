import { http, HttpResponse } from 'msw';

console.log(import.meta.env.VITE_API_URL, 'import.meta.env.VITE_API_URL');

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/games`, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];
