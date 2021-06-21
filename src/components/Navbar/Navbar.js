import React, {useState, useEffect} from 'react'
import { Menu } from 'antd';
import './Navbar.css'
import {ShoppingCartOutlined, LoginOutlined, DownOutlined, UserOutlined} from '@ant-design/icons'
import logo from './../../assets/logo.png'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'

const {SubMenu} = Menu;

function Navbar() {
  const [isVisible, toggleVisible] = useState(false)

  let handleCartClick = (isVisible) => {
    toggleVisible(!isVisible);
  }

  return (
      <>
        {/* Todo: Fix this */}
        <Link to='/'><div className='logo'>E-commerce</div></Link>
          
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{display:'flex', justifyContent:'flex-end'}}>
          <Menu.Item key="1" ><LoginOutlined />&nbsp;Login</Menu.Item>
          <Menu.Item key="2" onClick={()=>handleCartClick(isVisible)}><ShoppingCartOutlined />&nbsp;Cart</Menu.Item>
          <SubMenu key="3" title='More' icon={<DownOutlined />}>
              <Menu.Item key="3.1"><Link to='/admin'><UserOutlined />&nbsp;Admin</Link></Menu.Item>
              <Menu.Item key="3.2"><Link to='/products'><ShoppingCartOutlined />&nbsp;Products</Link></Menu.Item>
          </SubMenu>
        </Menu>
        {
          isVisible && <Cart isVisible={isVisible} toggleVisible={toggleVisible} />
        }
      </>
  )
}

export default Navbar