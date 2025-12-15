import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

const PromocodeDetailsModal = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec">
       <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className='modal-box'>
                <div className='heading p-0'>
                    <h2 className='border-0 m-0 p-0'>Promocode Details</h2>
                </div>
                <hr className='light-bg mt-3 mb-3'/>   
                <div className='promocode-sec-modal'>
                    <h3>“FIRST50”</h3>
                    <p>Get $50 off on your first bus booking on minimum booking amount of $100</p>
                    <div className='promo-com-box d-flex flex-md-nowrap flex-wrap align-items-center top-promo-box'>
                        <div className='promo-box'>
                            <h6>Valid From :</h6>
                            <span>27-04-2025</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Valid Through :</h6>
                            <span>27-04-2025</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Discount For:</h6>
                            <span>New Users Only</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Min Amount:</h6>
                            <span>$100</span>
                        </div>
                    </div>
                    <div className='promo-com-box d-flex flex-md-nowrap flex-wrap align-items-center'>
                        <div className='promo-box'>
                            <h6>Discount Type:</h6>
                            <span>Flat</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Unit :</h6>
                            <span>$ Amount</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Discount of:</h6>
                            <span>$50</span>
                        </div>
                        <div className='promo-box'>
                            <h6>Specific Day:</h6>
                            <span>All Days</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-3 ">
            <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0'>Edit</Link>
            <button className='btn btn-secondary m-0' onClick={handleClose}>Close</button>
        </Modal.Footer>
    </Modal>
  )
}

export default PromocodeDetailsModal