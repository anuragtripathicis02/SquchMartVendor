import React, { useRef, useState } from 'react'
import Image from "next/image";
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";
import { DatePicker } from "rsuite";
import DatePickers from '@/components/DatePickers';


const OutofStock = ({ show, handleClose }: any) => {
        const [selected, setSelected] = useState('Delivery only');
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
                    <h2 className='border-0 m-0 p-0'>Set Time to Mark as Out of Stock</h2>
                </div>
                <hr className='light-bg mb-3 mb-0'/>
                <div className='form-modal-box card-box profile-availability bg-transparent shadow-none ps-0 pt-0 pe-0'>
                    <div className="profile-owner p-16 pt-0 pb-0">
                        <div className='row'>
                            <div className='col-md-12 mb-3'>
                                <h3>Auto Reactive after :</h3>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className='flex-box-column d-flex flex-wrap align-items-center gap-0'>
                                    <div className='w-100 radio-checkbox-box  pt-2 pb-2 m-0 d-flex justify-content-between align-items-center gap-2'>
                                        <div className='text-squch'>
                                            <p>2 Hours</p>
                                        </div>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Delivery only'} onChange={() => setSelected('Delivery only')}/>
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='w-100 radio-checkbox-box pt-2 pb-2 m-0 justify-content-between d-flex align-items-center gap-2'>
                                        <div className='text-squch'>
                                            <p>4 Hours</p>
                                        </div>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Dine-in only'} onChange={() => setSelected('Dine-in only')} />
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='w-100 radio-checkbox-box  pt-2 pb-2 m-0 d-flex justify-content-between align-items-center gap-2'>
                                        <div className='text-squch'>
                                            <p>Next Business Day</p>
                                        </div>
                                        <div className='btn-checkbox'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Both'} onChange={() => setSelected('Both')}/>
                                                <b className='d-block'></b>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='w-100 radio-checkbox-box position-relative flex-wrap pt-2 pb-2 m-0 d-flex justify-content-between align-items-center gap-2'>
                                        <div className='text-squch'>
                                            <p>Customer Date  & Time</p>
                                        </div>
                                        <div className='btn-checkbox ps-0 mt-0'>
                                            <label>
                                                <input type='radio' name='busradio' checked={selected === 'Both1'} onChange={() => setSelected('Both1')}/>
                                                <b className="d-block" style={{ top: -16 }}></b>
                                                
                                                <div className='bottom-form-open w-100'> 
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='candy-box-bottom w-100'>
                                                                <div className="form-group mb-1 mb-md-0">
                                                                    <Form.Label>Date</Form.Label>
                                                                    <DatePickers />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className="timmer-box-mid ">
                                                                <div className="form-group mb-2">
                                                                    <Form.Label className="">Time</Form.Label>
                                                                    <DatePicker className="w-100" format="HH:mm:ss" value={time1} placeholder="-- : -- --" allowClear={false} showHour showMinute showSecond onChange={(value) => setTime1(value)} shouldDisableHour={(hour) => hour < 8 || hour > 18} shouldDisableMinute={(minute) => minute % 15 !== 0} shouldDisableSecond={(second) => second % 30 !== 0}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <hr className='light-bg'/>

                                    <div className='bottom-stock-box'>
                                        <h5 className='mb-2'>Manual Reactivation</h5>
                                        <p className='p-0 m-0'>This item will remain hidden from customers on the Squch app until you turn it back on.</p>
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
            <button className='btn btn-secondary' >Save Details</button>
        </Modal.Footer>
    </Modal>
  )
}

export default OutofStock