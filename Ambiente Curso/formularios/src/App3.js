import React from 'react';
import Radio from './Form/Radio2';

const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

const App = () => {
    const [respostas, setRespostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
      });
      let [slide, setSlide] = React.useState(0)
      const [resultado, setResultado] = React.useState('');

      function handleChange({ target }) {
        setRespostas({ ...respostas, [target.id]: target.value });
      }

      function handleClickProxima(){
        if(slide < perguntas.length - 1)
            setSlide(slide + 1);
        else {
            setSlide(slide + 1);
            resultadoFinal()
        }
      }

      function handleClickAnterior(){
        if(slide === 0)
            setSlide(slide = 0);
        else
            setSlide(slide - 1);
      }

      function resultadoFinal(){
        const corretas = perguntas.filter(
            ({id, resposta}) => respostas[id] === resposta);
        setResultado(`Você acerto ${corretas.length} de ${perguntas.length}!`)
      }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            {perguntas.map((pergunta, index) => (
                <Radio 
                    active={slide === index}
                    key={pergunta.id} 
                    value={respostas[pergunta.id]} 
                    onChange={handleChange} 
                    {...pergunta}
                />
            ))}
            {resultado ? 
            <p>{resultado}</p> : <>
            <button onClick={handleClickAnterior} style={{marginRight: '2rem'}}>Anterior</button>
            <button onClick={handleClickProxima}>Próxima</button> </>}           
        </form>
    );
}

export default App;