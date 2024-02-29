import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer } from '../store'

type ProdutoProps = {
  produto: ProdutoType[]
}

const ProdutosComponent = ({ produto }: ProdutoProps) => {
  useSelector((state: RootReducer) => state.carrinho.itens)
  return (
    <>
      <S.Produtos>
        {produto.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
