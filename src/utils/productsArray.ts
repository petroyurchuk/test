type Product = {
    id: number
    title: string
    description: string
    price: number
    image: string
    currency: string
}
type Valuta = {
    id: number
    currencyOfVal: string
    cof: number
}

export const currencyArray: Valuta[] = [
    {
        id: 0,
        currencyOfVal: 'USD',
        cof: 1,
    },
    {
        id: 1,
        currencyOfVal: 'EUR',
        cof: 0.85,
    },
    {
        id: 2,
        currencyOfVal: 'UAH',
        cof: 40,
    },
    {
        id: 3,
        currencyOfVal: 'PLN',
        cof: 4.29,
    },
]
export const getProducts = (currencyIndex: number): Product[] => {
    const { currencyOfVal, cof } = currencyArray[currencyIndex]

    return [
        {
            id: 1,
            title: 'iPhone 14 Pro',
            description: 'This is iPhone 14 Pro',
            currency: `${currencyOfVal.toString()}`,
            price: 1500 * cof,
            image: '/images/iphone-black.jpg',
        },
        {
            id: 2,
            title: 'iPhone 13 Pro',
            description: 'This is iPhone 13 Pro',
            currency: `${currencyOfVal.toString()}`,
            price: 1200 * cof,
            image: '/images/iphone-gold.jpg',
        },
        {
            id: 3,
            title: 'iPhone 12 Pro',
            description: 'This is iPhone 12 Pro',
            currency: `${currencyOfVal.toString()}`,
            price: 1000 * cof,
            image: '/images/iphone-green.jpg',
        },
        {
            id: 4,
            title: 'iPhone 11 Pro',
            description: 'This is iPhone 11 Pro',
            currency: `${currencyOfVal.toString()}`,
            price: 1250 * cof,
            image: '/images/iphone-purple.jpg',
        },
        {
            id: 5,
            title: 'iPhone 13 Pro Max',
            description: 'This is iPhone 13 Pro Max',
            currency: `${currencyOfVal.toString()}`,
            price: 1700 * cof,
            image: '/images/iphone-red.jpg',
        },
        {
            id: 6,
            title: 'iPhone 14 Pro Max',
            description: 'This is iPhone 14 Pro Max',
            currency: `${currencyOfVal.toString()}`,
            price: 1450 * cof,
            image: '/images/iphone-white.jpg',
        },
    ]
}
