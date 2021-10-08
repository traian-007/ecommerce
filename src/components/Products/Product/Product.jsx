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
                cover={<Image alt="example" src={product.src} style={{width: '100%',maxHeight: 442,minHeight: 424}}/>}
                style={{maxWidth: '358',objectFit: 'contain'}}
            >
                <div style={{display: 'flex',flexDirection: 'column',maxHeight: '100%'}}>
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                        <Meta title={product.name} description={product.description} style={{fontSize: '25px'}} />
                        <Meta title={`$${product.price}`} />
                    </div>
                    <Badge count={count} style={{marginLeft: 'auto'}}>
                        <ShoppingCartOutlined  onClick={handleIncrement} style={{fontSize: '1.5em',position: 'absolute',right:0,bottom: 2}}/>
                    </Badge>
                </div>
            </Card>
        </>
    )
}

export default Product
