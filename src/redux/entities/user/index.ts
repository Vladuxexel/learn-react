import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { NormalizedUser } from '@models';
import { getUsers } from './thunks/get-users';

const entityAdapter = createEntityAdapter<NormalizedUser>();

export const userSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
});
