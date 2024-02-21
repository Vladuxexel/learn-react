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
        selectDishAmountById: (state: Record<string, number>, dishId) => {
            return state[dishId] || 0;
        }
    }
});

export const { selectDishAmountById } = cartSlice.selectors;
export const { increment, decrement } = cartSlice.actions;
