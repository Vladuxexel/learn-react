import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';
import { NormalizedReview } from '@models';

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: normalizedReviews.reduce<Record<string, NormalizedReview>>((acc, review) => {
            acc[review.id] = review;

            return acc;
        }, {}),
        ids: normalizedReviews.map((review) => review.id)
    },
    reducers: {}
});
