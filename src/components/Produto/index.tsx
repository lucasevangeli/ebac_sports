import { Produto as ProdutoType } from '../../App'
import { adicionar } from '../../store/reducers/carrinho'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarFavorito } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

export const selectFavoritos = (state: RootReducer) => state.favoritos.itens

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector(selectFavoritos)

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  const handleFavoritar = () => {
    dispatch(adicionarFavorito(produto))
  }

  const handleAdicionarAoCarrinho = () => {
    dispatch(adicionar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAdicionarAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
