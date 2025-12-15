import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import MartStoreOrderConfirmationModal from './MartStoreOrderConfirmationModal';
import MartStoreOrderRejectModal from './MartStoreOrderRejectModal';
import MartOutOfStockModal from './MartOutOfStockModal';

const OrdersFullDetailsModal = ({ show, handleClose }: any) => {
      const [showConfirmationModal, setShowConfirmationModal] = useState(false);
        const [showRejectModal, setShowRejectModal] = useState(false);
        const [showOutOfStockModal, setShowOutOfStockModal] = useState(false);

        const handleCloseAll = () => {
        setShowConfirmationModal(false);
        setShowRejectModal(false);
        setShowOutOfStockModal(false);
        handleClose();
    };
      

      const handleAcceptOrder = () => {
        handleClose();
        setShowConfirmationModal(true); 
    };

    const handleRejectOrder = () => {
        handleClose(); 
        setShowRejectModal(true); 
    };

    const handleOutOfStockModal = () => {
        handleClose(); 
        setShowOutOfStockModal(true); 
    };
  return (
    <>
     
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec pt-4">
        <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Order Details</h2>
                </div>
               <hr className='light-bg mt-3 mb-3'/>   
                <div className='modal-body-box p-3'>
                    <div className='top-details-modal-box d-flex justify-content-between flex-wrap gap-3'> 
                        <div className='order-modal-details'>
                            <h5>Order Id</h5>
                            <p className='m-0 p-0'>#12356</p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Order Date & Time</h5>
                            <p className='m-0 p-0'>24-03-2025 | 08:30 pm </p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Preparation Time</h5>
                            <p className='m-0 p-0'>30-40 min.</p>
                        </div>
                        <div className='order-modal-details'>
                            <h5>Order Status</h5>
                            <p className='m-0 p-0'>Delivered</p>
                        </div>
                    </div>
                    <div className='bottom-details-modal-box'>
                        <div className='row'>
                            <div className='col-md-6 mb-3 mb-md-0'>
                                <div className='payment-right-details'>
                                    <div className='payment-box'>
                                        <h4 className='text-green'>Payment Summary</h4>
                                        <ul className='d-flex align-items-center flex-wrap justify-content-between gap-3'>
                                            <li>
                                                <span className='text-top-h d-block'>Amount</span>
                                                <span className='text-botton-h d-block'>₵59.15</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Payment Method</span>
                                                <span className='text-botton-h d-block'>online ( Orange Money)</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>payment status</span>
                                                <span className='text-top-h text-green d-block'>Paid</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='payment-box'>
                                        <h4>Customer details</h4>
                                        <ul className='d-flex align-items-center flex-wrap justify-content-between gap-3'>
                                            <li>
                                                <span className='text-top-h d-block'>Customer Name</span>
                                                <span className='text-botton-h d-block'>Jaydon Frankie</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Phone Number</span>
                                                <span className='text-botton-h d-block'>+27 683 055 690</span>
                                            </li>
                                            <li>
                                                <span className='text-top-h d-block'>Rating</span>
                                                <span className='text-bottom-h d-flex align-items-center gap-1'><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#262626"/></svg> 4.2</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='payment-summary-modal grey-bg p-16'>
                                    <h4>Payment Summary</h4>
                                    <div className='payment-box top-box'>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2 mb-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> Green Peas (500 gms) </li>
                                            <li>₵20.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2 mb-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> Potato (500 gms) </li>
                                            <li>₵24.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2 mb-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> Hybrid tomato (1 kg) </li>
                                            <li>₵24.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li className='d-flex align-items-center gap-2 mb-2'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="5.99933" r="2.84211" fill="#20A66A"/></svg> Premium Guava (500gms) </li>
                                            <li>₵24.00</li>
                                        </ul>
                                    </div>
                                    <div className='payment-box bottom-box'>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Items Total</li>
                                            <li>₵44.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Packing Charges</li>
                                            <li>10.00</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Taxes</li>
                                            <li>₵5.15</li>
                                        </ul>
                                        <ul className='d-flex align-items-center justify-content-between gap-2'>
                                            <li>Discount</li>
                                            <li>₵0.00</li>
                                        </ul>
                                    </div>
                                    <div className='payment-box total-box'>
                                        <div className='d-flex align-items-center justify-content-between gap-2'>
                                            <h3>Total</h3>
                                            <h3>₵59.15</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
       <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-between ">
                    <div className='btn-right-footer-box'>
                        <button className='btn btn-primary btn-orange m-0' onClick={handleRejectOrder}>
                            Reject Order
                        </button>
                    </div>
                    <div className='btn-right-footer-box d-flex align-items-center gap-2'>
                        <button type='button' className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleOutOfStockModal}>
                            Mark Out of Stock
                        </button>
                        <button className='btn btn-secondary m-0' onClick={handleAcceptOrder}>
                            Accept Order
                        </button>
                    </div>
                </Modal.Footer>
    </Modal>

    <MartStoreOrderConfirmationModal show={showConfirmationModal} handleClose={handleCloseAll}/>
<MartStoreOrderRejectModal show={showRejectModal} handleClose={handleCloseAll}/>
<MartOutOfStockModal show={showOutOfStockModal} handleClose={handleCloseAll}/>
    </>
  )
}

export default OrdersFullDetailsModal