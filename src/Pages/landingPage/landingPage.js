import React from 'react'
import Home from '../../Components/Home/Home'
import NewThisWeek from '../../Components/NewThisWeek/NewThisWeek'
import { Container } from 'react-bootstrap'
import ProductsComponent from '../../Components/productsComponent/ProductsComponent'
import CardContainer from '../../Components/CardContainer/CardContainer'
import CardImages from '../../Components/cardImages/CardImages'
import Footer from '../../Utilits/Footer/Footer'

const landingPage = ({toggle}) => {
  const fashionImg = [
    // require('../../assets/images/picture/fashion/image.png'),
    require('../../assets/images/picture/fashion/image copy.png'),
    require('../../assets/images/picture/fashion/image copy.png'),
    // require('../../assets/images/picture/fashion/image copy 2.png'),
    require('../../assets/images/picture/fashion/image copy 3.png'),
    require('../../assets/images/picture/fashion/image copy 3.png'),
  ]
  return (
    <div className="landing-page">
      <Container>

      <Home toggle={toggle} />
      <NewThisWeek />
      <h1 style={{textTransform:'uppercase',fontWeight:'bold',fontSize:'48px',width:'372px'}} >Man mode
                          Collections
                          24-25</h1>
      </Container>
      <ProductsComponent/>
      <div className='w-100 d-flex align-items-center justify-content-center flex-column'>
        <h1 style={{textTransform:'uppercase'}}>Our Approach to fashion design</h1>
        <p className='w-50 text-center'>at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
      </div>
      <CardImages listImg={fashionImg}/>
      <Footer />
    </div>
  )
}

export default landingPage