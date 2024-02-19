import { RootState } from '../..';

export const selectRestaurantModule = (state: RootState) => state.restaurant;

export const selectRestaurantById = (state: RootState, id: string) => selectRestaurantModule(state).entities[id];
