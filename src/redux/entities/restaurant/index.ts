import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/get-restaurants';
import { NormalizedRestaurant } from '../../../models/restaurant';

const entityAdapter = createEntityAdapter<NormalizedRestaurant>();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
});
