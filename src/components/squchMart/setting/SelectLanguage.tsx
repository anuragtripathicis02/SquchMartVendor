import React from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import flag1 from "../../../../public/images/usa.png"
import flag2 from "../../../../public/images/uk.png"
import flag3 from "../../../../public/images/french.png"
import flag4 from "../../../../public/images/oromo.png"
import flag5 from "../../../../public/images/amhase.png"
import flag6 from "../../../../public/images/swahili.png"


const SelectLanguage = ({ show, handleClose }: any) => {
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
                    <h2 className='mb-3'>Select Language</h2>
                </div>
                <div className='promocode-sec-modal'>
                    <ul className='d-flex flex-column list-payment list-unstyled m-0'>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag1} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>English (USA)</b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag2} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>English (UK)</b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag3} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>French </b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag4} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>Oromo </b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag5} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>Amharic </b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag6} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>Swahili </b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag1} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>Hausa </b>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='payment-label d-flex align-items-center'>
                                <input type='radio' name="radio"/>
                                <div className='payment-icon'>
                                    <Image src={flag1} alt=''/>
                                </div>
                                <div className='flex-grow-1'>
                                <b className='payment-ttl d-block'>Yoruba </b>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
            <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary' >Save Details</button>
        </Modal.Footer>
    </Modal>
  )
}

export default SelectLanguage