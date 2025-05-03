import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardContainer from '../CardContainer/CardContainer'


const NewThisWeek = () => {
  const listPro = [
    {
        img:require('../../assets/images/picture/New/image.png'),
        title:'V-Neck T-Shirt',
        text:'Embroidered Seersucker Shirt',
        price:'99'
    },
    {
        img:require('../../assets/images/picture/New/image copy.png'),
        title:'T Cotton T Shirt',
        text:'Basic Slim Fit T-Shirt',
        price:'99'
    },
    {
        img:require('../../assets/images/picture/New/image copy 2.png'),
        title:'T Henley T-Shirt',
        text:'Blurred Print T-Shirt',
        price:'99'
    },
    {
        img:require('../../assets/images/picture/New/image copy 3.png'),
        title:'T Crewneck T-Shirt',
        text:'Full Sleeve Zipper',
        price:'99'
    },
]

  return (
    <Container >
      <div className='d-flex align-items-center justify-content-between'>
        <h1 className=' position-relative' style={{fontSize:'48px',fontWeight:'800',textTransform:'uppercase'}}>new
        <h1 style={{fontSize:'48px',fontWeight:'800',textTransform:'uppercase'}}>this week</h1>
        <p className=' position-absolute top-50' style={{right:'-50px',transform:' translateY(-50%)',fontSize:'20px',fontWeight:'800',color:'#000E8A'}}>{'(50)'}</p>
        </h1>
        <Link style={{color:'black',fontSize:'14px',fontWeight:'400'}} to={'/new'}>See All</Link>
      </div>
      <CardContainer listImg={listPro} />
    </Container>
    
  )
}

export default NewThisWeek