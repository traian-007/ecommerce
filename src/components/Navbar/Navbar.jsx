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
    
    return (
        <div style={{padding: 20,height: 75, display: 'flex'}}>
            <Title level={3} style={{marginLeft:"20px"}}>Ecommerce
                <img src={logo} alt="butter" height="25px" style={{marginLeft:"20px"}}/>
            </Title>
            <Input 
                style={{width: '600px', margin:"0 300px"}}
                 placeholder="Basic usage"
                onChange={(e) =>{dispatch(search(e.target.value))}} 
             />
           {/* <Avatar style={{float: 'right'}} icon={<UserOutlined />}/> */}
           <Badge count={count} offset={[3, 22]}>     
                <Link to="/cart"><ShoppingCartOutlined style={{fontSize: '2em'}}/></Link>
           </Badge>
        </div>
    )
}

export default Navbar
