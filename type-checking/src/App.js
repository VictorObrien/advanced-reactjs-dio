import React from 'react'
import Petshop from './PetShop'


function App () {

  const handleClick = () => {
    console.log('Inciando banho...');
  }

  return (
    <div>
      <Petshop 
        dogs={2}
        customerName="Victor"
        onClick={handleClick}
      />
    </div>
  )   
}

export default App
