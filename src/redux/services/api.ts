import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NormalizedRestaurant } from '../../models/restaurant';
import { NormalizedUser } from '../../models/user';
import { NormalizedDish } from '../../models/dish';
import { NormalizedReview } from '../../models/review';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    endpoints: (builder) => ({
        getRestaurants: builder.query<NormalizedRestaurant[], void>({
            query: () => ({
                url: 'restaurants'
            })
        }),
        getRestaurant: builder.query<NormalizedRestaurant, string>({
            query: (restaurantId: string) => ({
                url: `restaurant/${restaurantId}`
            })
        }),
        getUsers: builder.query<NormalizedUser[], void>({
            query: () => ({
                url: 'users'
            })
        }),
        getRestaurantDishes: builder.query<NormalizedDish[], string>({
            query: (restaurantId: string) => ({
                url: 'dishes',
                params: { restaurantId }
            })
        }),
        getDishById: builder.query<NormalizedDish, string>({
            query: (dishId: string) => ({
                url: `dish/${dishId}`
            })
        }),
        getRestaurantReviews: builder.query<NormalizedReview[], string>({
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
