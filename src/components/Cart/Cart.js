import React from 'react'
import { Drawer } from 'antd';

function Cart(props) {

  return (      
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={true}
      onClose={()=>props.toggleVisible(false)}
      visible={props.isVisible}
      width={600}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    )
}

export default Cart
