import React, { useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DatePickers from '@/components/DatePickers';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import PromocodeConfirmationModal from './PromocodeConfirmationModal';
// import PromocodeConfirmationModal from './PromocodeConfirmationModal';
// import MapLocation from './MapLocation';

const CreatePromocodeModal = ({ show, handleClose }: any) => {
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    
    const handleCloseAll = () => {
        setShowConfirmationModal(false);
        handleClose();
    };
    // const handleAcceptOrder = () => {
    //     handleClose();
    //     setShowConfirmationModal(true); 
    // };

  return (
    <>
        <Modal show={show && !showConfirmationModal } onHide={handleClose} centered className="modal-filter common-modal-sec pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="common-modal-body">
                <div className='modal-box'>
                    <div className='heading'>
                        <h2>Create a Promocode</h2>
                    </div>
                    <Form className='position-relative'>    
                            <div className='row'> 
                                <div className='col-md-9'>
                                    <div className="form-group mb-24">
                                        <Form.Label>Create Promocode</Form.Label>
                                        <Form.Control type="text" placeholder="ie: SQUCHCODE100"  aria-label="ie: SQUCHCODE100" />
                                    </div>
                                </div> 
                                <div className='col-md-3'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Auto Apply</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Yes</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </div>
                                </div>    
                                <div className='col-md-12'>
                                    <div className="form-group mb-24">
                                        <Form.Label>Promocode Description</Form.Label>
                                        <Form.Control type="text" placeholder="Describe what are the use case for your customers"  aria-label="Describe what are the use case for your customers" />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Applied For</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>New User</option>
                                            <option value="1">New User one</option>
                                            <option value="2">New User two</option>
                                        </Form.Select>
                                    </div>
                                </div> 
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Discount type</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Discount type</option>
                                            <option value="1">Discount type one</option>
                                            <option value="2">Discount type two</option>
                                        </Form.Select>
                                    </div>
                                </div> 
                                <div className='col-md-4'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Unit</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>$ amount</option>
                                            <option value="1">$ amount 1</option>
                                            <option value="2">$ amount 2</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Discount Value</Form.Label>
                                        <Form.Control type="text" placeholder="$100"  aria-label="$100" />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Min Order Value</Form.Label>
                                        <Form.Control type="text" placeholder="$500"  aria-label="$500" />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Valid From</Form.Label>
                                        <DatePickers />
                                    </div>
                                </div>
                                <div className='col-md-4 mb-0'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Valid Through</Form.Label>
                                        <DatePickers />
                                    </div>
                                </div>
                                <div className='col-md-8 mb-0'>
                                    <div className="form-group mb-1">
                                        <Form.Label>Select Apply Date</Form.Label>
                                        <ul className='calendy-day-calen d-flex align-items-center gap-md-2 gap-1 justify-content-between'>
                                            <li>
                                                <Link href="" className='btn-day'>Sun</Link>
                                            </li>
                                            <li className='active'>
                                                <Link href="" className='btn-day'>Mon</Link>
                                            </li>
                                            <li>
                                                <Link href="" className='btn-day'>Tue</Link>
                                            </li>
                                            <li className='active'>
                                                <Link href="" className='btn-day'>Wed</Link>
                                            </li>
                                            <li>
                                                <Link href="" className='btn-day'>Thu</Link>
                                            </li>
                                            <li className='active'>
                                                <Link href="" className='btn-day'>Fri</Link>
                                            </li>
                                            <li>
                                                <Link href="" className='btn-day'>Sat</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </Form>
                </div>
            </Modal.Body>
            <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-0 ">
                <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>Cancel</Link>
                <button className='btn btn-secondary ' onClick={() => setShowConfirmationModal(true)}>Create Offer</button>
            </Modal.Footer>
        </Modal>

        <PromocodeConfirmationModal show = {showConfirmationModal} handleClose={handleCloseAll} />
    </>
  )
}

export default CreatePromocodeModal