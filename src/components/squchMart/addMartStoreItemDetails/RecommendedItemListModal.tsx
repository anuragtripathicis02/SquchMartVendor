import React, { useState } from 'react'
import Image from "next/image";
import '../../../app/flags.css'
import { Accordion, Button, Form, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import { DatePicker } from "rsuite";


const RecommendedItemListModal  = ({ show, handleClose }: any) => {
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
                     <h2 className='border-0 m-0 p-0'>Recommended Item List</h2>
                 </div>
                 <hr className='light-bg mb-3 mb-0'/>
                 <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                     <div className="profile-owner p-16 pt-0 pb-0">
                        <div className='heading-top-list top-search-filter-box align-items-center mt-4 mb-4'>
                            <div className='search-left'>
                                <div className='search-box position-relative'>
                                    <InputGroup className='form-group input-width-fixed w-100'>
                                        <Button variant="primary" className='primary-btn'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4444 14.1667L18 17.5M2 9.16667C2 10.9348 2.7492 12.6305 4.0828 13.8807C5.41639 15.131 7.22513 15.8333 9.11111 15.8333C10.9971 15.8333 12.8058 15.131 14.1394 13.8807C15.473 12.6305 16.2222 10.9348 16.2222 9.16667C16.2222 7.39856 15.473 5.70286 14.1394 4.45262C12.8058 3.20238 10.9971 2.5 9.11111 2.5C7.22513 2.5 5.41639 3.20238 4.0828 4.45262C2.7492 5.70286 2 7.39856 2 9.16667Z" stroke="#161925" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg></Button>
                                        <Form.Control type="text" placeholder="Search..." className='full-width-100' />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>

                        <div className='items-available-sec '>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <h3>Burgers(4)</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#BD2F18" stroke-width="0.821053"/><path d="M8.99512 7.5791H3.63867L6.31641 3.71191L8.99512 7.5791Z" fill="#BD2F18" stroke="#BD2F18" stroke-width="0.631579"/></svg>
                                                </span>
                                                <span className='text'>Spicy Zinger Burger and Chicken Meal</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch1" className='m-0' label="" checked/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#BD2F18" stroke-width="0.821053"/><path d="M8.99512 7.5791H3.63867L6.31641 3.71191L8.99512 7.5791Z" fill="#BD2F18" stroke="#BD2F18" stroke-width="0.631579"/></svg>
                                                </span>
                                                <span className='text'>Spicy Zinger Burger</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch2" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons  item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Paneer Zinger Burger</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch3" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Veg Zinger Burger</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch4" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className="col-md-12 mb-3">
                                    <h3>Rolls(5)</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons  item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Paneer Spicy Veg Roll</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch5" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Spicy Veg Roll</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch6" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#BD2F18" stroke-width="0.821053"/><path d="M8.99512 7.5791H3.63867L6.31641 3.71191L8.99512 7.5791Z" fill="#BD2F18" stroke="#BD2F18" stroke-width="0.631579"/></svg>
                                                </span>
                                                <span className='text'>Classic Chicken Roll</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch7" className='m-0' label="" checked/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#BD2F18" stroke-width="0.821053"/><path d="M8.99512 7.5791H3.63867L6.31641 3.71191L8.99512 7.5791Z" fill="#BD2F18" stroke="#BD2F18" stroke-width="0.631579"/></svg>
                                                </span>
                                                <span className='text'>Thai Spicy Chicken Roll</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch8" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row mt-3">
                                <div className="col-md-12 mb-3">
                                    <h3>Sides & Dips</h3>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons  item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Veg Patty</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch9" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Spicy Mix French Fries - Large</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch10" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#BD2F18" stroke-width="0.821053"/><path d="M8.99512 7.5791H3.63867L6.31641 3.71191L8.99512 7.5791Z" fill="#BD2F18" stroke="#BD2F18" stroke-width="0.631579"/></svg>
                                                </span>
                                                <span className='text'>Peri Peri chicken strips - 3 pc</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch11" className='m-0' label="" checked/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>French Fries - Large</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch12" className='m-0' label=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="checkbox-inline pb-2 d-flex border-0 flex-md-nowrap flex-wrap align-items-center gap-xl-5 gap-md-3 gap-4"> 
                                        <div className="customise-status w-100 d-flex align-items-center justify-content-between gap-3">
                                            <div className='icons-text d-flex align-items-center gap-2'>
                                                <span className='icons item-card-d'>
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.410526" y="0.410526" width="11.1789" height="11.1789" rx="2.11579" stroke="#20A66A" stroke-width="0.821053"/><circle cx="5.99835" cy="6.00031" r="2.84211" fill="#20A66A"/></svg>
                                                </span>
                                                <span className='text'>Spicy Mix French Fries - Medium</span>
                                            </div>
                                            <Form.Check type="checkbox" id="custom-switch13" className='m-0' label=""/>
                                        </div>
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

export default RecommendedItemListModal