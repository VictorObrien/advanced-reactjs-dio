import React, { Fragment } from 'react'

/* Para chamar um fragmento, também podemos utilizar a "síntaxe sugar"
  *  que consiste em você só abrir e fechar as chaves ->  '<></>'
  */

const store = [{
    type: 'Roupa'
  },
  {
    type: 'Calçado'
  },
  {
    type: 'Caiseta'
  }
]

function Column ({ type }) {

  return (
    <tr>
      <td>{type}</td>
    </tr>
  )
}


function App () {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type}/>
    </Fragment>
  ) 

  return (
    <table>
      
        {store.map(renderColumns)}
     
    </table>
  )
}

export default App
