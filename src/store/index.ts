import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // storage should be lowercase
import categories from "./categories/categoriesSlice"
import products from "./products/productsslice";
import cart from "./cart/cartSlice";
import wishlist from './wishlist/wishlistslices';
import auth from './auth/authSlice'
import orders from './orders/ordersslice';

const rootPreistConfig = {
    key: "root",
    storage, 
    whiteList : ["cart" , "auth"]
}

const authPresistConfig = {
    key: "auth",
    storage,
    whiteList : [ "user" , "accessToken" ]
}

const cartPresistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
};


const rootReducer = combineReducers({
    auth : persistReducer(authPresistConfig , auth),
    categories,
    products,
    cart: persistReducer(cartPresistConfig, cart),
    wishlist:  wishlist ,
    orders,
})

const persistedReducer = persistReducer ( rootPreistConfig , rootReducer);

const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
})


// true state selector && true Dispatch
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store);

export { store, persistor };

