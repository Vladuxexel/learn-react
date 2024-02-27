import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => ({
                url: 'restaurants'
            })
        }),
        getRestaurant: builder.query({
            query: (restaurantId: string) => ({
                url: 'restaurant',
                params: { restaurantId }
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: 'users'
            })
        }),
        getRestaurantDishes: builder.query({
            query: (restaurantId: string) => ({
                url: 'dishes',
                params: { restaurantId }
            })
        }),
        getDishById: builder.query({
            query: (dishId: string) => ({
                url: 'dish',
                params: { dishId }
            })
        }),
        getRestaurantReviews: builder.query({
            query: (restaurantId: string) => ({
                url: 'reviews',
                params: { restaurantId }
            })
        })
    })
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantQuery,
    useGetUsersQuery,
    useGetRestaurantDishesQuery,
    useGetDishByIdQuery,
    useGetRestaurantReviewsQuery
} = api;
