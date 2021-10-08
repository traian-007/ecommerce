import { Button } from 'antd'
import Title from 'antd/lib/typography/Title';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decrement } from '../../redux/ducks/counter';
import { deleteProduct} from '../../redux/ducks/products';
import { delTotal } from '../../redux/ducks/total';
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'

const CartPage = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const total = useSelector(state => state.total)
    const size = 'large';

    const emptyCart = () => {
        dispatch(deleteProduct())
        dispatch(decrement())
        dispatch(delTotal())
    }

    return (
        <>
            <Navbar />
            { product && <Products products={product} />}
            <div style={{display: 'flex'}}>
                <Title level={2} style={{width: '80%',paddingLeft: 40}}>Subtotal: ${total.total}</Title>
                <div>
                 <Button type="primary" size={size} style={{backgroundColor: 'red',marginRight: '20px',marginBottom: 20,borderRadius: 10,borderStyle: 'none'}} onClick={emptyCart}>Empty Cart</Button>
                 <Link to="/"><Button type="primary" size={size} style={{borderRadius: 10,borderStyle: 'none'}}>Home Page</Button></Link>
                </div>
            </div>
            
        </>
    )
}

export default CartPage
