import React, { Fragment } from 'react'

/* Para chamar um fragmento, também podemos utilizar a "síntaxe sugar"
  *  que consiste em você só abrir e fechar as chaves ->  '<></>'
  */

const store = ['', '', '']

function Column () {

  return (
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}


function App () {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  ) 

  return (
    <table>
      <tr>
        {store.map(renderColumns)}
      </tr>
    </table>
  )
}

export default App
