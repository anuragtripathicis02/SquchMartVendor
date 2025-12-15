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

const NotificationPreferences = ({ show, handleClose }: any) => {
  return (
    
    <Modal show={show} onHide={handleClose} centered className="modal-filter common-modal-sec notification-box pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body">
            <div className='modal-box'>
                <div className='heading'>
                    <h2 className='mb-3'>Notification Preferences</h2>
                </div>
                <div className='promocode-sec-modal'>
                    <ul className='d-flex flex-column list-payment list-unstyled m-0'>
                        <li>
                            <label className='d-flex align-items-center border-0 whatsapp-updates'>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>New bookings</b>
                                    <small>Notification alerts for new bookings</small>
                                </div>
                                <div className='swithc-toggle ms-auto'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='d-flex align-items-center border-0 whatsapp-updates'>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>Booking Changes</b>
                                    <small>Notification alerts when guest made changes or cancels the booking</small>
                                </div>
                                <div className='swithc-toggle ms-auto'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='d-flex align-items-center border-0 whatsapp-updates'>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>Payout Status </b>
                                    <small>Notify me when I receive or refund the payment</small>
                                </div>
                                <div className='swithc-toggle ms-auto'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label className='d-flex align-items-center border-0 whatsapp-updates'>
                                <div className='flex-grow-1'>
                                    <b className='payment-ttl d-block'>Chat Notifications </b>
                                    <small>Notify me when I receive a new message</small>
                                </div>
                                <div className='swithc-toggle ms-auto'>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0 ">
            <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary' >Save Preference</button>
        </Modal.Footer>
    </Modal>
  )
}

export default NotificationPreferences