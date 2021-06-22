import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Typography, Divider} from 'antd';
import { PRODUCT_URL } from '../../AppConstants'
import axios from 'axios';
import {HeartOutlined, PlusOutlined} from '@ant-design/icons'
const { Meta } = Card;
const { Title } = Typography;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function TopDeals(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(PRODUCT_URL).then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    
    let editDescription = (desc) => {
        if(desc.length < 100) return desc;
        else {
            return desc.substring(0,100) + '...';
        }
        
    }

    return (
        <div>
            <Divider><Title level={3} style={{textAlign:'center'}} >Top Deals</Title></Divider>
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={false}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                    {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={product.image} style={{height:'200px', width:'90%', margin:'1vh'}}/>}
                                    actions={[
                                        <div><PlusOutlined key="add-to-cart" />&nbsp;Add to cart</div>,
                                        <div><HeartOutlined  key="wishlist" />&nbsp;Add to wishlist</div>,
                                      ]}
                                    style={{margin:'1vh'}}
                                >
                                    <Meta title={product.title} description={editDescription(product.description)}/>
                                </Card>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default TopDeals
