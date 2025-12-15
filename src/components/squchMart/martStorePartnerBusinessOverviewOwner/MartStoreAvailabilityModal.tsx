import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import { DatePicker } from "rsuite";


const MartStoreAvailabilityModal = ({ show, handleClose }: any) => {
        /***check radio */
        const [selected, setSelected] = useState('Delivery only');
        /****check radio */
            
        const [time1, setTime1] = useState<Date | null>(null);
        const [time2, setTime2] = useState<Date | null>(null);
  return (
    
     
    <Modal show={show} onHide={handleClose} centered className="host-profile-modal common-modal-sec pt-4">
        <Modal.Header className='border-0'>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="common-modal-body p-0">
            <div className='modal-box-from'>
                <div className='heading p-3 pt-4 pb-0'>
                    <h2 className='border-0 m-0 p-0'>Mart / Store Type & Availability</h2>
                </div>
                <hr className='light-bg mb-3 mb-0'/>
                <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                    <div className="profile-owner p-16 pt-0 pb-0">
                        <div className="row mt-4">                              
                            <div className="col-md-12 mb-4">
                                <div className="location-map-outlate mb-24">
                                    <h3>Describe Your Mart Or Grocery Store</h3>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch4" label="Supermarket" checked/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch5" label="Mini Mart"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch6" label="Organic Food Store"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch7" label="Beverage Store"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch8" label="Wholesale Grocery Supplier"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch9" label="Local Kirana Store"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch10" label="Online Grocery Delivery Mart"/>
                                    </div>                                   
                                </div>
                                <Link className="seeAll" href="">See All</Link>
                            </div>

                            <div className="col-md-12 mb-4">
                                <div className="location-map-outlate mb-24">
                                    <h3>Choose Categories</h3>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch4" label="Dairy" checked/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch5" label="Packed Food"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch6" label="Masalas"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch7" label="Fresh Fruits"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch8" label="Cereals and Breakfast"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch9" label="Biscuits and Cakes"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch10" label="Meat and Seafood"/>
                                    </div>                                   
                                </div>
                                <Link className="seeAll" href="">See All</Link>
                            </div>                          

                            <div className="col-md-12">
                                <div className="location-map-outlate mb-24">
                                    <h3>Mark availability</h3>
                                    <p className="m-0 p-0 pt-2">Don’t forget to uncheck your day off</p>
                                </div>
                                <div className="checkbox-inline "> 
                                    <div className="customise-status w-100">
                                        <Form.Check type="checkbox" id="custom-switch22" label="Monday" checked/>
                                    </div>
                                    <div className="timmer-box-mid row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <Form.Label className="d-none">Start time</Form.Label>
                                                <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-2">
                                                <Form.Label className="d-none">End Time</Form.Label>
                                                <DatePicker className="w-100" format="HH:mm:ss" value={time2} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime2(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch23" label="Tuesday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch24" label="Wednesday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch25" label="Thursday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch26" label="Friday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch27" label="Saturday"/>
                                    </div>
                                    <div className="customise-status">
                                        <Form.Check type="checkbox" id="custom-switch28" label="Sunday"/>
                                    </div>
                                </div>
                                
                                <div className="checkbox-inline d-flex align-items-center gap-2">
                                    <div className="customise-status small-text">
                                        <Form.Check type="checkbox" id="custom-switch29" label="Please confirm that you meet hygiene and quality standards."  checked/>
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
            <button className='btn btn-secondary' >Confirm</button>
        </Modal.Footer>
    </Modal>
  )
}

export default MartStoreAvailabilityModal