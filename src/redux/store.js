import { configureStore , combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import favoritesReducer from './camper/favorites-slice';
import campersReducer from './camper/campers-slice';
import filterSlice from './filter/filer-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

const rootReducer = combineReducers({
    campers: campersReducer,
    filter: filterSlice,
    favorites: favoritesReducer,
  });
  const persistedRootReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
  });
export const persistor =persistStore(store)
