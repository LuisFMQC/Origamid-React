import React from 'react'
import Produto from './Produto6';
import {GlobalStorage} from './GlobalContext';



const App = () => {
  return (
        <GlobalStorage>
            <Produto />
        </GlobalStorage>
  )
}

export default App;