"use client";
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

export default function Filters() {
    const [showProteins, setShowProteins] = useState(false);
    const [showDietary, setShowDietary] = useState(false);
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [ value, setValue ] = useState(0); 

    const handleClose = () => {setShowProteins(false); setShowDietary(false); setShowMoreFilters(false)}
    const handleShowProteins = () => setShowProteins(true);
    const handleShowDietary = () => setShowDietary(true);
    const handleShowMoreFilters = () => setShowMoreFilters(true);
    return (
        <>
            <div className='d-flex align-items-center flex-wrap'>
                <div className='each-filter d-flex align-items-center cursor-pointer' onClick={handleShowProteins}>Proteins
                    <span className='filter_count rounded-circle d-flex align-items-center justify-content-center ms-1'>2</span>
                    <Image src="/images/down_angle.svg" alt='Icon' width={12} height={12} className='ms-1' />
                </div>
                <div className='each-filter d-flex align-items-center cursor-pointer' onClick={handleShowDietary}>Dietary
                    <Image src="/images/down_angle.svg" alt='Icon' width={12} height={12} className='ms-1' />
                </div>
                <div className='each-filter d-flex align-items-center cursor-pointer' onClick={handleShowMoreFilters}>More Filter
                    <Image src="/images/down_angle.svg" alt='Icon' width={12} height={12} className='ms-1' />
                </div>
            </div>

            {/* Proteins Filter Modal */}
            <Modal centered className='default_modal' show={showProteins} onHide={handleClose}>
                <Modal.Header closeButton className='d-flex align-items-center justify-content-end flex-row-reverse border-bottom-0'>
                    <Modal.Title>Proteins</Modal.Title>
                </Modal.Header>
                <Modal.Body className='my-0'>
                    <div className='filter-container d-flex flex-wrap'>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center active'>
                            <Image src="/images/chicken.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/chicken_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Chicken
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/beef.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/beef_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Beef
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/fish.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/fish_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Fish
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/pork.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/pork_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Pork
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center active'>
                            <Image src="/images/egg.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/egg_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Egg
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/chicken.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/chicken_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Seafood
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='border-top-0'>
                    <Button className='w-100 m-0' variant="primary" onClick={handleClose}>
                        View Dishes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Dietary Filter Modal */}
            <Modal centered className='default_modal' show={showDietary} onHide={handleClose}>
                <Modal.Header closeButton className='d-flex align-items-center justify-content-end flex-row-reverse border-bottom-0'>
                    <Modal.Title>Dietary</Modal.Title>
                </Modal.Header>
                <Modal.Body className='my-0'>
                    <div className='filter-container d-flex flex-wrap'>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center active'>
                            <Image src="/images/Vegeterian.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/Vegeterian_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Vegeterian
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/Vegan.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/Vegan_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Vegan
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/GlutenFree.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/GlutenFree_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Gluten Free
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/Organic.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/Organic_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Organic
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center active'>
                            <Image src="/images/Halal.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/Halal_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Halal
                        </div>
                        <div className='ef-item d-flex flex-column align-items-center justify-content-center text-center'>
                            <Image src="/images/DairyFree.svg" alt='Icon' width={45} height={45} className='b_icon'/>
                            <Image src="/images/DairyFree_o.svg" alt='Icon' width={45} height={45} className='o_icon'/>
                            Dairy Free
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='border-top-0'>
                    <Button className='w-100 m-0' variant="primary" onClick={handleClose}>
                        View Dishes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* MoreFilters Filter Modal */}
            <Modal centered className='default_modal' show={showMoreFilters} onHide={handleClose}>
                <Modal.Header closeButton className='d-flex align-items-center justify-content-end flex-row-reverse border-bottom-0'>
                    <Modal.Title>MoreFilters</Modal.Title>
                </Modal.Header>
                <Modal.Body className='my-0'>
                    <div className='filter-container w-100'>
                        <div className='mb-5'>
                            <RangeSlider value={value} onChange={changeEvent => setValue(changeEvent.target.value)} />
                        </div>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer className='border-top-0'>
                    <Button className='w-100 m-0' variant="primary" onClick={handleClose}>
                        View Dishes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
