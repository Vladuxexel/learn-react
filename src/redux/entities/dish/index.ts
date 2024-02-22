import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { NormalizedDish } from '@models';
import { getDishes } from './thunks/get-dishes';

const entityAdapter = createEntityAdapter<NormalizedDish>();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDishes.fulfilled, (state, { payload }) => {
            entityAdapter.addMany(state, payload);
        });
    }
});
