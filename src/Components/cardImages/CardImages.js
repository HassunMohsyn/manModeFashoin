import { Card, Col, Container, Row } from "react-bootstrap"
import React from "react";

export default function CardImages ({listImg}) {
    return(
        <Container>
            <Row>

        {listImg.map((item,index) => {
            return(
                
                <Col style={{marginTop:`${index %2 === 0 ? '50px' : '0'}`}} key={index}>
                    <Card className="card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item} />
                    </Card>
                </Col>
            )
        })}
        </Row>

        </Container>
    )
}