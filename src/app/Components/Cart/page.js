import React from 'react'
import PickupToggle from '../PickupToggle/page'
import SelectDate from '../SelectDate/page'
import Image from 'next/image'
import { Button } from 'react-bootstrap'

export default function Cart() {
    return (
        <section className='cart_page ms-auto'>
            <div className='cart_header'>
                <div className='mb-3'>
                    <PickupToggle />
                </div>
                <div>
                    <SelectDate />
                </div>
            </div>
            
            <div className='chef_cart'>
                <div className='c_name d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div className='chef_img rounded-circle'>
                            <Image src="/images/chefImg.png" alt='Icon' width={39} height={39} className='rounded-circle' />
                        </div>
                        Chef Priya N.
                    </div>

                    <span className='text-capitalize cursor-pointer view_menu_text orange-text'>View Menu</span>
                </div>
                <div className='c_item_container'>
                    <div className='each_c_item d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center item_view'>
                            <div className='item_img'>
                                <Image src="/images/foodSample1.png" alt='Icon' width={68} height={68} className='rounded' />
                            </div>
                            <div className='item_dtls'>
                                <h5 className='mb-1 fw-bold'>Mutton/Goat Biryani</h5>
                                <p className='mb-0'>&#x24;12.99</p>
                            </div>
                        </div>
                        <div className='item_qty d-flex align-items-center justify-content-between'>
                            <div className='minus_img cursor-pointer d-flex align-items-center justify-content-center' >
                                <Image src="/images/minus_gray.svg" alt='Icon' width={18} height={18} />
                            </div>
                            <input value={1} className='w-100 border-0 outline-0 text-center fw-bold' />
                            <div className='plus_img cursor-pointer d-flex align-items-center justify-content-center'>
                                <Image src="/images/plus_orange.svg" alt='Icon' width={18} height={18} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='c_name d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div className='chef_img rounded-circle'>
                            <Image src="/images/chefImg.png" alt='Icon' width={39} height={39} className='rounded-circle' />
                        </div>
                        Chef Priya N.
                    </div>

                    <span className='text-capitalize cursor-pointer view_menu_text orange-text'>View Menu</span>
                </div>
                <div className='c_item_container'>
                    <div className='each_c_item d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center item_view'>
                            <div className='item_img'>
                                <Image src="/images/foodSample1.png" alt='Icon' width={68} height={68} className='rounded' />
                            </div>
                            <div className='item_dtls'>
                                <h5 className='mb-1 fw-bold'>Mutton/Goat Biryani</h5>
                                <p className='mb-0'>&#x24;12.99</p>
                            </div>
                        </div>
                        <div className='item_qty d-flex align-items-center justify-content-between'>
                            <div className='minus_img cursor-pointer d-flex align-items-center justify-content-center' >
                                <Image src="/images/minus_gray.svg" alt='Icon' width={18} height={18} />
                            </div>
                            <input value={1} className='w-100 border-0 outline-0 text-center fw-bold' />
                            <div className='plus_img cursor-pointer d-flex align-items-center justify-content-center'>
                                <Image src="/images/plus_orange.svg" alt='Icon' width={18} height={18} />
                            </div>
                        </div>
                    </div>
                    <div className='each_c_item d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center item_view'>
                            <div className='item_img'>
                                <Image src="/images/foodSample1.png" alt='Icon' width={68} height={68} className='rounded' />
                            </div>
                            <div className='item_dtls'>
                                <h5 className='mb-1 fw-bold'>Mutton/Goat Biryani</h5>
                                <p className='mb-0'>&#x24;12.99</p>
                            </div>
                        </div>
                        <div className='item_qty d-flex align-items-center justify-content-between'>
                            <div className='minus_img cursor-pointer d-flex align-items-center justify-content-center' >
                                <Image src="/images/minus_gray.svg" alt='Icon' width={18} height={18} />
                            </div>
                            <input value={1} className='w-100 border-0 outline-0 text-center fw-bold' />
                            <div className='plus_img cursor-pointer d-flex align-items-center justify-content-center'>
                                <Image src="/images/plus_orange.svg" alt='Icon' width={18} height={18} />
                            </div>
                        </div>
                    </div>
                    <div className='each_c_item d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center item_view'>
                            <div className='item_img'>
                                <Image src="/images/foodSample1.png" alt='Icon' width={68} height={68} className='rounded' />
                            </div>
                            <div className='item_dtls'>
                                <h5 className='mb-1 fw-bold'>Mutton/Goat Biryani</h5>
                                <p className='mb-0'>&#x24;12.99</p>
                            </div>
                        </div>
                        <div className='item_qty d-flex align-items-center justify-content-between'>
                            <div className='minus_img cursor-pointer d-flex align-items-center justify-content-center' >
                                <Image src="/images/minus_gray.svg" alt='Icon' width={18} height={18} />
                            </div>
                            <input value={1} className='w-100 border-0 outline-0 text-center fw-bold' />
                            <div className='plus_img cursor-pointer d-flex align-items-center justify-content-center'>
                                <Image src="/images/plus_orange.svg" alt='Icon' width={18} height={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cart_footer border-top d-flex align-items-center justify-content-between'>
                <h4 className='mb-0 fw-bold'>&#x24; 25.99 <span>/ 1 Items</span></h4>
                <Button className='text-capitalize fw-bold'>Check Out</Button>
            </div>
        </section>
    )
}
