import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FoodDeliveryAlternativeItmesModal from './MartDeliveryAlternativeItmesModal'

const MenuItemList = () => {
        const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    
    
        const handleCloseAll = () => {
            setShowConfirmationModal(false);
        };
    
        const handleAcceptOrder = () => {
            setShowConfirmationModal(true); 
        };

  return (
    <div className='menu-item-list-sec'>
        <div className='items-available-sec '>
            <div className="row">
                <div className="col-md-12 mb-3">
                    <h3>Item lists</h3>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch1" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Beetroot</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch2" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Broccoli</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">             
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch3" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Corns</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch4" className='m-0 mh-auto' label="" checked/>
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Carrot</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch5" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Cabbage</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch6" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Capsicum</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch7" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Spinach</span>
                            </div>
                            <div className='price-list-item'>
                              ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch8" className='m-0 mh-auto' label="" checked/>
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Bottle Gourd</span>
                            </div>
                            <div className='price-list-item'>
                            ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch9" className='m-0 mh-auto' label="" checked/>
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Mushroom</span>
                            </div>
                            <div className='price-list-item'>
                            ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch10" className='m-0 mh-auto' label="" />
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg> 
                                </span>
                                <span className='text'>Garlic</span>
                            </div>
                            <div className='price-list-item'>
                            ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch11" className='m-0 mh-auto' label="" checked/>
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Lady Finger</span>
                            </div>
                            <div className='price-list-item'>
                            ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                            <div className='icons-text d-flex align-items-center gap-1'>
                                <span className='checkbox-item'>
                                    <Form.Check type="checkbox" id="custom-switch12" className='m-0 mh-auto' label="" checked/>
                                </span>
                                <span className='icons item-card-d me-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                </span>
                                <span className='text'>Sweet Potato</span>
                            </div>
                            <div className='price-list-item'>
                            ₵20.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='row mt-4'>
                <ul className='listing-sub-total-sec d-flex align-items-center justify-content-between gap-2'>
                    <li>
                        Please select at least 1 alternative item
                        <span className='d-block'>0 of 4 selected</span>
                    </li>
                    <li>
                        <Button type="button" className='btn btn-secondary'  onClick={handleAcceptOrder}> Continue</Button>
                    </li>
                </ul>
            </div>

        </div>
        
        <FoodDeliveryAlternativeItmesModal show={showConfirmationModal} handleClose={handleCloseAll} />

    </div>
  )
}

export default MenuItemList