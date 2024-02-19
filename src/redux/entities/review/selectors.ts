import { RootState } from '../..';

export const selectReviewModule = (state: RootState) => state.review;

export const selectReviewById = (state: RootState, id: string) => selectReviewModule(state).entities[id];
