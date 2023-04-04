import { Button } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { currencyArray } from 'utils/productsArray'
import { changeIdx } from 'redux/shopPageReducer'
type Props = {}
const ButtonsCurrency = (props: Props) => {
    const dispatch = useAppDispatch()

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {currencyArray.map(({ id, currencyOfVal }) => (
                <Button key={id} onClick={() => dispatch(changeIdx({ id }))}>
                    {currencyOfVal}
                </Button>
            ))}
        </div>
    )
}
export default ButtonsCurrency
