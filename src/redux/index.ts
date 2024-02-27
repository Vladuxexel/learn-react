import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { dishSlice } from './entities/dish';
import { restaurantSlice } from './entities/restaurant';
import { reviewSlice } from './entities/review';
import { userSlice } from './entities/user';
import { cartSlice } from './ui/cart';
import { requestSlice } from './ui/request';
import { api } from './services/api';

const combinedSlices = combineSlices(restaurantSlice, userSlice, dishSlice, reviewSlice, cartSlice, requestSlice);

export const store = configureStore({
    // reducer: {
    //     combinedSlices,
    //     [api.reducerPath]: api.reducer
    // },
    reducer: combinedSlices
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
