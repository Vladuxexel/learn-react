import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './entities/dish';
import { restaurantSlice } from './entities/restaurant';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';

export const store = configureStore({
    reducer: combineSlices(dishSlice, restaurantSlice, reviewSlice, userSlice)
});

export type RootState = ReturnType<typeof store.getState>;
