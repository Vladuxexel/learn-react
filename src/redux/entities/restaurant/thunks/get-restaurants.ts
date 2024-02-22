import { NormalizedRestaurant } from '@models';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRestaurants = createAsyncThunk<NormalizedRestaurant[]>('restaurant/getRestaurants', async () => {
    const request = await fetch('http://localhost:3001/api/restaurants');
    const result = await request.json();

    return result;
});
