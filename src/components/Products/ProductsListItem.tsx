import { Card, CardContent, Button } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { buyProduct } from 'redux/shopPageReducer'
type Props = {
    id: number
    title: string
    image: string
    description: string
    price: number
    currency: string
}
const ProductsListItem = ({
    id,
    title,
    image,
    description,
    price,
    currency,
}: Props) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <Card>
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img width={150} height={185} src={image} alt={title} />
                    <p>{description}</p>

                    <div>
                        {currency} {price}
                    </div>
                    <Button onClick={() => dispatch(buyProduct({ id }))}>
                        Buy
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}
export default ProductsListItem
