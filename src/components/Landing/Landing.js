import React from 'react'
import { Breadcrumb, Carousel } from 'antd';
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import './landing.css';

function Landing() {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel afterChange={onChange} autoplay>
        <div>
          <img src={carousel3} className="carousel" alt="img"/>
        </div>
        <div>
        <img src={carousel2} className="carousel" alt="img"/>
        </div>
        <div>
        <img src={carousel1} className="carousel" alt="img"/>
        </div>
        <div>
        <img src={carousel2} className="carousel" alt="img"/>
        </div>
      </Carousel>
    </div>
  )
}

export default Landing
