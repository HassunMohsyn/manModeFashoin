import { Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";

export default function ProductsComponent () { 
    const ImgProd = [
        {
            img:require('../../assets/images/picture/prod/image.png'),
            title:'Pants',
            text:'cotton'
        },
        {
            img:require('../../assets/images/picture/prod/image copy.png'),
            title:'Pants',
            text:'cotton'
        },
        {
            img:require('../../assets/images/picture/prod/image copy 2.png'),
            title:'Pants',
            text:'cotton'
        },
        
    ]
    return(
        <Container>
            <div className="nav-prod w-100 d-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center justify-content-between">
                    <Link to={''}><li>All</li></Link>
                    <Link to={''}><li>Men</li></Link>
                    <Link to={''}><li>Women</li></Link>
                    <Link to={''}><li>KID</li></Link>
                </ul>
                <ul className="d-flex align-items-start justify-content-between">
                    <li>Filters(+)</li>
                    <li>Sorts(-)
                        <p>Less to More</p>
                        <p>More to Less</p></li>
                </ul>
            </div>
            <CardContainer listImg={ImgProd}/>
            <Link to={'/Products'} className="w-100 d-flex align-items-center justify-content-center flex-column">More<p>+</p></Link>
        </Container>
    )
}