import React from 'react';
import { Menu } from 'antd';
import './Navbar.css'
import {ShoppingCartOutlined, LoginOutlined, DownOutlined, UserOutlined} from '@ant-design/icons'
import icon from './../../assets/icon.png'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;

function Navbar() {

  return (
      <>
        {/* Todo: Fix this */}
        <Link to='/'><div className='logo'><img src={icon} height='55' width='55' alt="logo" />E-commerce</div></Link>
        
          
        <Menu theme="light" mode="horizontal" style={{display:'flex', justifyContent:'flex-end'}}>
          <Menu.Item key="1" ><LoginOutlined />&nbsp;Login</Menu.Item>
          <Menu.Item key="2"><Link to='/cart'><ShoppingCartOutlined />&nbsp;Cart</Link></Menu.Item>
          <SubMenu key="3" title='More' icon={<DownOutlined />}>
              <Menu.Item key="3.1"><Link to='/admin'><UserOutlined />&nbsp;Admin</Link></Menu.Item>
              <Menu.Item key="3.2"><Link to='/products'><ShoppingCartOutlined />&nbsp;Products</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </>
  )
}

export default Navbar