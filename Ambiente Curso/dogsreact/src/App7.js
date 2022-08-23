import React from 'react'
import Produto from './Produto7';
import {GlobalStorage} from './GlobalContext2';



const App = () => {
  return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
  )
}

export default App;