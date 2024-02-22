import { createAsyncThunk } from '@reduxjs/toolkit';
import { NormalizedRestaurant } from '../../../../models/restaurant';

export const getRestaurants = createAsyncThunk<NormalizedRestaurant[]>('restaurant/getRestaurants', async () => {
    const request = await fetch('http://localhost:3001/api/restaurants');
    const result = await request.json();

    return result;
});
