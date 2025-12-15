'use client';
import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import { DatePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';

const AddTableTimingModal = ({ show, handleClose }: any) => {
    const [time1, setTime1] = useState<Date | null>(null);
  return (
    
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec modal-small-box pt-4">
        <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box-from'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Add Table Timing</h2>
                </div>
                <hr className='light-bg mb-3 mb-0'/>
                <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                    <div className="profile-owner p-16 pt-0 pb-0">
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="form-group mb-24">
                                <Form.Label>Dine Out Preference</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Your Preference</option>
                                    <option value="1">Lunch</option>
                                    <option value="2">Dinner</option>
                                </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="timmer-box-mid">
                                    <div className="form-group mb-2">
                                        <Form.Label className="">Select  Time</Form.Label>
                                        <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-md-end justify-content-center mt-0 ">
            <Link href="" className='btn btn-primary btn-grey btn-full-grey' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary' >Save</button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddTableTimingModal