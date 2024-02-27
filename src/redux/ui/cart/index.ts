import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        increment: (state: Record<string, number>, { payload: dishId }: PayloadAction<string>) => {
            state[dishId] = (state[dishId] || 0) + 1;
        },
        decrement: (state: Record<string, number>, { payload: dishId }: PayloadAction<string>) => {
            state[dishId] = (state[dishId] || 0) - 1;

            if (state[dishId] <= 0) {
                delete state[dishId];
            }
        }
    },
    selectors: {
        selectDishAmountById: (state: Record<string, number>, dishId) => state[dishId] || 0,
        selectAllDishesAmount: (state: Record<string, number>) =>
            Object.values(state).reduce((acc, count) => acc + count, 0),
        selectAllDishes: (state: Record<string, number>) => Object.keys(state)
    }
});

export const { selectDishAmountById, selectAllDishesAmount, selectAllDishes } = cartSlice.selectors;
export const { increment, decrement } = cartSlice.actions;
