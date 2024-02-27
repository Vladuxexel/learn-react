import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../index.tsx';
import { NormalizedReview } from '../../../../models/review.ts';
import { selectReviewIds, selectReviewsByRestaurantId } from '../selectors.ts';

export const getReviews = createAsyncThunk<NormalizedReview[], string, { state: RootState }>(
    'review/getReviews',
    async (restaurantId: string) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        const result = await response.json();
        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            const restaurantReviewIds: string[] = selectReviewsByRestaurantId(getState(), restaurantId);
            const reviewIds = selectReviewIds(getState());

            return !restaurantReviewIds.every((id) => reviewIds.includes(id));
        }
    }
);
