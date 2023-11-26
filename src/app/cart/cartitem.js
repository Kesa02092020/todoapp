"use client";
import React, { useContext } from 'react';
import Image from 'next/image'
import { Button } from 'react-bootstrap';
import { ContextProvider,CartContext } from './context'; 

const cartitem = () => {
  const {items} = useContext(CartContext); 
  console.log(items);

  return (
    <section className='cart_page w-50 mx-auto'>
    <div className='chef_cart'>   
        {/* <div className='c_name d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <div className='chef_img rounded-circle'>
                    <Image src="/images/chefImg.png" alt='Icon' width={39} height={39} className='rounded-circle' />
                </div>
                Chef Priya N.
            </div>

            <span className='text-capitalize cursor-pointer view_menu_text orange-text'>View Menu</span>
        </div> */}
        <div className='c_item_container'>
            {items.map((item,index) => {
            return(
                <div key={index} className='each_c_item d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center item_view'>
                    <div className='item_img'>
                        <img src={item.img} alt='Icon' width={68} height={68} className='rounded' />
                    </div>
                    <div className='item_dtls'>
                        <h5 className='mb-1 fw-bold'>{item.title}</h5>
                        <p className='mb-0'>&#x24;{item.price}</p>
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
            )}
            )}
           
        </div>
    </div>

    <div className='cart_footer border-top d-flex align-items-center justify-content-between'>
        <h4 className='mb-0 fw-bold'>&#x24; 25.99 <span>/ 1 Items</span></h4>
        <Button className='text-capitalize fw-bold'>Check Out</Button>
    </div>
</section>
  )
}

export default cartitem
