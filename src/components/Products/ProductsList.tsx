import ProductsListItem from './ProductsListItem'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
type Props = {}
const ProductsList = (props: Props) => {
    const productsArray = useAppSelector((state) => state.products.products)
    return (
        <>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, image, description, price, currency }) => (
                        <Grid item xs={12} sm={4} key={id}>
                            <ProductsListItem
                                id={id - 1}
                                image={image}
                                title={title}
                                description={description}
                                price={price}
                                currency={currency}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
