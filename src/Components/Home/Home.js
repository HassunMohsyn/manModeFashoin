import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import MySwiper from '../CarouselCards/Carousel'
// import SortList from '../SortList/SortList'

const Home = ({toggle}) => {
  const homeImagesArray = [
    'assets/images/picture/home/image.png',
    'assets/images/picture/home/image copy.png',
    'assets/images/picture/home/image.png',
    'assets/images/picture/home/image copy.png',
    'assets/images/picture/home/image.png',
    'assets/images/picture/home/image copy.png',
    'assets/images/picture/home/image.png',
    'assets/images/picture/home/image copy.png',
    
]
  return (
    <div className='home w-100'>

    <Container className='w-100 page  d-flex flex-column justify-content-center'>
        <Row >
        <Col xs={12} md={4}>
        <div className='d-inline-flex flex-column justify-content-between p-2 h-100'>
          <h1 style={{fontSize:'48px',fontWeight:'800',textTransform:'uppercase'}}>
          <h1 style={{fontSize:'48px',fontWeight:'800',textTransform:'uppercase'}}>
          New
          </h1>
          Collection
          <p style={{fontSize:'16px',fontWeight:'400'}}>
            Summer <p style={{fontSize:'16px',fontWeight:'400'}}>2025</p>
          </p>
          </h1>
          <Link to={'/shop'} className='d-flex align-items-center justify-content-between p-2' style={{background:'#D9D9D9',color:'black'}}>Go To Shop <img width={'50px'} src={require('../../assets/images/icons/arrow.png')} alt='arow'/></Link>
        </div>
        </Col>
        <Col xs={12} md={8}>
        {/* <MySwiper arrayImage={homeImagesArray}/> */}
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Home