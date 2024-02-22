import { RootState } from '../..';
import { selectRestaurantById } from '../restaurant/selectors';

export const selectReviewModule = (state: RootState) => state.review;

export const selectReviewById = (state: RootState, id: string) => selectReviewModule(state).entities[id];

export const selectReviewsByRestaurantId = (state: RootState, restaurantId: string) =>
    selectRestaurantById(state, restaurantId).reviews;

export const selectReviewIds = (state: RootState) => selectReviewModule(state).ids;
