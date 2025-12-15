import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DatePickers from '@/components/DatePickers';
import { DatePicker } from 'rsuite';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";


const BillingSummeryModal = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className='modal-box'>
                <div className='heading'>
                    <h2>Billing Summery</h2>
                </div>
                <div className='promocode-sec-modal'>
                    <div className='promo-com-box d-flex flex-md-nowrap flex-wrap align-items-center top-promo-box'>
                        <div className='promo-box'>
                            <h6>Booking Date:</h6>
                            <span>27-04-2025</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Booking Time:</h6>
                            <span>27-04-2025</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Booked By:</h6>
                            <span>John Doe</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Seats Booked:</h6>
                            <span>5</span>
                        </div>
                    </div>
                    <div className='promo-com-box d-flex flex-md-nowrap flex-wrap align-items-center'>
                        <div className='promo-box'>
                            <h6>Booking Id :</h6>
                            <span className='video-link'>BKID1234567890</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Route Id :</h6>
                            <span className='video-link'>#1234</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Billing Amount:</h6>
                            <span>₵100</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Your Earnings:</h6>
                            <span className='color-green'>₵95</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
            <Link href="" className='btn btn-grey' >Edit</Link>
            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
        </Modal.Footer>
    </Modal>
  )
}

export default BillingSummeryModal