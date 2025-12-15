'use client'
import Link from 'next/link'
import Image from "next/image";

import AdminDashboard from '../../../../public/images/admin-dashboard.png'
import { Dropdown, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import OrdersFullDetailsModal from './OrdersFullDetailsModal'; // Make sure this path is correct

const ActiveOrderstop = () => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    
    //    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const totalTime = 100; // Total time in seconds
    const [timeLeft, setTimeLeft] = useState(totalTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000); // Changed from 10ms to 1000ms (1s) for real-time countdown

        return () => clearInterval(timer);
    }, [timeLeft]);

    const getProgress = () => ((totalTime - timeLeft) / totalTime) * 100;

    const handleShowDetails = () => {
        setShowDetailsModal(true);
    };

    const handleCloseAll = () => {
        setShowDetailsModal(false);
    };
        

  return (
    <div className='active-orders'>
        <div className='heading-line position-relative mb-3'>
            <p className='p-0 m-0'>Active Orders</p>
            <span className='line-shape'></span>
        </div>
        <div className='inner-active-order'>
            <div className='row'>
                <div className='col-xl-4 col-md-6 mb-3'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between'>
                            <div className='left-box'>
                                <h6>#1258</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                            <div className='right-box d-flex align-items-center gap-2'>
                                <Link href="" className='btn btn-yellow'>Packing</Link>
                                <div className='dropdown-sec'>
                                <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Green Peas (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Potato (500 gms)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="" onClick={() => setShowDetailsModal(true)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2'>
                                    <li>
                                        <Link href="">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666992" width="24" height="24" rx="4" fill="#3D3D3D"/>
<path d="M8.44732 5.35366C8.20732 5.35366 7.96065 5.40699 7.72065 5.52033C7.48065 5.63366 7.25398 5.78033 7.04065 5.97366C6.68065 6.30033 6.42065 6.66033 6.25398 7.06699C6.08732 7.46699 6.00065 7.90033 6.00065 8.36699C6.00065 9.04699 6.16065 9.77366 6.48732 10.5403C6.81398 11.307 7.25398 12.0737 7.80732 12.8337C8.36732 13.6003 8.98732 14.327 9.67398 15.0203C10.3673 15.707 11.094 16.327 11.854 16.8803C12.614 17.427 13.374 17.867 14.1273 18.187C14.8873 18.507 15.614 18.667 16.3073 18.667C16.7607 18.667 17.194 18.587 17.594 18.427C18.0007 18.267 18.374 18.0137 18.7073 17.6603C19.1273 17.2337 19.334 16.767 19.334 16.2737C19.334 16.087 19.294 15.9003 19.214 15.7337C19.134 15.5603 19.014 15.407 18.8407 15.287L16.6607 13.7403C16.494 13.6203 16.3407 13.5337 16.194 13.4737C16.054 13.4137 15.914 13.3803 15.7873 13.3803C15.6273 13.3803 15.4673 13.427 15.314 13.5203C15.1607 13.607 15.0007 13.7337 14.8407 13.8937L14.314 14.4003C14.2407 14.4737 14.154 14.507 14.0473 14.507C13.994 14.507 13.9473 14.5003 13.894 14.487C13.8407 14.467 13.8007 14.447 13.7607 14.4337C13.5407 14.3137 13.254 14.107 12.9073 13.8137C12.5607 13.5137 12.2073 13.1937 11.854 12.847C11.5007 12.487 11.174 12.1403 10.874 11.787C10.5807 11.4403 10.3807 11.1537 10.2607 10.927C10.2473 10.8937 10.2273 10.8537 10.2073 10.807C10.1873 10.7537 10.1807 10.7003 10.1807 10.6403C10.1807 10.527 10.2207 10.4403 10.294 10.367L10.794 9.86033C10.9607 9.69366 11.0873 9.53366 11.1673 9.38033C11.2607 9.22699 11.3073 9.07366 11.3073 8.90699C11.3073 8.78033 11.2807 8.64699 11.2207 8.50033C11.1607 8.35366 11.074 8.20033 10.9607 8.03366L9.39398 5.82699C9.27398 5.65366 9.13398 5.53366 8.96732 5.46033C8.80065 5.39366 8.63398 5.35366 8.44732 5.35366Z" stroke="white" stroke-miterlimit="10"/>
<path d="M14.6667 7.66667C15.0667 7.66667 15.68 7.98 16.18 8.44667C16.64 8.87333 17 9.44 17 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6673 5.33333C17.2473 5.33333 19.334 7.42 19.334 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666992 4C0.666992 1.79086 2.45785 0 4.66699 0H20.667C22.8761 0 24.667 1.79086 24.667 4V20C24.667 22.2091 22.8761 24 20.667 24H4.66699C2.45785 24 0.666992 22.2091 0.666992 20V4Z" fill="#3D3D3D"/>
<path d="M10.3333 16.6663H10C7.33333 16.6663 6 15.9997 6 12.6663V9.33301C6 6.66634 7.33333 5.33301 10 5.33301L15.3333 5.33301C18 5.33301 19.3333 6.66634 19.3333 9.33301V12.6663C19.3333 15.333 18 16.6663 15.3333 16.6663H15C14.7933 16.6663 14.5933 16.7663 14.4667 16.933L13.4667 18.2663C13.0267 18.853 12.3067 18.853 11.8667 18.2663L10.8667 16.933C10.76 16.7863 10.5133 16.6663 10.3333 16.6663Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 9.33301L16.0007 9.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 12.667H13.334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Rider arriving in</span>
                                    <span className="text-muted">2:52 min</span>
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 0.4} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-3'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between'>
                            <div className='left-box'>
                                <h6>#1258</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                            <div className='right-box d-flex align-items-center gap-2'>
                                <Link href="" className='btn btn-green'>Ready</Link>
                                <div className='dropdown-sec'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Onion (500gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Hybrid tomato (1 kg)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2'>
                                    <li>
                                        <Link href="">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666992" width="24" height="24" rx="4" fill="#3D3D3D"/>
<path d="M8.44732 5.35366C8.20732 5.35366 7.96065 5.40699 7.72065 5.52033C7.48065 5.63366 7.25398 5.78033 7.04065 5.97366C6.68065 6.30033 6.42065 6.66033 6.25398 7.06699C6.08732 7.46699 6.00065 7.90033 6.00065 8.36699C6.00065 9.04699 6.16065 9.77366 6.48732 10.5403C6.81398 11.307 7.25398 12.0737 7.80732 12.8337C8.36732 13.6003 8.98732 14.327 9.67398 15.0203C10.3673 15.707 11.094 16.327 11.854 16.8803C12.614 17.427 13.374 17.867 14.1273 18.187C14.8873 18.507 15.614 18.667 16.3073 18.667C16.7607 18.667 17.194 18.587 17.594 18.427C18.0007 18.267 18.374 18.0137 18.7073 17.6603C19.1273 17.2337 19.334 16.767 19.334 16.2737C19.334 16.087 19.294 15.9003 19.214 15.7337C19.134 15.5603 19.014 15.407 18.8407 15.287L16.6607 13.7403C16.494 13.6203 16.3407 13.5337 16.194 13.4737C16.054 13.4137 15.914 13.3803 15.7873 13.3803C15.6273 13.3803 15.4673 13.427 15.314 13.5203C15.1607 13.607 15.0007 13.7337 14.8407 13.8937L14.314 14.4003C14.2407 14.4737 14.154 14.507 14.0473 14.507C13.994 14.507 13.9473 14.5003 13.894 14.487C13.8407 14.467 13.8007 14.447 13.7607 14.4337C13.5407 14.3137 13.254 14.107 12.9073 13.8137C12.5607 13.5137 12.2073 13.1937 11.854 12.847C11.5007 12.487 11.174 12.1403 10.874 11.787C10.5807 11.4403 10.3807 11.1537 10.2607 10.927C10.2473 10.8937 10.2273 10.8537 10.2073 10.807C10.1873 10.7537 10.1807 10.7003 10.1807 10.6403C10.1807 10.527 10.2207 10.4403 10.294 10.367L10.794 9.86033C10.9607 9.69366 11.0873 9.53366 11.1673 9.38033C11.2607 9.22699 11.3073 9.07366 11.3073 8.90699C11.3073 8.78033 11.2807 8.64699 11.2207 8.50033C11.1607 8.35366 11.074 8.20033 10.9607 8.03366L9.39398 5.82699C9.27398 5.65366 9.13398 5.53366 8.96732 5.46033C8.80065 5.39366 8.63398 5.35366 8.44732 5.35366Z" stroke="white" stroke-miterlimit="10"/>
<path d="M14.6667 7.66667C15.0667 7.66667 15.68 7.98 16.18 8.44667C16.64 8.87333 17 9.44 17 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6673 5.33333C17.2473 5.33333 19.334 7.42 19.334 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666992 4C0.666992 1.79086 2.45785 0 4.66699 0H20.667C22.8761 0 24.667 1.79086 24.667 4V20C24.667 22.2091 22.8761 24 20.667 24H4.66699C2.45785 24 0.666992 22.2091 0.666992 20V4Z" fill="#3D3D3D"/>
<path d="M10.3333 16.6663H10C7.33333 16.6663 6 15.9997 6 12.6663V9.33301C6 6.66634 7.33333 5.33301 10 5.33301L15.3333 5.33301C18 5.33301 19.3333 6.66634 19.3333 9.33301V12.6663C19.3333 15.333 18 16.6663 15.3333 16.6663H15C14.7933 16.6663 14.5933 16.7663 14.4667 16.933L13.4667 18.2663C13.0267 18.853 12.3067 18.853 11.8667 18.2663L10.8667 16.933C10.76 16.7863 10.5133 16.6663 10.3333 16.6663Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 9.33301L16.0007 9.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 12.667H13.334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Rider is arriving shortly</span>
                                    <span className="text-muted">0:20 min</span>
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 0.7} key={2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-md-6 mb-3'>
                    <div className='order-slider-box card-box p-16'>
                        <div className='top-box d-flex gap-2 justify-content-between'>
                            <div className='left-box'>
                                <h6>#1258</h6>
                                <span>24-03-2024 | 08:30 pm</span>
                            </div>
                            <div className='right-box d-flex align-items-center gap-2'>
                                <Link href="" className='btn btn-yellow'>Packing</Link>
                                <div className='dropdown-sec'>
                                <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.625 12C14.625 12.5192 14.471 13.0267 14.1826 13.4584C13.8942 13.8901 13.4842 14.2265 13.0045 14.4252C12.5249 14.6239 11.9971 14.6758 11.4879 14.5746C10.9787 14.4733 10.511 14.2233 10.1438 13.8562C9.77673 13.489 9.52673 13.0213 9.42544 12.5121C9.32415 12.0029 9.37614 11.4751 9.57482 10.9955C9.7735 10.5158 10.11 10.1058 10.5416 9.81739C10.9733 9.52896 11.4808 9.375 12 9.375C12.6962 9.375 13.3639 9.65156 13.8562 10.1438C14.3484 10.6361 14.625 11.3038 14.625 12ZM12 7.125C12.5192 7.125 13.0267 6.97105 13.4584 6.68261C13.8901 6.39417 14.2265 5.9842 14.4252 5.50455C14.6239 5.02489 14.6758 4.49709 14.5746 3.98789C14.4733 3.47869 14.2233 3.01096 13.8562 2.64385C13.489 2.27673 13.0213 2.02673 12.5121 1.92544C12.0029 1.82415 11.4751 1.87614 10.9955 2.07482C10.5158 2.2735 10.1058 2.60995 9.81739 3.04163C9.52895 3.47331 9.375 3.98083 9.375 4.5C9.375 5.19619 9.65156 5.86387 10.1438 6.35616C10.6361 6.84844 11.3038 7.125 12 7.125ZM12 16.875C11.4808 16.875 10.9733 17.029 10.5416 17.3174C10.11 17.6058 9.7735 18.0158 9.57482 18.4955C9.37614 18.9751 9.32415 19.5029 9.42544 20.0121C9.52673 20.5213 9.77673 20.989 10.1438 21.3562C10.511 21.7233 10.9787 21.9733 11.4879 22.0746C11.9971 22.1758 12.5249 22.1239 13.0045 21.9252C13.4842 21.7265 13.8942 21.3901 14.1826 20.9584C14.471 20.5267 14.625 20.0192 14.625 19.5C14.625 18.8038 14.3484 18.1361 13.8562 17.6438C13.3639 17.1516 12.6962 16.875 12 16.875Z" fill="#262626"/></svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu align='end' className='pt-2 pb-2'>
                                            <Dropdown.Item href="#/action-1" className=' d-flex align-items-center gap-2'> 
                                               <span>Ready</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2" className=' d-flex align-items-center gap-2' > 
                                                <span>Out for delviery</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Delivered</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-4" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Completed</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-5" className='btn-active-red d-flex align-items-center gap-2'> 
                                                <span>Cancelled</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <hr className='light-bg'/>
                        <div className='item-box'>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Green Peas (500 gms)</span>
                                </li>
                                <li>₵20.00</li>
                            </ul>
                            <ul className='d-flex align-items-center justify-content-between gap-2'>
                                <li>
                                    <span><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895"/><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A"/></svg></span>
                                    <span>Potato (500 gms)</span>
                                </li>
                                <li>₵24.00</li>
                            </ul>
                        </div>
                        <hr className='light-bg'/>
                        <div className='total-bill d-flex align-items-center justify-content-between gap-2'>
                            <div className='price-box d-flex align-items-center gap-2'>Total bill  : <span>₵32.00</span> <span className='text-green'>Paid</span></div>
                            <Link className="btn-more d-flex align-items-center gap-2" href="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L8 12" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 8L12 8" stroke="#5D5D5D" stroke-linecap="round" stroke-linejoin="round"/></svg> 3 more...
                            </Link>
                        </div>
                        <div className='admin-card-box'>
                            <div className='top-admin-contact d-flex align-items-center gap-2 justify-content-between'>
                                <div className='top-inner-admin-contact d-flex align-items-center gap-2'>
                                    <div className='admin-img'>
                                        <Image alt='' src={AdminDashboard}></Image>
                                    </div>
                                    <div className='admin-details'>
                                        <h6>Jhon Doe</h6>
                                        <p className='m-0 p-0'>92515489</p>
                                    </div>
                                </div>
                                <ul className='d-flex align-items-center gap-2'>
                                    <li>
                                        <Link href="">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.666992" width="24" height="24" rx="4" fill="#3D3D3D"/>
<path d="M8.44732 5.35366C8.20732 5.35366 7.96065 5.40699 7.72065 5.52033C7.48065 5.63366 7.25398 5.78033 7.04065 5.97366C6.68065 6.30033 6.42065 6.66033 6.25398 7.06699C6.08732 7.46699 6.00065 7.90033 6.00065 8.36699C6.00065 9.04699 6.16065 9.77366 6.48732 10.5403C6.81398 11.307 7.25398 12.0737 7.80732 12.8337C8.36732 13.6003 8.98732 14.327 9.67398 15.0203C10.3673 15.707 11.094 16.327 11.854 16.8803C12.614 17.427 13.374 17.867 14.1273 18.187C14.8873 18.507 15.614 18.667 16.3073 18.667C16.7607 18.667 17.194 18.587 17.594 18.427C18.0007 18.267 18.374 18.0137 18.7073 17.6603C19.1273 17.2337 19.334 16.767 19.334 16.2737C19.334 16.087 19.294 15.9003 19.214 15.7337C19.134 15.5603 19.014 15.407 18.8407 15.287L16.6607 13.7403C16.494 13.6203 16.3407 13.5337 16.194 13.4737C16.054 13.4137 15.914 13.3803 15.7873 13.3803C15.6273 13.3803 15.4673 13.427 15.314 13.5203C15.1607 13.607 15.0007 13.7337 14.8407 13.8937L14.314 14.4003C14.2407 14.4737 14.154 14.507 14.0473 14.507C13.994 14.507 13.9473 14.5003 13.894 14.487C13.8407 14.467 13.8007 14.447 13.7607 14.4337C13.5407 14.3137 13.254 14.107 12.9073 13.8137C12.5607 13.5137 12.2073 13.1937 11.854 12.847C11.5007 12.487 11.174 12.1403 10.874 11.787C10.5807 11.4403 10.3807 11.1537 10.2607 10.927C10.2473 10.8937 10.2273 10.8537 10.2073 10.807C10.1873 10.7537 10.1807 10.7003 10.1807 10.6403C10.1807 10.527 10.2207 10.4403 10.294 10.367L10.794 9.86033C10.9607 9.69366 11.0873 9.53366 11.1673 9.38033C11.2607 9.22699 11.3073 9.07366 11.3073 8.90699C11.3073 8.78033 11.2807 8.64699 11.2207 8.50033C11.1607 8.35366 11.074 8.20033 10.9607 8.03366L9.39398 5.82699C9.27398 5.65366 9.13398 5.53366 8.96732 5.46033C8.80065 5.39366 8.63398 5.35366 8.44732 5.35366Z" stroke="white" stroke-miterlimit="10"/>
<path d="M14.6667 7.66667C15.0667 7.66667 15.68 7.98 16.18 8.44667C16.64 8.87333 17 9.44 17 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6673 5.33333C17.2473 5.33333 19.334 7.42 19.334 10" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666992 4C0.666992 1.79086 2.45785 0 4.66699 0H20.667C22.8761 0 24.667 1.79086 24.667 4V20C24.667 22.2091 22.8761 24 20.667 24H4.66699C2.45785 24 0.666992 22.2091 0.666992 20V4Z" fill="#3D3D3D"/>
<path d="M10.3333 16.6663H10C7.33333 16.6663 6 15.9997 6 12.6663V9.33301C6 6.66634 7.33333 5.33301 10 5.33301L15.3333 5.33301C18 5.33301 19.3333 6.66634 19.3333 9.33301V12.6663C19.3333 15.333 18 16.6663 15.3333 16.6663H15C14.7933 16.6663 14.5933 16.7663 14.4667 16.933L13.4667 18.2663C13.0267 18.853 12.3067 18.853 11.8667 18.2663L10.8667 16.933C10.76 16.7863 10.5133 16.6663 10.3333 16.6663Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 9.33301L16.0007 9.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33398 12.667H13.334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='bottom-progressbar'>
                                <div className="d-flex justify-content-between mb-1">
                                    <span className="text-muted">Rider arriving in</span>
                                    <span className="text-muted">2:52 min</span>
                                </div>
                                <ProgressBar variant="success" now={getProgress() * 0.4} key={1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <OrdersFullDetailsModal show={showDetailsModal} handleClose={handleCloseAll} />
    </div>
  )
}

export default ActiveOrderstop