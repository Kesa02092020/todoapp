"use client";
import Image from 'next/image'
import React, { useState } from 'react'

export default function PickupToggle() {
    const [activeClassName, setActiveClassName] = useState('pickup_slide'); // Start with 'pickup'

    const handlePickupClick = () => {
        setActiveClassName('pickup_slide');
    };

    const handleDeliveryClick = () => {
        setActiveClassName('delivery_slide');
    };

    return (
        <div className="switch_pd d-flex align-items-center position-relative">
            <div className={`pickup d-flex align-items-center justify-content-center ${activeClassName === 'pickup_slide' ? 'active' : ''}`} onClick={handlePickupClick}>
                {activeClassName === 'pickup_slide' ? <Image src="/images/bag_orange.svg" alt='Icon' width={18} height={18} /> : <Image src="/images/bag.svg" alt='Menu Icon' width={18} height={18} />}
                Pick up
            </div>
            <div className={`delivery d-flex align-items-center justify-content-center ${activeClassName === 'delivery_slide' ? 'active' : ''}`} onClick={handleDeliveryClick}>
            {activeClassName === 'pickup_slide' ? <Image src="/images/scooter.svg" alt='Icon' width={18} height={18} /> : <Image src="/images/scooter_orange.svg" alt='Menu Icon' width={18} height={18} />}
                Delivery
            </div>
            <span className={`slider round w-50 d-flex position-absolute ${activeClassName}`}></span>
        </div>
    )
}
