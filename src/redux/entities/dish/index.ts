import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';

interface NormalizedDish {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
}

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
