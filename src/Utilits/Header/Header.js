import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({toggle,setToggle}) => {
    const headerList = [
        {name:'Home',path:'/'},
        {name:'Collections',path:'/collections'},
        {name:'New',path:'/new'},
    ]
  return (
    <div className='header z-2'>
        <Container >
            <Row className='z-2 position-relative d-flex align-items-center justify-content-between py-3'>
                
                <Col className=' d-flex align-items-center'>
                
                    <span onClick={() =>{setToggle(!toggle)}} style={{fontSize:'30px',cursor:'pointer'}} className="material-symbols-outlined">
                        sort
                    </span>
                {/* <img src={require('../../assets/images/icons/menu.svg')} alt='menu-icon' /> */}
                <ul id='list' className='d-flex m-0 align-items-center justify-content-between gap-4'>
                    {headerList.map((item,index) => {
                        return (
                            <Link className=' text-decoration-none' key={index} to={item.path}>
                                <li className='text-black fw-normal' style={{color:'000',fontSize:'16px'}}>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
                </Col>
                <Col className=' d-flex align-items-center justify-content-center'>
                    <img style={{width:'50px'}}  src={require('../../assets/images/icons/icon.png')} alt='icon' />
                </Col>
                <Col>
                    <ul className='d-flex m-0 align-items-center justify-content-center gap-4'>
                        <button id='fav' style={{outline:'0',border:'0',width:'50px'}}>
                            <img style={{width:'100%'}} src={require('../../assets/images/icons/fav.png')} alt='icon' />
                        </button>
                        <Link id='cart' to={'/cart'}><li className='bg-black px-3 p-2 rounded-5' style={{color:'white',}}>Cart</li></Link>
                        <Link to={'/cart'}><li>
                        <img style={{width:'50px'}}  src={require('../../assets/images/icons/cart.png')} alt='icon' /></li>
                        </Link>
                        <Link to={'/sign-register'}><li>
                        <img style={{width:'50px'}}  src={require('../../assets/images/icons/person.png')} alt='icon' /></li>
                        </Link>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header