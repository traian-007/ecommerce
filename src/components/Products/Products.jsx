import React from 'react';
import Product from './Product/Product';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

const Products = ({products}) => {
   
    const search = useSelector(state => state.search)
    return (
        <div style={{padding: 40}}>
            <Row gutter={[100, { xs: 2, sm: 8, md: 12, lg: 18 }]}>
                {products.filter((product) => {
                    if(search.search === '') {
                        return product
                    } else if (product.name.toLowerCase().includes(search.search.toLowerCase())){
                        return product
                    }
                }).map((product) => (
                    <Col key={product.id} className="gutter-row" span={6}>
                        <Product product={product}/>
                    </Col>
                    
                ))}
            </Row>
        </div>
    )
}

export default Products
