import { createAsyncThunk } from '@reduxjs/toolkit';
import { NormalizedUser } from '../../../../models/user';

export const getUsers = createAsyncThunk<NormalizedUser[]>('users/getUsers', async () => {
    const request = await fetch('http://localhost:3001/api/users');
    const result = await request.json();

    return result;
});
