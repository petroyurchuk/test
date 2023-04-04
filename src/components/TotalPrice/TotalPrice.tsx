import { Typography } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
type Props = {}
const TotalPrice = (props: Props) => {
    const total = useAppSelector((state) => state.products.total)
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h2" component="h2">
                Total: {total}
            </Typography>
        </div>
    )
}
export default TotalPrice
