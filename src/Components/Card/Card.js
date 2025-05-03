import { Card } from "react-bootstrap";
import React from "react";

export default function NewCard({img,title,text,price}) {
    return(

    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <button className="plusButton">+</button>
      <Card.Body>
        <Card.Title style={{fontSize:'12px',fontWeight:'medium',color:'rgba(0, 0, 0, 0.66)'}}>{title}</Card.Title>
        <Card.Text className="d-flex justify-content-between" style={{fontSize:'14px',fontWeight:'500'}}>
          {text}
          <p style={{fontSize:'14px',fontWeight:'500'}}>$ {price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    )
}