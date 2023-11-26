"use client";
import Image from 'next/image'
import { Container, Row, Col, Form, Button } from "react-bootstrap"

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className='py-5'>
          <div className='d-flex align-items-center justify-content-center mb-5'>
            <Image src="/images/chups_logo.svg" alt='Logo' width={115} height={40} className='mx-auto' />
          </div>
          <div className='d-flex align-items-center justify-content-center mb-5'>
            <Image src="/images/map.svg" alt='Logo' width={260} height={197} className='mx-auto' />
          </div>
          <div className='text-center d-flex flex-column align-items-center justify-content-center'>
            <h4>View chef in your area</h4>
            <p>We would like to use your phone's location to show you chef's area.</p>
          </div>

          <Button className='mb-4 w-100'>Use Current Location</Button>

          <div className='d-flex align-items-center'>
            <Form.Control type="text" placeholder="Enter Location Name or Zip Code" />
            <Image src="/images/right_arrow_black.svg" alt='Menu Icon' width={18} height={18} />
          </div>


        </Col>
      </Row>
    </Container>
  )
}