import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SortList = ({toggle}) => {
  return (
    <Container>

    <div className='sort-list p-3'>
            <ul className='p-3' style={{position:'absolute',width:'300px',transition:'all 1s',top: toggle ? '-200px' : '100px',zIndex:'1'}}>
                <Link><li>MEN</li></Link>
                <Link><li>WOMEN</li></Link>
                <Link><li>KIDS</li></Link>
                <li style={{position:"relative"}}><input className='w-100 p-2' placeholder='Search' type='text' style={{padding:'5px',border:'none',outline:'none',background:'#D9D9D9'}} /><i className="fa-solid fa-magnifying-glass" style={{position:'absolute',right:'0',top:'50%',transform:'translateY(-50%)'}}></i></li>
            </ul>
    </div>
    </Container>
  )
}

export default SortList