
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import CloseModal from "../../../../public/images/close-modal.png";
import AlternativeAlertConfirmationModal from './AlternativeAlertConfirmationModal';
import OrderUpdatedSummaryModal from './OrderUpdatedSummaryModal';
import Link from 'next/link';


const MartDeliveryAlternativeItmesModal   = ({ show, handleClose }: any) => {
    const [showOutOfStockModal, setShowOutOfStockModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleOutOfStockModal = () => {
        setShowOutOfStockModal(true);
    };

    const handleOutOfStockClosed = () => {
        setShowOutOfStockModal(false);
        setShowSuccessModal(true);
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        handleClose();
    };

    return (
        <>
        <Modal show={show && !showOutOfStockModal && !showSuccessModal} onHide={handleClose} centered className="host-profile-modal common-modal-sec modal-small-box pt-4">
            <Modal.Header className='border-0'>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body p-0">
            <div className='modal-box'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Alternative Items</h2>
                </div>
                <hr className='light-bg mt-3 mb-3'/>   
                <div className='listing-item-modal p-16'>
                    <h5>Unfortunately, this item is currently unavailable. We recommend trying an alternative instead!</h5>

                    <div className='menu-top-sec mt-3'>
                        <div className="checkbox-inline pb-4 mb-4 border-dashed d-flex flex-wrap align-items-center gap-2"> 
                            <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                <div className='icons-text d-flex align-items-center gap-2'>
                                    <span className='icons item-card-d'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                    </span>
                                    <span className='text text-decoration-line-through'><strong>Green Peas (500 gms)</strong></span>
                                </div>
                                <div className='price-list-item text-decoration-line-through'>
                                <strong>₵20.00</strong>
                                </div>
                            </div>
                        </div>

                        <div className='menu-item-list-sec'>
                            <div className='items-available-sec '>
                                <div className="row mt-3">
                                    <div className="col-md-12 mb-3">
                                        <div className='modal-head d-flex align-items-center justify-content-between gap-2'>
                                            <p className='m-0 p-0'>Recommended Alternative Options</p>
                                            <Link href="" className='text-pink'>Change</Link>
                                            
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
                                                        <Form.Check type="checkbox" id="custom-switch4" className='m-0 mh-auto' label="" checked/>
                                                    </span>
                                                    <span className='icons item-card-d me-1'>
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                    </span>
                                                    <span className='text'>Broccoli </span>
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

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Modal.Body>
            <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center ">
                <div className='btn-right-footer-box d-flex align-items-center gap-2'>
                    <button type='button' className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>
                        Cancel
                    </button>
                    <button className='btn btn-secondary m-0' onClick={handleOutOfStockModal}>
                        Send Alternates
                    </button>
                </div>
            </Modal.Footer>
        </Modal>

        <AlternativeAlertConfirmationModal show={showOutOfStockModal} handleClose={handleOutOfStockClosed} />
         <OrderUpdatedSummaryModal show={showSuccessModal} handleClose={handleSuccessModalClose} />
    </>

  )
}

export default MartDeliveryAlternativeItmesModal