import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap'

export default function SelectDate() {
  const [selectDate, setSelectDate] = useState(false);

  const handleClose = () => { setSelectDate(false) }
  const handleSelectDate = () => setSelectDate(true);
  return (
    <div className='d-flex align-items-center select_date'>
      <h3 className='fw-bold cursor-pointer' onClick={handleSelectDate}>
        Today - Mon, Sep 11
        <Image src="/images/down_angle.svg" alt='Icon' width={12} height={12} className='ms-2'/>
      </h3>

      {/* Proteins Filter Modal */}
      <Modal centered className='default_modal' show={selectDate} onHide={handleClose}>
        <Modal.Header closeButton className='d-flex align-items-center justify-content-end flex-row-reverse border-bottom-0'>
          <Modal.Title>Select Date</Modal.Title>
        </Modal.Header>
        <Modal.Body className='my-0'>

        </Modal.Body>
        <Modal.Footer className='border-top-0'>
          <Button className='w-100 m-0' variant="primary" onClick={handleClose}>
            View Dishes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
