import { Col, Container, Row } from "react-bootstrap";
import CardContainer from "../../Components/CardContainer/CardContainer";
import React from "react";
import Footer from "../../Utilits/Footer/Footer";

export default function ProductsPage () {
    const ImgProd = [
        {
            img:require('../../assets/images/picture/products/image.png'),
            title:'Cotton T Shirt',
            text:'Basic Slim Fit T-Shirt',
            price:'199'
        },
        {
            img:require('../../assets/images/picture/products/image copy.png'),
            title:'Crewneck T-Shirt',
            text:'Basic Heavy Weight T-shirt',
            price:'199'
        },
        {
            img:require('../../assets/images/picture/products/image copy 2.png'),
            title:'Cotton T Shirt',
            text:'Full Sleeve Zipper',
            price:'199'
        },
        {
            img:require('../../assets/images/picture/products/image copy 3.png'),
            title:'Crewneck T-Shirt',
            text:'Basic Heavy Weight T-shirt',
            price:'199'
        },
        {
            img:require('../../assets/images/picture/products/image copy 4.png'),
            title:'Cotton T Shirt',
            text:'Full Sleeve Zipper',
            price:'199'
        },
        {
            img:require('../../assets/images/picture/products/image copy 5.png'),
            title:'Cotton T Shirt',
            text:'Full Sleeve Zipper',
            price:'199'
        },
        
    ]
    const filterList = [
        'new',
        'shirts',
        'polo shirts',
        'shorts',
        'suits',
        'best sellers',
        't-shirts',
        'jeans',
        'jackets',
        'coats',
    ]
    return(
        <div className="products-page h-100">
            <Container>
            <Row className="h-100">
                <Col xs={3}>
                    <h1 style={{fontSize:'16px'}}>Filters</h1>
                    <ul className="filter-list">
                        <Col>
                        <Row>
                            <li>
                                <h1>Size</h1>
                                <ul className="d-flex align-items-center justify-content-between">
                                    <button>XS</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>XL</button>
                                    <button>2X</button>
                                </ul>
                            </li>
                        </Row>
                       <Row>
                            <li>
                                <h1>Availability <p>{'>'}</p></h1>
                                <div><input type="checkbox" /><span>Availability</span> <span>{'(450)'}</span></div>
                                <div><input type="checkbox" /><span>Out Of Stack</span> <span>{'(18)'}</span></div>
                            </li>
                        </Row>
                        <Row>
                            <li><h1>Category <p>{'>'}</p></h1></li>
                        </Row>
                        <Row>
                            <li><h1>Colors <p>{'>'}</p></h1></li>
                        </Row>
                        <Row>
                            <li><h1>Price Range <p>{'>'}</p></h1></li>
                        </Row>
                        <Row>
                            <li><h1>Collections <p>{'>'}</p></h1></li>
                        </Row>
                        <Row>
                            <li><h1>Tags <p>{'>'}</p></h1></li>
                        </Row>
                        <Row>
                            <li><h1>Ratings <p>{'>'}</p></h1></li>
                        </Row>
                    </Col>
                    </ul>
                </Col>
                    <Col xs={9}>
                    <Row>
                        <Col>
                            <h1>products</h1>
                            <li style={{position:"relative"}}><input className='w-100 p-2' placeholder='Search' type='text' style={{padding:'5px',border:'none',outline:'none',background:'#D9D9D9'}} /><i className="fa-solid fa-magnifying-glass" style={{position:'absolute',right:'0',top:'50%',transform:'translateY(-50%)'}}></i></li>
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                            <Row >
                                {filterList.map((item,index) => {
                                    return(
                                        <Col key={index} xs={1} style={{margin:'3px',border:'1px solid rgba(0, 0, 0, 0.6)',textTransform:'uppercase',fontSize:'10px',width:'90px'}}>{item}</Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                        <CardContainer listImg={ImgProd}/>
                    </Col>
            </Row>
            </Container>
            <Footer/>
        </div>
    )
}