import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';

interface NormalizedReview {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

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
