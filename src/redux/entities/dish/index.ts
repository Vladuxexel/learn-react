import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';
import { NormalizedDish } from '@models';

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: normalizedDishes.reduce<Record<string, NormalizedDish>>((acc, dish) => {
            acc[dish.id] = dish;

            return acc;
        }, {}),
        ids: normalizedDishes.map((dish) => dish.id)
    },
    reducers: {}
});
