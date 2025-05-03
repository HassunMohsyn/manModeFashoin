import { Col, Container, Row } from "react-bootstrap";
import NewCard from "../Card/Card";
import React from "react";

// import NewCard from "../Card/Card";

export default function CardContainer({listImg}) {
    return(
        <Container>
            <Row>

        {listImg.map((item,index) => {
            return(
                
                <Col key={index}>
                <NewCard img={item.img} title={item.title} text={item.text} price={item.price}/>
                </Col>
            )
        })}
        </Row>

        </Container>
)
    
        
    
}