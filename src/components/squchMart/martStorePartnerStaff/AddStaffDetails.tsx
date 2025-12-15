import React, { useRef, useState } from 'react'
import '../../../app/flags.css'

import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import DatePickers from '@/components/DatePickers';
import Link from 'next/link';
import CloseModal from "../../../../public/images/close-modal.png";

import { Form, Button, Dropdown } from 'react-bootstrap';
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName';
import LanguageSwitcher from '../Login/LanguageSwitcher';
import AdminDashboard from '../../../../public/images/staff-img.png'

const AddStaffDetails = ({ show, handleClose }: any) => {
    const inputRef = useRef<HTMLInputElement>(null);
        const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    
        const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) setUploadedFile(file);
        };
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setUploadedFile(file);
        };
    
        const triggerUpload = () => {
        inputRef.current?.click();
        };
        
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
                    <h2 className=' pb-3 mb-4'>Add Staff Details</h2>
                </div>
                <Form className='position-relative'>    
                    <div className='img-add-staff-box'>
                        <div className="form-group mb-24">
                            <Form.Label className='d-none'>Upload Profile Image</Form.Label>
                            <div onClick={triggerUpload}
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            className="border-upload text-center d-flex align-items-center justify-content-center"
                            style={{
                                height: '357px',
                                width: '100%',
                                aspectRatio: '3 / 1',
                                cursor: 'pointer',
                            }}
                            >
                            <div className="text-muted small">
                                <div className="fs-4">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#652669"/><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="white"/><path d="M13.5 10.5H10.5V13.5H9.5V10.5H6.5V9.5H9.5V6.5H10.5V9.5H13.5V10.5Z" fill="white"/></svg>
                                </div>
                                {uploadedFile
                                ? uploadedFile.name
                                : ''}
                            </div>
                            <Form.Control
                                type="file"
                                onChange={handleChange}
                                ref={inputRef}
                                className="d-none"
                            />
                            </div>
                        </div>
                    </div>
                    {/* <div className='order-slider-box staff-box card-box p-16'>
                        <div className='admin-card-box border-0 p-0'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                        <span className='active-dot'></span>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Ade (M)</h6>
                                        <p className='m-0 p-0'>Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Full Name</Form.Label>
                                    <Form.Control type="text" placeholder='Ade' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="flag-box form-group mb-24">
                                    <Form.Label className='fw-mediam'>Contact Number</Form.Label>
                                    <div className="d-flex border-outer">
                                        <LanguageSwitcher />
                                        <div className="flex-grow-1">
                                        <Form.Control type="text" aria-describedby="" placeholder='1234567890' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control type="text" placeholder='adequansah@gmial.com' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Password</Form.Label>
                                    <Form.Control type="text" placeholder='123456' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Male</option>
                                        <option value="1">Male</option>
                                        <option value="2">Fe-Male</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Status</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Active</option>
                                        <option value="1">Active</option>
                                        <option value="2">Active</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group mb-24">
                                    <Form.Label >Position</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Manger</option>
                                        <option value="1">Manger</option>
                                        <option value="2">Manger</option>
                                    </Form.Select>
                                </div>
                            </div>
                            
                    </div>
                </Form>
            </div>
        </Modal.Body>
        <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-2 justify-content-end mt-0 ">
            <Link href="" className='btn btn-primary btn-gray bg-grey text-gray m-0' onClick={handleClose}>Cancel</Link>
            <button className='btn btn-secondary '>Save Details</button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddStaffDetails