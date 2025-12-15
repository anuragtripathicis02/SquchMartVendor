import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import OrdersDetailsModal from './OrdersDetailsModal'
import PartnerFoodDeliveryConfirmationModal from './MartStoreOrderConfirmationModal'
import PartnerOutOfStockModal from './PartnerOutOfStockModal'

const MartStoreOrdersList = () => {
    const [showDateChange, setShowDateChange] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
        const [showOutOfStockModal, setShowOutOfStockModal] = useState(false);


    const handleCloseAll = () => {
        setShowConfirmationModal(false);
        setShowOutOfStockModal(false);
    };

    const handleAcceptOrder = () => {
        setShowConfirmationModal(true); 
    };

    const handleOutOfStockModal = () => {
        setShowOutOfStockModal(true); 
    };


  return (
    <div className='food-delivery-list mt-4'>
        <div className='inner-active-order'>
            <div className='row'>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between mb-3'>
                            <div className='left-box'>
                                <h6>#1259</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                        </div>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Green Peas (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <div className='total-bill d-flex align-items-center justify-content-end gap-2'>
                            <Button type='button' className="btn-more d-flex align-items-center gap-2 border-0 p-0"  onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 2 more...
                            </Button>
                        </div>
                        <div className='btn-bottom-card-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-primary bg-grey text-gray w-100' onClick={handleOutOfStockModal}> Out of Stock</Button>
                                </li>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-secondary w-100'  onClick={handleAcceptOrder}> Accept Order</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between mb-3'>
                            <div className='left-box'>
                                <h6>#1260</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                        </div>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <div className='total-bill d-flex align-items-center justify-content-end gap-2'>
                            <Button type='button' className="btn-more d-flex align-items-center gap-2 border-0 p-0"  onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 1 more...
                            </Button>
                        </div>
                        <div className='btn-bottom-card-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-primary bg-grey text-gray w-100' onClick={handleOutOfStockModal}> Out of Stock</Button>
                                </li>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-secondary w-100'  onClick={handleAcceptOrder}> Accept Order</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between mb-3'>
                            <div className='left-box'>
                                <h6>#1261</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                        </div>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Premium Guava (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Green Peas (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                        </div>
                        <div className='total-bill d-flex align-items-center justify-content-end gap-2 h-20'>
                        </div>
                        <div className='btn-bottom-card-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-primary bg-grey text-gray w-100' onClick={handleOutOfStockModal}> Out of Stock</Button>
                                </li>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-secondary w-100' onClick={handleAcceptOrder}> Accept Order</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-xxl-4 col-md-6 mb-4'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between mb-3'>
                            <div className='left-box'>
                                <h6>#1262</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                        </div>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Potato (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <div className='total-bill d-flex align-items-center justify-content-end gap-2'>
                            <Button type='button' className="btn-more d-flex align-items-center gap-2 border-0 p-0"  onClick={() => setShowDateChange(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 2 more...
                            </Button>
                        </div>
                        <div className='btn-bottom-card-box'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-primary bg-grey text-gray w-100' onClick={handleOutOfStockModal}> Out of Stock</Button>
                                </li>
                                <li className='w-100'>
                                    <Button type='button' className='btn btn-secondary w-100' onClick={handleAcceptOrder}> Accept Order</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <OrdersDetailsModal show={showDateChange} handleClose={() => setShowDateChange(false)}/>
        <PartnerFoodDeliveryConfirmationModal show={showConfirmationModal} handleClose={handleCloseAll} />
        <PartnerOutOfStockModal show={showOutOfStockModal} handleClose={handleCloseAll} />
    </div>
  )
}

export default MartStoreOrdersList