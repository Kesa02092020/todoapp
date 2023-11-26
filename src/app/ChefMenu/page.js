"use client";
import React from 'react'
import Header from '../Components/Header/page'
import { Container, Row, Col } from 'react-bootstrap';
import Cart from '../Components/Cart/page';
import Image from 'next/image';

export default function Chefmenu() {
  return (
    <main>
      <Header />
      <Container fluid className='chef_profile_page'>
        <Row>
          <Col className='px-0 d-flex'>
            <section>
              <div className='cp_banner'>
                <div className='cp_banner_img'>
                  <Image src="/images/banner_img.png" alt='Icon' width={1280} height={203} className='' />
                </div>
              </div>
            </section>
            <Cart />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

