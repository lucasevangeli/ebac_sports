import Produto from '../components/Produto'

import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data: produto, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produto.favorito}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
