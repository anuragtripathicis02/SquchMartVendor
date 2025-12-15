'use client'
import DatePickers from '@/components/DatePickers'
import Link from 'next/link'
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap'
import '../../../app/flags.css';
import LanguageSwitcher from '../Login/LanguageSwitcher'
import LanguageSwitcherCountryName from '@/app/LanguageSwitcherCountryName'
import UploadFile from '../../../../public/images/business-permit-img.png'
import UploadFileTax from '../../../../public/images/tax-registration-img.png'
import MartStoreAvailabilityModal from './MartStoreAvailabilityModal';


const MartStoreProfile = () => {
    const [showDateChange, setShowDateChange] = useState(false);


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
    <div className='operatorProfile-from mb-4'>
        <div className='card-box mb-4'>
            <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h2>Mart / Store Details</h2>
                </div>
            </div>
            <div className='from-bottom-box'>
                <Form>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-xl-3 col-md-6'>
                                    <div className="form-group mb-24">
                                        <Form.Label>Mart / Store Name</Form.Label>
                                        <Form.Control type="text" placeholder='Supreme Upper Crust' />
                                    </div>
                                </div>
                               
                                <div className='col-xl-3 col-md-6'>
                                    <div className="flag-box form-group mb-24">
                                        <Form.Label className='fw-mediam'>Mart / Store Phone Number</Form.Label>
                                        <div className="d-flex border-outer">
                                            <LanguageSwitcher />
                                            <div className="flex-grow-1">
                                                <Form.Control type="text" aria-describedby="" placeholder='123453212134' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6'>
                                    <div className='position-relative location-lung-box'>
                                        <div className="form-group mb-24">
                                            <Form.Label >Country</Form.Label>
                                            <LanguageSwitcherCountryName  paramKey="lang1"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6'>
                                    <div className="form-group mb-24">
                                        <Form.Label >City</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Kumasi</option>
                                            <option value="1">Ostin </option>
                                            <option value="2">Ostin old</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-md-6'>
                                    <div className='position-relative location-lung-box'>
                                        <div className="form-group mb-24">
                                            <Form.Label >Currency</Form.Label>
                                            <LanguageSwitcherCountryName  paramKey="lang1"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-md-12'>
                                    <div className="form-group mb-24">
                                        <Form.Label >Mart / Store Address</Form.Label>
                                        <Form.Control type="text" placeholder='House number, Street, Area, Landmark...' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btn-bottom-box d-flex align-items-center justify-content-end mt-2'>
                        <Link href="" className='btn btn-border rounded-4'>Save Changes</Link>
                    </div> 
                </Form>
            </div>
        </div>

        
        <div className='card-box mb-4'>
            <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h2>Mart / Store Type & Availability</h2>
                </div> 
                <Link href="" className='btn btn-border btn-grey border-0 rounded-3 btn-hover-dark-grey'  onClick={() => setShowDateChange(true)}> Edit Details</Link>
            </div>
            <div className='from-bottom-box'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='label-text-box mb-24'>
                                    <span className='label-text w-100 d-block'>Your Mart or Store Type</span>
                                    <span className='out-put-label w-100 d-block'>Supermarket</span>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='label-text-box mb-24'>
                                    <span className='label-text w-100 d-block'>Category</span>
                                    <span className='out-put-label w-100 d-block'>Dairy</span>
                                </div>
                            </div>
                            
                                                    <div className='col-md-6'>
                                <div className='label-text-box mb-24'>
                                    <span className='label-text w-100 d-block'>Availability</span>
                                    <span className='out-put-label w-100 d-block text-purple'>Monday-Saturday</span>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='label-text-box mb-24'>
                                    <span className='label-text w-100 d-block py-2'></span>
                                    <span className='out-put-label w-100 d-block'>10:00 AM - 10:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>


        
        <div className='card-box mb-4'>
            <div className='table-top d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between gap-3'>
                <div className='left-table  position-relative'>
                    <h2>Mart / Store Documents</h2>
                </div>
            </div>
            <div className='from-bottom-box'>
                <Form>
                    <div className='row'>
                        
                        <div className='col-md-6'>
                            <div className='border-box p-16 border rounded-3 mb-24'>
                                <div className='top-heading-changes d-flex align-items-center gap-2 justify-content-between'>
                                    <h2>Business Registration Permit</h2>
                                    <Link href="" className='btn btn-border  btn-responsive-border d-flex align-items-center rounded-3 gap-2 justify-content-center'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3327 10.0827C18.1085 8.46952 17.3602 6.97485 16.2029 5.82886C15.0457 4.68288 13.5438 3.94917 11.9285 3.74075C10.3133 3.53233 8.67434 3.86077 7.26412 4.67547C5.8539 5.49017 4.75066 6.74593 4.12435 8.24932M3.66602 4.58266V8.24932H7.33268M3.66602 11.916C3.89019 13.5291 4.63854 15.0238 5.79576 16.1698C6.95299 17.3158 8.45491 18.0495 10.0702 18.2579C11.6854 18.4663 13.3244 18.1379 14.7346 17.3232C16.1448 16.5085 17.248 15.2527 17.8743 13.7493M18.3327 17.416V13.7493H14.666" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>  
                                        <span>
                                            Change
                                        </span>
                                    </Link>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-12'>
                                        <div className="upload-img-group mb-24">
                                            <Image src={UploadFile} alt='' className='w-100'></Image>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group mb-24">
                                            <Form.Label>Registration Number</Form.Label>
                                            <Form.Control type="text" placeholder='1234567890SQUCH' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="form-group mb-0">
                                            <Form.Label>Registration Validity</Form.Label>
                                            <DatePickers />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='border-box p-16 border rounded-3 mb-24'>
                                <div className='top-heading-changes d-flex align-items-center gap-2 justify-content-between'>
                                    <h2>Tax Registration</h2>
                                    <Link href="" className='btn btn-border btn-responsive-border d-flex align-items-center rounded-3 gap-2 justify-content-center'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3327 10.0827C18.1085 8.46952 17.3602 6.97485 16.2029 5.82886C15.0457 4.68288 13.5438 3.94917 11.9285 3.74075C10.3133 3.53233 8.67434 3.86077 7.26412 4.67547C5.8539 5.49017 4.75066 6.74593 4.12435 8.24932M3.66602 4.58266V8.24932H7.33268M3.66602 11.916C3.89019 13.5291 4.63854 15.0238 5.79576 16.1698C6.95299 17.3158 8.45491 18.0495 10.0702 18.2579C11.6854 18.4663 13.3244 18.1379 14.7346 17.3232C16.1448 16.5085 17.248 15.2527 17.8743 13.7493M18.3327 17.416V13.7493H14.666" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>  
                                        <span>
                                            Change
                                        </span>
                                    </Link>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-12'>
                                        <div className="upload-img-group mb-24">
                                            <Image src={UploadFileTax} alt='' className='w-100'></Image>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className="form-group mb-0">
                                            <Form.Label>Tax Registration Number</Form.Label>
                                            <Form.Control type="text" placeholder='1234567890SQUCH' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className='btn-bottom-box d-flex align-items-center justify-content-end mt-2'>
                        <Link href="" className='btn btn-border rounded-4'>Save Changes</Link>
                    </div> 
                </Form>
            </div>
        </div>
        <MartStoreAvailabilityModal  show={showDateChange} handleClose={() => setShowDateChange(false)}/>
    </div>
  )
}

export default MartStoreProfile