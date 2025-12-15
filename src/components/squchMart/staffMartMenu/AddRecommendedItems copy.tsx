'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from "next/image";
import {  Button, Form } from 'react-bootstrap'
import Pancake from '../../../../public/images/pancake.png'
// import RecommendedItemListModal from './RecommendedItemListModal';

const AddRecommendedItems = () => {
        const [showDateChange, setShowDateChange] = useState(false);

  return (
    <div className="add-recommended-items-sec card-box p-16">
        <div className='d-flex align-items-center justify-content-between gap-2 flex-wrap mb-4'>
            <h2 className='border-0 p-0 m-0'>Add Recommended Items</h2>
            {/* <Button type='button' className='btn btn-secondary' onClick={() => setShowDateChange(true)}> Add Items</Button> */}
            <Button type='button' className='btn btn-secondary'> Add Items</Button>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-6 mb-4'>
                <div className='card-box p-16 item-card-box border'>
                    <div className='top-item-box d-flex flex-wrap gap-2'>
                        <div className='left-details'>
                            <div className='bestseller-box d-flex align-items-center gap-1'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.478947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="6.99938" cy="6.99938" r="3.31579" fill="#20A66A"/></svg>
                                <span>Bestseller</span>
                            </div>
                            <h6>Pancake</h6>
                            <ul className='d-flex align-items-center gap-2'>
                                <li><span>₵60.00</span></li>
                                <li className='d-flex align-items-center gap-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.86447 1.75531L7.74447 3.51531C7.86447 3.76031 8.18447 3.99531 8.45447 4.04031L10.0495 4.30531C11.0695 4.47531 11.3095 5.21531 10.5745 5.94531L9.33447 7.18531C9.12447 7.39531 9.00947 7.80031 9.07447 8.09031L9.42947 9.62531C9.70947 10.8403 9.06447 11.3103 7.98947 10.6753L6.49447 9.79031C6.22447 9.63031 5.77947 9.63031 5.50447 9.79031L4.00947 10.6753C2.93947 11.3103 2.28947 10.8353 2.56947 9.62531L2.92447 8.09031C2.98947 7.80031 2.87447 7.39531 2.66447 7.18531L1.42447 5.94531C0.694466 5.21531 0.929466 4.47531 1.94947 4.30531L3.54447 4.04031C3.80947 3.99531 4.12947 3.76031 4.24947 3.51531L5.12947 1.75531C5.60947 0.800313 6.38947 0.800313 6.86447 1.75531Z" fill="#3D3D3D"/></svg>
                                    <strong>4.2</strong>(186)
                                </li>
                            </ul>
                            <p className='m-0 p-0'>A couple of simple ingredients with no-fuss prep make a roast chicken that many swear is the juiciest they've ever eaten.</p>
                        </div>
                        <div className='right-img position-relative'>
                            <div className='img-btn-review'>
                                <Image alt="" src={Pancake}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-4'>
                <div className='card-box p-16 item-card-box border'>
                    <div className='top-item-box d-flex flex-wrap gap-2'>
                        <div className='left-details'>
                            <div className='bestseller-box d-flex align-items-center gap-1'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.478947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="6.99938" cy="6.99938" r="3.31579" fill="#20A66A"/></svg>
                                <span>Bestseller</span>
                            </div>
                            <h6>Pancake</h6>
                            <ul className='d-flex align-items-center gap-2'>
                                <li><span>₵60.00</span></li>
                                <li className='d-flex align-items-center gap-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.86447 1.75531L7.74447 3.51531C7.86447 3.76031 8.18447 3.99531 8.45447 4.04031L10.0495 4.30531C11.0695 4.47531 11.3095 5.21531 10.5745 5.94531L9.33447 7.18531C9.12447 7.39531 9.00947 7.80031 9.07447 8.09031L9.42947 9.62531C9.70947 10.8403 9.06447 11.3103 7.98947 10.6753L6.49447 9.79031C6.22447 9.63031 5.77947 9.63031 5.50447 9.79031L4.00947 10.6753C2.93947 11.3103 2.28947 10.8353 2.56947 9.62531L2.92447 8.09031C2.98947 7.80031 2.87447 7.39531 2.66447 7.18531L1.42447 5.94531C0.694466 5.21531 0.929466 4.47531 1.94947 4.30531L3.54447 4.04031C3.80947 3.99531 4.12947 3.76031 4.24947 3.51531L5.12947 1.75531C5.60947 0.800313 6.38947 0.800313 6.86447 1.75531Z" fill="#3D3D3D"/></svg>
                                    <strong>4.2</strong>(186)
                                </li>
                            </ul>
                            <p className='m-0 p-0'>A couple of simple ingredients with no-fuss prep make a roast chicken that many swear is the juiciest they've ever eaten.</p>
                        </div>
                        <div className='right-img position-relative'>
                            <div className='img-btn-review'>
                                <Image alt="" src={Pancake}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-4'>
                <div className='card-box p-16 item-card-box border'>
                    <div className='top-item-box d-flex flex-wrap gap-2'>
                        <div className='left-details'>
                            <div className='bestseller-box d-flex align-items-center gap-1'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.478947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="6.99938" cy="6.99938" r="3.31579" fill="#20A66A"/></svg>
                                <span>Bestseller</span>
                            </div>
                            <h6>Pancake</h6>
                            <ul className='d-flex align-items-center gap-2'>
                                <li><span>₵60.00</span></li>
                                <li className='d-flex align-items-center gap-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.86447 1.75531L7.74447 3.51531C7.86447 3.76031 8.18447 3.99531 8.45447 4.04031L10.0495 4.30531C11.0695 4.47531 11.3095 5.21531 10.5745 5.94531L9.33447 7.18531C9.12447 7.39531 9.00947 7.80031 9.07447 8.09031L9.42947 9.62531C9.70947 10.8403 9.06447 11.3103 7.98947 10.6753L6.49447 9.79031C6.22447 9.63031 5.77947 9.63031 5.50447 9.79031L4.00947 10.6753C2.93947 11.3103 2.28947 10.8353 2.56947 9.62531L2.92447 8.09031C2.98947 7.80031 2.87447 7.39531 2.66447 7.18531L1.42447 5.94531C0.694466 5.21531 0.929466 4.47531 1.94947 4.30531L3.54447 4.04031C3.80947 3.99531 4.12947 3.76031 4.24947 3.51531L5.12947 1.75531C5.60947 0.800313 6.38947 0.800313 6.86447 1.75531Z" fill="#3D3D3D"/></svg>
                                    <strong>4.2</strong>(186)
                                </li>
                            </ul>
                            <p className='m-0 p-0'>A couple of simple ingredients with no-fuss prep make a roast chicken that many swear is the juiciest they've ever eaten.</p>
                        </div>
                        <div className='right-img position-relative'>
                            <div className='img-btn-review'>
                                <Image alt="" src={Pancake}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <RecommendedItemListModal show={showDateChange} handleClose={() => setShowDateChange(false)}/> */}
    </div>
  )
}

export default AddRecommendedItems