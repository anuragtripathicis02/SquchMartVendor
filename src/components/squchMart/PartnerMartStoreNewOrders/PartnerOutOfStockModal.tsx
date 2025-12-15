import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import AdminDashboard from '../../../../public/images/joseph-img.png'

const PartnerOutOfStockModal  = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec out-of-stock-modal-sec pt-4">
    <Modal.Header className='border-0'>
        <Button variant="close-btn" onClick={handleClose}>
            <Image src={CloseModal} alt="" />
        </Button>
    </Modal.Header>
    <Modal.Body className="common-modal-body p-0">
        <div className='modal-box'>
            <div className='heading p-3 pt-4 pb-0'>
                <h2 className='border-0 m-0 p-0'>Select Out of Stock Item</h2>
            </div>
           <hr className='light-bg mt-3 mb-3'/>   
            <div className='modal-body-box p-3'>
                <div className='top-details-modal-box'> 
                   
                    <div className='w-100 order-slider-box'>
                        <div className='heading-top'>
                            <h6 className='mb-3'>You can Select more than 1 item</h6>
                        </div>
                        <div className='top-box d-flex gap-2 justify-content-between '>
                            <div className='left-box'>
                                <h4>Item Details</h4>
                            </div>
                        </div>
                        <div className='item-box'>
                        <ul className='checkbox-inline  d-flex align-items-center justify-content-between gap-2'>
                            <li className='customise-status d-flex align-items-center gap-2'>
                                    <span className='d-block'>
                                         <Form.Check type="checkbox" id="custom-switch20" className='m-0' label=""/>
                                    </span>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Green Peas (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='checkbox-inline  d-flex align-items-center justify-content-between gap-2'>
                                <li className='customise-status d-flex align-items-center gap-2'>
                                    <span className='d-block'>
                                         <Form.Check type="checkbox" id="custom-switch21" className='m-0' label=""/>
                                    </span>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Potato (500 gms)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                            <ul className='checkbox-inline  d-flex align-items-center justify-content-between gap-2'>
                                <li className='customise-status d-flex align-items-center gap-2'>
                                    <span className='d-block'>
                                         <Form.Check type="checkbox" id="custom-switch21" className='m-0' label=""/>
                                    </span>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                            <ul className='checkbox-inline  d-flex align-items-center justify-content-between gap-2'>
                                <li className='customise-status d-flex align-items-center gap-2'>
                                    <span className='d-block'>
                                         <Form.Check type="checkbox" id="custom-switch21" className='m-0' label=""/>
                                    </span>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Premium Guava (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                        </div>

                        
                        <div className='total-bill mb-0'>
                            <div className='w-100 price-box d-flex align-items-center justify-content-between gap-2 mb-3 mt-4'>
                                <span className='payment-text'>Total</span>
                                <span className='payment-text'>₵44.00</span>
                            </div>
                            <div className='w-100 price-box d-flex align-items-center justify-content-between gap-2'>
                                <span className='text-green'>Amount Paid</span>
                                <span className='text-green'>₵44.00</span>
                            </div>
                        </div>

                    </div>
                                   
                </div>

                <div className='admin-card-box border-0 p-0'>
                    <div className='top-admin-contact d-flex flex-md-nowrap flex-wrap align-items-center gap-2 justify-content-between m-0'>
                        <div className='delivery-executive'>
                            <h5>Delivery Executive</h5>
                            <p className='m-0 p-0'>Assigning..</p>
                        </div>
                        <div className=' top-inner-admin-contact d-flex align-items-center gap-2'>
                            <div className='admin-img'>
                                <Image alt='' src={AdminDashboard}></Image>
                            </div>
                            <div className='admin-details'>
                                <h5 className='mb-1'>Joseph</h5>
                                <p className='m-0 p-0'>+27 440 370 877</p>
                            </div>
                        </div>
                        <ul className='d-flex align-items-center gap-2'>
                            <li>
                                <Link href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#652669"/><path d="M7.77984 5.35366C7.53984 5.35366 7.29317 5.40699 7.05317 5.52033C6.81317 5.63366 6.5865 5.78033 6.37317 5.97366C6.01317 6.30033 5.75317 6.66033 5.5865 7.06699C5.41984 7.46699 5.33317 7.90033 5.33317 8.36699C5.33317 9.04699 5.49317 9.77366 5.81984 10.5403C6.1465 11.307 6.5865 12.0737 7.13984 12.8337C7.69984 13.6003 8.31984 14.327 9.0065 15.0203C9.69984 15.707 10.4265 16.327 11.1865 16.8803C11.9465 17.427 12.7065 17.867 13.4598 18.187C14.2198 18.507 14.9465 18.667 15.6398 18.667C16.0932 18.667 16.5265 18.587 16.9265 18.427C17.3332 18.267 17.7065 18.0137 18.0398 17.6603C18.4598 17.2337 18.6665 16.767 18.6665 16.2737C18.6665 16.087 18.6265 15.9003 18.5465 15.7337C18.4665 15.5603 18.3465 15.407 18.1732 15.287L15.9932 13.7403C15.8265 13.6203 15.6732 13.5337 15.5265 13.4737C15.3865 13.4137 15.2465 13.3803 15.1198 13.3803C14.9598 13.3803 14.7998 13.427 14.6465 13.5203C14.4932 13.607 14.3332 13.7337 14.1732 13.8937L13.6465 14.4003C13.5732 14.4737 13.4865 14.507 13.3798 14.507C13.3265 14.507 13.2798 14.5003 13.2265 14.487C13.1732 14.467 13.1332 14.447 13.0932 14.4337C12.8732 14.3137 12.5865 14.107 12.2398 13.8137C11.8932 13.5137 11.5398 13.1937 11.1865 12.847C10.8332 12.487 10.5065 12.1403 10.2065 11.787C9.91317 11.4403 9.71317 11.1537 9.59317 10.927C9.57984 10.8937 9.55984 10.8537 9.53984 10.807C9.51984 10.7537 9.51317 10.7003 9.51317 10.6403C9.51317 10.527 9.55317 10.4403 9.6265 10.367L10.1265 9.86033C10.2932 9.69366 10.4198 9.53366 10.4998 9.38033C10.5932 9.22699 10.6398 9.07366 10.6398 8.90699C10.6398 8.78033 10.6132 8.64699 10.5532 8.50033C10.4932 8.35366 10.4065 8.20033 10.2932 8.03366L8.7265 5.82699C8.6065 5.65366 8.4665 5.53366 8.29984 5.46033C8.13317 5.39366 7.9665 5.35366 7.77984 5.35366Z" stroke="white" stroke-miterlimit="10"/><path d="M14.0002 7.66667C14.4002 7.66667 15.0135 7.98 15.5135 8.44667C15.9735 8.87333 16.3335 9.44 16.3335 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9998 5.33333C16.5798 5.33333 18.6665 7.42 18.6665 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#652669"/><path d="M9.66683 16.6663H9.3335C6.66683 16.6663 5.3335 15.9997 5.3335 12.6663V9.33301C5.3335 6.66634 6.66683 5.33301 9.3335 5.33301L14.6668 5.33301C17.3335 5.33301 18.6668 6.66634 18.6668 9.33301V12.6663C18.6668 15.333 17.3335 16.6663 14.6668 16.6663H14.3335C14.1268 16.6663 13.9268 16.7663 13.8002 16.933L12.8002 18.2663C12.3602 18.853 11.6402 18.853 11.2002 18.2663L10.2002 16.933C10.0935 16.7863 9.84683 16.6663 9.66683 16.6663Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6665 9.33301L15.3332 9.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.6665 12.667H12.6665" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Modal.Body>
    
    <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center">
        <button type='button' className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>
             Cancel
        </button>
        <button className='btn btn-primary btn-orange m-0'>
            Confirm
        </button>
    </Modal.Footer>
</Modal>
  )
}

export default PartnerOutOfStockModal