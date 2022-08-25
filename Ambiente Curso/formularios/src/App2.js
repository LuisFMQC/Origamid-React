import React from 'react'
import Checkbox from './Form/Checkbox';
import Input from './Form/Input'
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [produto, setProduto] = React.useState('');
    const [cor, setCor] = React.useState('vermelho')
    const [frutas, setFrutas] = React.useState([]);

  return (
    <form>
        <Select value={produto} setValue={setProduto} options={[ 'Notebook', 'Tablet', 'Smartphone']}/>
        <Radio options={['azul', 'vermelho', 'verde']} value={cor} setValue={setCor}/>
        <Checkbox options={['banana', 'maçã', 'morango']} values={frutas} setValues={setFrutas}/>
        <Input label="Nome" type="text" value={nome} setValue={setNome}/>
        <Input label="E-mail" type="email" value={email} setValue={setEmail}/>
    </form>
  )
}

export default App