import Image from 'next/image'
import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import PickupToggle from '../PickupToggle/page'
import SelectDate from '../SelectDate/page'

export default function Header() {
  return (
    <Container fluid className='ps-lg-18 header py-2'>
      <Row>
        <Col sm={12} className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <div className='menu_icon me-3'>
              <Image src="/images/menu_icon.svg" alt='Menu Icon' width={20} height={20} />
            </div>
            <div className='logo'>
              <Image src="/images/chups_logo.svg" alt='Logo' width={78} height={27} />
            </div>
            <div className='ms-4 ps-3 d-none d-lg-block header_pd'>
              <PickupToggle/>
            </div>
            <div className='ms-3 d-none d-lg-block header_date'>
              <SelectDate />
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='search_input position-relative'>
              <Image src="/images/search_black.svg" alt='Menu Icon' width={20} height={20} className='search_icon position-absolute' />
              <Form.Control type="text" className='gray-input cursor-pointer' placeholder="Search Dishes, Chefs, Cuisines" readOnly />
            </div>
            <div className='header_cart d-flex align-items-center px-2 ms-2 text-capitalize'>
              <Image src="/images/cart_white.svg" alt='Menu Icon' width={20} height={20} className='cart_icon' />
              Cart
              <span className='count_circle rounded-circle d-flex align-items-center justify-content-center'>0</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
