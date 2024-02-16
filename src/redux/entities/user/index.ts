import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../constants/normalized-mock';

interface NormalizedUser {
    id: string;
    name: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: normalizedUsers.reduce<Record<string, NormalizedUser>>((acc, user) => {
            acc[user.id] = user;

            return acc;
        }, {}),
        ids: normalizedUsers.map((user) => user.id)
    },
    reducers: {}
});
