import React from 'react'

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const Produto = () => {
  return (
    produtos.map(({nome, propriedades}) => (
        <div key={nome} style={{border: '1px solid black', marginBottom: '15px', padding: '15px'}}>
            <p>{nome}</p>
            <ul>
                {propriedades.map((propriedade) => (
                    <li key={propriedade}>{propriedade}</li>
                ))}
            </ul>
        </div>
    ))
  )
}

export default Produto;