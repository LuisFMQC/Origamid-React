import React from 'react'
import {GlobalContext} from './GlobalContext2';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    if(global.dados === null) {
        return (
            <h1>Recarregue a página!</h1>
        ) ;
    }
    return (
        <div>
            Produtos: {global.dados.map((produto) => <li key={produto.id}>{produto.nome} - R${produto.preco}</li>)}
            <button onClick={() => global.limparDados()}>Limpar Produtos</button>
        </div>
    )
}

export default Produto;