import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from 'utils/productsArray'
import { currencyArray } from 'utils/productsArray'
type Product = {
    id: number
    title: string
    description: string
    price: number
    image: string
    currency: string
}

const initialState: {
    products: Product[]
    currencyIndex: number
    total: number
    previousCof: number
} = {
    products: getProducts(0),
    currencyIndex: 0,
    total: 0,
    previousCof: 1,
}

export const shopPageSlice = createSlice({
    name: 'productsInShopPage',
    initialState,
    reducers: {
        changeIdx: (state, action) => {
            const { id } = action.payload
            const products = getProducts(id)
            const cof = currencyArray[id].cof

            state.products = products
            state.currencyIndex = id
            state.total = (state.total / state.previousCof) * cof
            state.previousCof = cof
        },
        buyProduct: (state, action) => {
            state.total += state.products[action.payload.id].price
        },
    },
})
export const { changeIdx, buyProduct } = shopPageSlice.actions

export default shopPageSlice.reducer
