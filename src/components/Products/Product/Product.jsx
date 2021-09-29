import React, { useState } from 'react'
import { Badge, Card, Image} from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { increment } from '../../../redux/ducks/counter';
import  { getProduct } from '../../../redux/ducks/products';
import { sumTotal } from '../../../redux/ducks/total';



const { Meta } = Card;

const Product = ({product}) => {
    const [count, setCount] = useState(0)
    
    const dispatch = useDispatch()
    const handleIncrement =() => {
        dispatch(increment())
        setCount(prev => prev +1)
        dispatch(getProduct(product))
        dispatch(sumTotal(product.price))
        
    }
    return (
        <>
            <Card
                hoverable
                cover={<Image alt="example" src={product.src} style={{height: '280px'}} />}
            >
                <Meta title={`$${product.price}`} style={{float: 'right'}}/>
                <Meta title={product.name} description={product.description} style={{fontSize: '25px'}} />
                <Badge count={count} offset={[3, 22]} style={{float: 'right'}} >
                    <ShoppingCartOutlined  onClick={handleIncrement}  style={{marginLeft: '210px',fontSize: '1.5em'}}/>
                </Badge>
                
            </Card>
        </>
    )
}

export default Product
