import { ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Badge, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/butterfly.png'
import { search } from '../../redux/ducks/search';

const Navbar = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     const getProducts = async () => {
    //         const res = await fetch("https://ecommerce-23b61-default-rtdb.firebaseio.com/",{method: 'GET', mode: 'cors',headers: new Headers({'Content-Type': 'application/json'})})
    //         const data = await res.json()
    //         console.log(data)
    //     }
    //     getProducts();
    // }, [])
    
    return (
        <div style={{padding: 20,height: 75, display: 'flex',justifyContent: 'space-between'}}>
            <Title level={3} style={{marginLeft:"20px"}}>Ecommerce
                <img src={logo} alt="butter" height="25px" style={{marginLeft:"20px"}}/>
            </Title>
            <Input 
                style={{width: '70%',position: 'absolute', top: 60,margin: '0 auto',left: 0, right: 0}}
                xs={{ top: 80}}
                 placeholder="Basic usage"
                onChange={(e) =>{dispatch(search(e.target.value))}} 
             />
               
                <Link to="/cart"><ShoppingCartOutlined style={{fontSize: '2em'}}/><Badge count={count} offset={[-6, 10]} style={{marginRight:20}}/> </Link>
        </div>
    )
}

export default Navbar

// , margin:"0 300px"
