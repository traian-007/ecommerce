import React from 'react';
import Product from './Product/Product';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

const Products = ({products}) => {
   
    const search = useSelector(state => state.search)
    return (
        <div style={{padding: 40}}>
            <Row gutter={[10, 50]}>
                {products.filter((product) => {
                    if(search.search === '') {
                        return product
                    } else if (product.name.toLowerCase().includes(search.search.toLowerCase())){
                        return product
                    }
                }).map((product) => (
                    <Col key={product.id} className="gutter-row" lg={{ span: 6}} md={{ span: 8 }} sm={{ span: 12 ,offset: 0}} xs={{ span: 24,offset: 0}} wrap >
                        <Product product={product}/>
                    </Col>
                    
                ))}
            </Row>
        </div>
    )
}

export default Products

//lg={{ span: 6, offset: 0 }} md={{ span: 6, offset: 1 }} sm={{ span: 6, offset: 0 }} xs={{ offset: 3}}
