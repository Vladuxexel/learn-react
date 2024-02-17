import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { NormalizedRestaurant } from '@models';

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        entities: normalizedRestaurants.reduce<Record<string, NormalizedRestaurant>>((acc, restaurant) => {
            acc[restaurant.id] = restaurant;

            return acc;
        }, {}),
        ids: normalizedRestaurants.map((restaurant) => restaurant.id)
    },
    reducers: {}
});
