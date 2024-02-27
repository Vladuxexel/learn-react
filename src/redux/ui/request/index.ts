import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from './constants';

const initialState: Record<string, string> = {};

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    selectors: {
        selectIsLoading: (state, id: string) => state[id] === REQUEST_STATUS.pending
    },
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                ({ type }: { type: string }) => type.endsWith('/pending'),
                (state, { meta }: PayloadAction<string, string, { requestId: string }>) => {
                    state[meta.requestId] = REQUEST_STATUS.pending;
                }
            )
            .addMatcher(
                ({ type }: { type: string }) => type.endsWith('/fulfilled'),
                (state, { meta }: PayloadAction<string, string, { requestId: string }>) => {
                    state[meta.requestId] = REQUEST_STATUS.success;
                }
            )
            .addMatcher(
                ({ type }: { type: string }) => type.endsWith('/rejected'),
                (state, { meta }: PayloadAction<string, string, { requestId: string }>) => {
                    state[meta.requestId] = REQUEST_STATUS.fail;
                }
            )
});

export const { selectIsLoading } = requestSlice.selectors;
