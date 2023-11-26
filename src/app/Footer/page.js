import React from 'react'
import Image from 'next/image'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className='d-flex align-items-center'>
            <Container fluid className='ps-lg-18 py-2'>
                <Row>
                    <Col sm={12} className='d-flex justify-content-between'>
                        <ListGroup horizontal className='left_group align-items-center'>
                            <ListGroup.Item className='p-0 border-0 cursor-pointer'>
                                <Image src="/images/chups_logo.svg" alt='Logo' width={78} height={27} />
                            </ListGroup.Item>
                            <ListGroup.Item className='p-0 border-0 cursor-pointer fw-bold'>Privacy Policy</ListGroup.Item>
                            <ListGroup.Item className='p-0 border-0 cursor-pointer fw-bold'>Terms & Conditions</ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal className='right_group align-items-center'>
                            <ListGroup.Item className='p-0 border-0'>&#169; Chups . 2023. All Rights Reserved.</ListGroup.Item>
                            <ListGroup.Item className='p-0 border-0 cursor-pointer'>
                                <Image src="/images/app-store-btn.svg" alt='Logo' width={92} height={32} className='cursor-pointer'/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
