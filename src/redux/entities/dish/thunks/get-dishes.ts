import { NormalizedDish } from '@models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantById } from '../../restaurant/selectors';
import { selectAllDishIds } from '../selectors';
import { RootState } from '../../..';

export const getDishes = createAsyncThunk<NormalizedDish[], string, { state: RootState }>(
    'dishes/getDishes',
    async (restaurantId: string) => {
        const request = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`, {});
        const result = await request.json();

        return result;
    },
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const restaurant = selectRestaurantById(state, restaurantId);
            const allDishIds = selectAllDishIds(state);

            return !restaurant.menu.every((dishId) => allDishIds.includes(dishId));
        }
    }
);
