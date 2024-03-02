import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritos from './reducers/favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritos,
    [api.reducerPath]: api.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
