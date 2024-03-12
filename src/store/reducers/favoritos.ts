import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.itens.findIndex((p) => p.id === produto.id)
      if (index === -1) {
        // Se o produto não estiver na lista de favoritos
        state.itens.push(produto) // Adiciona o produto à lista de favoritos
      } else {
        // Se o produto já estiver na lista de favoritos
        state.itens.splice(index, 1) // Remove o produto da lista de favoritos
      }
    }
  }
})

export const { adicionarFavorito } = favoritosSlice.actions

export default favoritosSlice.reducer
