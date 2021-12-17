import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'; 
import Product from '../Components/Product'
import axios from 'axios';



function HomeScreen() {
    const [products,setProducts]=useState([])
    const [prodsave,setstateprodsave]=useState({
        firstname:'Hamza',
        lastName:'khan'
    })

    useEffect(()=>{
        async function fetchprods(){
            const {data}=await axios.get('/api/products/')
            setProducts(data)
        }
        fetchprods()
        
    },[])
    return (
        <div>
            <h1>Latest Products </h1>
            <Row>
                {products.map(product=> (
                    <Col key={product._id} sm={12} md={16} lg={4} xl={3}>
                       <Product product={product} />
                    </Col>
                    ))}
            </Row>
            
        </div>
    )
}

export default HomeScreen
