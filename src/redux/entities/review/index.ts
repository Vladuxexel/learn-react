import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { NormalizedReview } from '@models';
import { getReviews } from './thunks/get-reviews';

const entityAdapter = createEntityAdapter<NormalizedReview>();

export const reviewSlice = createSlice({
    name: 'review',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, { payload }) => {
            entityAdapter.addMany(state, payload);
        });
    }
});
