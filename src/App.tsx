import ButtonsCurrency from 'components/ButtonsCurrency/ButtonsCurrency'
import ProductsList from 'components/Products/ProductsList'
import TotalPrice from 'components/TotalPrice/TotalPrice'
import React from 'react'

function App() {
    return (
        <>
            <ButtonsCurrency />
            <ProductsList />
            <TotalPrice />
        </>
    )
}

export default App
